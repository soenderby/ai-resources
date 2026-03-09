#!/usr/bin/env node

import { spawn, execSync } from "node:child_process";
import { existsSync } from "node:fs";
import puppeteer from "puppeteer-core";
import puppeteerFull from "puppeteer";

const useProfile = process.argv[2] === "--profile";

if (process.argv[2] && process.argv[2] !== "--profile") {
	console.log("Usage: browser-start.js [--profile]");
	console.log("\nOptions:");
	console.log("  --profile  Copy your Linux browser profile (cookies, logins)");
	process.exit(1);
}

const HOME = process.env.HOME;
const DATA_DIR = process.env.BROWSER_TOOLS_DATA_DIR || `${HOME}/.cache/browser-tools`;

function commandPath(command) {
	try {
		return execSync(`command -v ${command}`, { encoding: "utf8", shell: "/bin/bash" }).trim();
	} catch {
		return null;
	}
}

function detectBrowserExecutable() {
	if (process.env.BROWSER_TOOLS_BROWSER_PATH) {
		return process.env.BROWSER_TOOLS_BROWSER_PATH;
	}

	const candidates = [
		"chromium-browser",
		"chromium",
		"google-chrome-stable",
		"google-chrome",
		"brave-browser",
		"microsoft-edge",
		"microsoft-edge-stable",
	];

	for (const candidate of candidates) {
		const resolved = commandPath(candidate);
		if (resolved) return resolved;
	}

	try {
		const bundled = puppeteerFull.executablePath();
		if (bundled && existsSync(bundled)) return bundled;
	} catch {}

	return null;
}

function detectProfileDir() {
	if (process.env.BROWSER_TOOLS_PROFILE_DIR) {
		return process.env.BROWSER_TOOLS_PROFILE_DIR;
	}

	const candidates = [
		`${HOME}/.config/google-chrome`,
		`${HOME}/.config/chromium`,
		`${HOME}/.config/microsoft-edge`,
		`${HOME}/.config/BraveSoftware/Brave-Browser`,
	];

	for (const candidate of candidates) {
		if (existsSync(candidate)) return candidate;
	}

	return null;
}

const browserExecutable = detectBrowserExecutable();
if (!browserExecutable) {
	console.error("✗ Could not find a Linux browser executable.");
	console.error("  Install chromium/google-chrome, or set BROWSER_TOOLS_BROWSER_PATH.");
	process.exit(1);
}

// Check if already running on :9222
try {
	const browser = await puppeteer.connect({
		browserURL: "http://localhost:9222",
		defaultViewport: null,
	});
	await browser.disconnect();
	console.log("✓ Browser already running on :9222");
	process.exit(0);
} catch {}

// Setup browser data dir
try {
	execSync(`mkdir -p "${DATA_DIR}"`, { stdio: "ignore" });
	execSync(`rm -f "${DATA_DIR}/SingletonLock" "${DATA_DIR}/SingletonSocket" "${DATA_DIR}/SingletonCookie"`, { stdio: "ignore" });
} catch {
	console.error(`✗ Failed to prepare browser data dir: ${DATA_DIR}`);
	process.exit(1);
}

if (useProfile) {
	const profileSource = detectProfileDir();
	if (!profileSource || !existsSync(profileSource)) {
		console.error("✗ Could not find Linux browser profile directory.");
		console.error("  Set BROWSER_TOOLS_PROFILE_DIR to your profile path.");
		process.exit(1);
	}

	console.log(`Syncing profile from ${profileSource}...`);
	execSync(
		`rsync -a --delete \
			--exclude='SingletonLock' \
			--exclude='SingletonSocket' \
			--exclude='SingletonCookie' \
			--exclude='*/Sessions/*' \
			--exclude='*/Current Session' \
			--exclude='*/Current Tabs' \
			--exclude='*/Last Session' \
			--exclude='*/Last Tabs' \
			"${profileSource}/" "${DATA_DIR}/"`,
		{ stdio: "pipe" },
	);
}

// Start Linux browser with CDP enabled
spawn(
	browserExecutable,
	[
		"--remote-debugging-port=9222",
		"--remote-debugging-address=127.0.0.1",
		`--user-data-dir=${DATA_DIR}`,
		"--no-first-run",
		"--no-default-browser-check",
	],
	{ detached: true, stdio: "ignore" },
).unref();

// Wait for browser to be ready
let connected = false;
for (let i = 0; i < 30; i++) {
	try {
		const browser = await puppeteer.connect({
			browserURL: "http://localhost:9222",
			defaultViewport: null,
		});
		await browser.disconnect();
		connected = true;
		break;
	} catch {
		await new Promise((resolve) => setTimeout(resolve, 500));
	}
}

if (!connected) {
	console.error(`✗ Failed to connect to browser on :9222 (executable: ${browserExecutable})`);
	process.exit(1);
}

console.log(`✓ Browser started on :9222 (${browserExecutable})${useProfile ? " with your profile" : ""}`);
