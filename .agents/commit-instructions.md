# Commit Message Guide

This document provides instructions to generate **clear, concise, and
standardized commit messages**.

## General Format

A commit message must follow this convention:

    <type>(<scope>): <subject>

- **type**: describes the nature of the change (see list below).
- **scope** _(optional)_: specifies the affected area (e.g., api, ui,
  tests).
- **subject**: short summary of the change (in imperative, lowercase
  first letter, no period).

---

## Allowed Types

- `feat`: add a new feature
- `fix`: bug fix
- `docs`: documentation changes
- `style`: formatting or style changes (whitespace, indentation,
  etc.), no logic impact
- `refactor`: code restructuring without adding features or fixing
  bugs
- `perf`: performance improvements
- `test`: add or modify tests
- `build`: changes to the build system or dependencies
- `ci`: changes to CI/CD configuration
- `chore`: miscellaneous tasks with no direct code impact (cleanup,
  scripts, etc.)

---

## Best Practices

1.  **Imperative**: write as a command (e.g., `add feature`, not `added`
    or `adds`).
2.  **Clarity**: keep the subject short (≤ 50 characters).
3.  **Extra details**: use the commit body to explain the _why_ if
    needed.
4.  **References**: include issue or ticket numbers in the body
    (`Refs #123`).

---

## Examples

Good commit:

    feat(api): add user authentication with JWT

With description:

    fix(ui): correct button alignment on login page

    The login button was misaligned on small screens due to
    incorrect flexbox configuration. Adjusted CSS classes
    to ensure proper centering across all devices.

    Refs #42

Bad commit:

    update stuff

---

## Summary

Always use:

- **clear type**
- **scope if useful**
- **concise subject in imperative**
- **explanatory body if necessary**
