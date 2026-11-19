# AGENTS.md

Instructions for AI agents working in this repository. Keep changes small, consistent, and easy to review.

## Project

Nha Trang (`nhatrang`) — trang web giới thiệu về nha trang.

## Directory Structure

Organize code by responsibility. Do not dump files in the repository root.

```
.
├── src/            # Application source
│   ├── config/     # Environment and app configuration
│   ├── modules/    # Feature modules (one folder per domain)
│   ├── shared/     # Reusable utilities, types, constants
│   └── main.*      # Entry point only
├── tests/          # Mirrors src/ structure
├── docs/           # Design notes and decisions
├── scripts/        # Dev and maintenance scripts
└── AGENTS.md
```

Rules:
- Group by feature first, then by layer inside each feature (e.g. controller, service, repository, model).
- One responsibility per file. Split a file when it exceeds ~300 lines or mixes concerns.
- Put new files where similar files already live. Check existing structure before creating folders.
- No generic dumping grounds such as `misc/`, `helpers2/`, or `temp/`.
- Never commit secrets, `.env` files, build output, or IDE files (`.idea/`, `*.iml`).

## Code Style

- Follow the conventions of the surrounding code: naming, formatting, error handling.
- Use clear names so code explains itself. Prefer small functions with a single purpose.
- Do not add dependencies unless necessary; justify any new one.
- Validate input at system boundaries. Do not swallow errors silently.

## Comments

- Default to no comments. Write code that does not need them.
- Comment only the non-obvious *why* (hidden constraint, workaround, subtle invariant).
- Never restate what the code does, narrate changes, or leave commented-out code.
- Do not add decorative banners, section dividers, or boilerplate docblocks on every function.

## Documentation Files

- Keep every file short and focused: `AGENTS.md`, README, and docs should each stay concise.
- Link to other docs instead of duplicating content.
- Do not create new documentation files unless asked.

## Workflow

1. Read the relevant code before editing. Do not guess.
2. Make the smallest change that solves the task. No unrelated refactors.
3. Add or update tests for changed behavior, then run them.
4. Report what changed and anything left undone or unverified.
5. Ask before destructive actions (deleting files, rewriting history, dropping data).
