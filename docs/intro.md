---
sidebar_position: 1
---

## The Project

Cyo is starting off as a derivative [Nim][nim-site], with the
intention of becoming a different language.

The goal is to have a *statically typed* *structured* programming language to
create software (including itself) that is sustainable, it aims to be:

- *Safe:* statically typed, nil safe, with structured approach to resources and
  concurrency
- *Scalable:* target a variety of hardware architectures, with zero or low cost
  abstractions to run in constrained environments.
- *Adaptable:* producing native executables, running via the built-in VM, or
  with in a JS/WASM runtime.
- *Evolving:* developed and maintained by its community of users, with a self-
  hosted compiler, support for metaprogramming to safely attempt language
  extension outside of the core, and support code migration to avoid legacy.

We are currently working on the first phase of this, by slimming down the
language and compiler to a workable core and increasing compiler development
productivity. The following phase will starting with one of the following
possible features:
- Introduce Continuation Passing Style transform and Structured Concurrency
  into the language, this will undoubtedly lead to dramatic changes in memory
  management and FFI
- Ease Data Oriented Design through memory regions to support the common handle
  instead of reference approach
