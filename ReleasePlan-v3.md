# v3 Release Plan

## Scope

v3 is the **Architecture of Trust** release line.

It is not a restart of the Acutis project. It extends the existing editorial work by asking how Carlo Acutis's digital mission can become a serious framework for trust, provenance, memory, faith, and human formation in the contemporary infosphere.

The center remains Carlo Acutis as programmer and webdesigner.

Floridi provides the ethical vocabulary. Hohpe and Peirce remain useful lenses. Provenance standards are instruments. None of them replace Carlo.

## Current Repository Facts

Observed before creating this plan:

- Default branch: `main`
- Repository: `thiagoprazeres/acutis-2026`
- Existing local git tag: `v1.0.0`
- Existing GitHub release history includes draft editorial releases through `v2.1.0`
- Existing issue label pattern uses `release:<version>`
- Existing milestones are release-scoped and remain open even after their tracked issues close
- All previous GitHub issues were closed before this v3 planning pass

Created for v3:

- Milestone: [`v3.0.0 — Architecture of trust`](https://github.com/thiagoprazeres/acutis-2026/milestone/8)
- Label: `release:v3.0.0`

## Planning Rules

No guesswork.

No symmetrical planning for its own sake.

No arbitrary weights, story points, control weights, or scorecards.

No issue should be closed by planning alone.

Release movement is based on evidence:

- source spine reviewed
- editorial narrative shaped
- implementation path identified
- external-reference policy preserved
- validation run successfully
- release notes written from completed work

If a future steward needs more issues, they should create them because a real workstream exists, not because the plan needs a balanced-looking number.

## Future Git And Release Tags

These tags are defined as release markers, not created now.

`v3.0.0-alpha.1`

Use when the v3 source spine is stable enough to support public editorial work. This means Carlo, Floridi, and provenance references are explicit, traceable, and not mixed into citation clutter.

`v3.0.0-alpha.2`

Use when the public v3 narrative draft exists in the repository and clearly preserves the hierarchy: Carlo first, Floridi as ethical horizon, provenance standards as instruments.

`v3.0.0-beta.1`

Use when v3 is implemented in the static site using existing architecture, all intended locale/content surfaces are present, and local validation passes.

`v3.0.0-rc.1`

Use when the release candidate is editorially stable, media/source policy is clean, generated output has been reviewed, and no release-blocking issue remains.

`v3.0.0`

Use only for the public v3 release: Architecture of Trust as a stable editorial layer, validated, documented, and released with notes based on actual completed work.

Do not create intermediate tags unless the repository has reached the condition described by the tag.

## Release Gates

### Source Gate

The source spine is compact and defensible.

Required evidence:

- Carlo sources are primary or institutional where possible.
- Floridi sources are direct or clearly attributable.
- Technical provenance references are current enough for the implementation question.
- No UI copy depends on unsupported claims.

### Editorial Gate

The public v3 narrative exists and reads like this project.

Required evidence:

- Carlo remains the subject.
- Carlo is described as programmer and webdesigner.
- The 2026 continuity line is organic: catalog -> exhibition -> site -> mobile app.
- The prose is forward-looking, constructive, synthesis-driven, and not report-like.

### Architecture Gate

The implementation path preserves the static project.

Required evidence:

- No router changes.
- No CMS behavior.
- No client-side translation logic.
- No unrelated content rewrite.
- Any modular content block follows an existing pattern rather than inventing a new one.

### Provenance Gate

The trust layer strengthens source discipline without rehosting third-party media.

Required evidence:

- `MEDIA.md` remains authoritative.
- New external references preserve institution, title, URL, and access date.
- Technical standards are explained as support for trust, not replacements for judgment.

### Validation Gate

The repository passes the same validation expectations as prior releases.

Required evidence:

- `npm run check`
- `npm run build`
- generated output reviewed for v3 surfaces
- no third-party media copied into `src/`, `public/`, or `dist/`

### Release Gate

The final release note reflects completed work only.

Required evidence:

- milestone state reviewed
- open issues intentionally left open or explicitly resolved by a future steward
- release tag created only when the matching release condition is true
- draft release notes avoid promises about work that has not shipped

## Open Issues For Francisco

These issues are intentionally open. They are not cleanup debt from this planning pass. They are future doors.

- [#13 Stabilize the v3 source spine](https://github.com/thiagoprazeres/acutis-2026/issues/13)
- [#14 Convert the architecture dossier into the public v3 narrative](https://github.com/thiagoprazeres/acutis-2026/issues/14)
- [#15 Implement v3 without architectural drift](https://github.com/thiagoprazeres/acutis-2026/issues/15)
- [#16 Define the v3 provenance and external-reference surface](https://github.com/thiagoprazeres/acutis-2026/issues/16)
- [#17 Design the Francisco-facing education path](https://github.com/thiagoprazeres/acutis-2026/issues/17)
- [#18 Validate the v3 release envelope and tag sequence](https://github.com/thiagoprazeres/acutis-2026/issues/18)

The issue set is derived from distinct workstreams:

- sources
- narrative
- implementation
- provenance
- education
- release validation

The count is not a target. It is a consequence of the current release shape.

## Handoff Note

Francisco should inherit questions, not obligations.

The v3 plan exists so that a future maintainer can see the shape of the work without being forced into it. The open issues preserve context. The tags define release meaning. The gates define evidence. The repository remains ready, but not coercive.

The real question remains:

How should technology serve memory, trust, faith, and human formation in the next generation?
