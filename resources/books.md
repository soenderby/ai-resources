# Books

Book-length sources worth keeping.

---

## [Extreme Programming Explained: Embrace Change](https://www.oreilly.com/library/view/extreme-programming-explained/0321278658/)
By [Kent Beck](people.md#kent-beck). The canonical XP book. Its lasting value is not any single practice but the way the practices reinforce each other: tests, refactoring, pairing, short iterations, customer feedback, and simple design as a system for keeping software changeable. Especially relevant here because agent-assisted development increases the need for fast feedback and small safe steps rather than reducing it.

---

## [Test Driven Development: By Example](https://www.oreilly.com/library/view/test-driven-development/0321146530/)
By [Kent Beck](people.md#kent-beck). The primary TDD source. Beck's framing is more practical and design-oriented than many later debates: tests are there to eliminate fear, keep changes small, and create the conditions for continuous refactoring. A strong anchor for thinking about how agents should be used inside a disciplined change loop rather than as code generators left to run ahead.

---

## [A Philosophy of Software Design](https://web.stanford.edu/~ouster/cgi-bin/book.php)
By [John Ousterhout](people.md#john-ousterhout). One of the clearest modern books on complexity as the core software-design problem. The most useful ideas are durable: complexity shows up as change amplification and obscurity; good modules are deep, hiding complexity behind simple interfaces; and design should focus on what matters rather than on mechanical tidiness. Particularly valuable for reviewing agent-produced code, which often looks orderly while exporting too many details.

---

## [Domain-Driven Design: Tackling Complexity in the Heart of Software](https://www.oreilly.com/library/view/domain-driven-design-tackling/0321125215/)
By [Eric Evans](people.md#eric-evans). The foundational DDD book. Its distinctive contribution is not just "model the domain," but the tighter claim that software gets more tractable when the team's language, model, and implementation evolve together through refactoring. Belongs here because domain-shaped code is one of the best defenses against framework-shaped, plausible-but-wrong agent output.

---

## [The Mythical Man-Month](https://www.oreilly.com/library/view/mythical-man-month-the/0201835959/)
By [Fred Brooks](people.md#fred-brooks). A classic collection on software engineering whose most important recurring idea is conceptual integrity: large systems get harder not just because they are big, but because coherence is difficult to preserve across many people and moving parts. Still useful as a reminder that coordination, communication, and architectural unity remain central even when code generation becomes cheaper.

---

## [Object-Oriented Software Construction](https://www.eiffel.org/doc/eiffel/Object-Oriented_Software_Construction%2C_2nd_Edition)
By [Bertrand Meyer](people.md#bertrand-meyer). One of the foundational OO design books, and historically important here because the Open-Closed Principle originates with Meyer rather than with later SOLID summaries. Worth keeping as a reminder that several "SOLID" ideas have deeper roots and a richer intellectual context than the acronym suggests.

---

## [Working Effectively with Legacy Code](https://www.oreilly.com/library/view/working-effectively-with/0131177052/)
By [Michael Feathers](people.md#michael-feathers). The best practical book in this cluster for systems that are already messy. Feathers' contribution is to make changeability the goal: get code under test, find seams, and make safe progress without requiring a rewrite. Highly relevant to agent-assisted work because most real codebases are not greenfield, and agents are especially tempting to use recklessly in exactly the places where behavior is least understood.

---

## [Patterns of Software](https://archive.org/details/PatternsOfSoftware)
By [Richard P. Gabriel](people.md#richard-p-gabriel). A wide-ranging book, but the reason it belongs here is Gabriel's human-centered software lens: habitability, pattern languages, and piecemeal growth. It is one of the best sources for the idea that code is not just an artifact to generate, but a place people must be able to inhabit and change comfortably over time.

---

## [Refactoring: Improving the Design of Existing Code](https://martinfowler.com/books/refactoring.html)
By [Martin Fowler](people.md#martin-fowler). The canonical source on behavior-preserving structural change. Its enduring contribution is methodological: make many small, safe changes (backed by tests) rather than periodic heroic rewrites. Especially useful in an agent-heavy workflow where generation is cheap and design drift accumulates quickly.

---

## [Team Topologies](https://teamtopologies.com/book)
By [Matthew Skelton](people.md#matthew-skelton) and Manuel Pais. A practical organizational-design model centered on flow: four team types (stream-aligned, enabling, complicated-subsystem, platform), three interaction modes, and explicit cognitive-load management. Distinctive because it operationalizes Conway's Law and the reverse Conway maneuver as everyday engineering decisions, not abstract theory.

---

## [Growing Object-Oriented Software, Guided by Tests](https://www.oreilly.com/library/view/growing-object-oriented/9780321574442/)
By Steve Freeman and Nat Pryce. One of the best practical accounts of test-driven development as a design discipline, not just a correctness check. The strongest idea is the nested feedback-loop model (unit tests, acceptance tests, delivery cadence) that keeps architecture changeable while work is in flight.

---

## [Accelerate](https://itrevolution.com/product/accelerate/)
By [Nicole Forsgren](people.md#nicole-forsgren), Jez Humble, and Gene Kim. An empirical benchmark for software-delivery performance. Its key contribution is the four-metric model (lead time, deployment frequency, time to restore, change fail rate) and the finding that speed and stability improve together in high-performing teams.

---

## [Software Engineering at Google](https://abseil.io/resources/swe-book)
By [Titus Winters](people.md#titus-winters), Tom Manshreck, and Hyrum Wright. Valuable for one framing that should age well: software engineering is "programming integrated over time." Focuses on sustainability under real organizational scale—time, growth, and trade-off discipline—rather than on one-off programming output.
