---
title: Feedback loops
---

There is a correlation between how long I spend on a project before I move on to
other things and how tight the feedback loop is during the development of a
project.

Generally speaking, the tighter the feedback loop, the easier and faster it is
to continue pushing through to an initial working product.

I now always ask myself -- can I make the process of making a change and viewing
its result faster?

Most of the time, I can, and it usually looks like this:

- Writing more tests, preferably before writing a feature
- Storing project specific commands and aliasing them in a
  [justfile](https://github.com/casey/just)
- Increasing system observability -- e.g., by setting up logging
- Being wary of bringing in large dependencies that could result in dramatically
  increased compile times
