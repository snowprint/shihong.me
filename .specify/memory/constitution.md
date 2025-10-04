<!--
Sync Impact Report:
Version: 0.0.0 → 1.0.0
Modified principles: N/A (initial version)
Added sections: All core principles, Development Standards, Governance
Removed sections: None
Templates requiring updates:
  ✅ .specify/templates/plan-template.md (reviewed - compatible)
  ✅ .specify/templates/spec-template.md (reviewed - compatible)
  ✅ .specify/templates/tasks-template.md (reviewed - compatible)
Follow-up TODOs:
  - RATIFICATION_DATE needs to be set (marked as TODO in Governance section)
-->

# shihong.me Constitution

## Core Principles

### I. Simplicity First
Every feature MUST start with the simplest possible implementation. Complexity requires
explicit justification documenting why simpler alternatives are insufficient. No
speculative features—build only what is needed now (YAGNI principle strictly enforced).

**Rationale**: Personal websites benefit from maintainability over feature richness.
Simple code is easier to update, deploy, and understand when returning after breaks.

### II. Performance & Accessibility
All pages MUST load in under 2 seconds on 3G connections. Lighthouse accessibility
score MUST be 90+ for all pages. Images MUST be optimized and lazy-loaded. Critical
CSS MUST be inlined.

**Rationale**: Personal sites represent the builder. Fast, accessible sites demonstrate
technical competence and respect for all users regardless of connection speed or
assistive technology needs.

### III. Mobile-First Responsive Design
All features MUST be designed and tested on mobile viewports first, then progressively
enhanced for larger screens. Touch targets MUST be minimum 44x44px. Text MUST be
readable without zooming.

**Rationale**: Majority of web traffic is mobile. Mobile-first ensures the core
experience works for the largest audience, with desktop as enhancement rather than
primary target.

### IV. Content Ownership & Portability
All content MUST be stored in portable formats (Markdown, JSON, or plain text). The
site MUST be deployable to any static hosting provider without vendor lock-in. No
content may be stored exclusively in proprietary platforms or databases.

**Rationale**: Personal sites should outlive any specific hosting provider or
technology stack. Portable content ensures longevity and migration freedom.

### V. Testing & Quality Gates
Production deployments MUST pass automated tests covering core functionality. Broken
links MUST be detected before deployment. Visual regression tests MUST be run for UI
changes. Manual smoke testing MUST verify critical paths.

**Rationale**: While personal sites may not require enterprise-level testing, broken
deployments damage credibility. Automated gates prevent embarrassing public errors.

## Development Standards

### Version Control
All changes MUST be committed with descriptive messages following conventional commit
format (feat:, fix:, docs:, etc.). Feature branches MUST be used for non-trivial
changes. Main branch MUST always be deployable.

### Code Style
Code MUST follow language-specific community standards (Prettier for JS/TS, Black for
Python, etc.). Linting MUST be automated and pass before commits. Configuration files
MUST be checked into version control.

### Documentation
README MUST include setup instructions, deployment process, and architecture overview.
Complex features MUST include inline comments explaining "why" not "what". Breaking
changes MUST be documented in a CHANGELOG.

## Governance

### Amendment Process
Constitution amendments MUST be documented in git history with rationale. Breaking
changes require MAJOR version bump. New principles or sections require MINOR version
bump. Clarifications and wording fixes require PATCH version bump.

### Compliance Review
All design documents (spec.md, plan.md) MUST include Constitution Check section
verifying compliance. Violations MUST be justified in Complexity Tracking table or
design MUST be simplified. Post-implementation reviews SHOULD verify constitutional
adherence.

### Versioning Policy
This constitution follows semantic versioning (MAJOR.MINOR.PATCH). Version increments
require updating all template references to new version number.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): Set date when constitution is approved | **Last Amended**: 2025-10-05
