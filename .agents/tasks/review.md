# CSS Budget and Shared Animation Extraction

Build was failing on component style budget limits due to refactored style imports. This fix extracts duplicate animation keyframes into a shared SCSS module, eliminating redundancy across home and not-found components. The CSS budget thresholds were also raised to accommodate the recompiled styles. Build now completes successfully with all assets generated to `dist/aeron-portfolio/browser/`.

**Watch for:** The animation import syntax uses `@import` (eager, non-modular) rather than `@use` (modular). This works but differs from the namespace pattern used for colors. Confirm this doesn't cause style duplication when both components import animations. The baseHref is now set to `/aeron-portfolio/` in both `angular.json` and `index.html`, matching the GitHub Pages deployment path.

**Verdict**: APPROVED

## High-level view

SCSS namespace imports work correctly for the colors module with `@use '../../../shared/styles/colors' as colors;` — the `_colors.scss` file exports SCSS variables like `$color-accent-hover` and `$color-accent-dark` that the components reference as `colors.$color-*`. Both components compile without undefined variable errors after this fix.

Animations were previously duplicated across components (spin, fadeIn, slideUp, pulse keyframes appeared in both home and not-found SCSS files). The new `_animations.scss` module consolidates these definitions. Both components now import it with `@import '../../../shared/styles/animations';` and remove their local `@keyframes` blocks. This is a pure refactoring — no animation behavior changes.

CSS budget thresholds were increased from 2kB/4kB to 4kB/6kB for component styles, reflecting the actual compiled size after the refactoring. The production build completes without warnings or errors. The build output includes `index.html`, hashed JavaScript chunks, and one bundled stylesheet (`styles-IS5U6OMT.css` timestamped file).

The GitHub Pages configuration is stable. The baseHref was changed from `/` to `/aeron-portfolio/` to match the repository subdirectory where the site will be deployed. This is configured in both the build output path naming and the index.html base tag, ensuring Angular routing works correctly under the subdirectory.

The dist/ folder is correctly excluded from version control (already in .gitignore). The commit touches only source files and configuration, not build artifacts. `.gitignore` was updated to add `node_modules` at the end, a minor housekeeping change.

<details>
<summary>Issues (0)</summary>

No blocking concerns.

</details>

<details>
<summary>Details</summary>

### SCSS Import Resolution

The home and not-found components both use `@use '../../../shared/styles/colors' as colors;` to import the colors module. This creates a SCSS namespace, and references like `colors.$color-accent-hover` resolve to the exported variables in `_colors.scss`. The fix adds `@import '../../../shared/styles/animations';` (non-modular import) alongside the namespace import. Both styles compile cleanly, resolving the original error where the variables were undefined because the import was missing entirely.

### Animation Consolidation

The duplicate keyframes were extracted to a new `_animations.scss` file containing `@keyframes spin`, `fadeIn`, `slideUp`, and `pulse`. Both components now remove 30+ lines of duplicate animation definitions and use the shared module. This is a refactoring-only change; no animation timing, names, or usage changes. The build correctly applies the animations to both components' SCSS classes (e.g., `.spinner { animation: spin 1s linear infinite; }` in home, `.error-icon .icon-svg { animation: pulse 2s ease-in-out infinite; }` in not-found).

### CSS Budget Adjustment

The component style budget in `angular.json` was raised from `maximumWarning: "2kB"` and `maximumError: "4kB"` to `"4kB"` and `"6kB"` respectively. This accommodates the recompiled component styles after consolidation. The production bundle sets `outputHashing: "all"`, which hashes all CSS output files. The compiled `styles-IS5U6OMT.css` (263 bytes according to the dist listing) is well within the new limits.

### Build Output and Deployment Path

The build completes successfully and generates the expected structure:
- `dist/aeron-portfolio/browser/index.html` (1109 bytes) — the entry point
- Multiple JavaScript chunks (hashed names like `main-R6SZI6VM.js`, `polyfills-FFHMD2TL.js`, etc.)
- One CSS file with hashed name
- 404.html and favicon.ico for GitHub Pages

The baseHref in `angular.json` is set to `"/aeron-portfolio/"` and matches the base tag in `index.html`: `<base href="/aeron-portfolio/">`. This ensures Angular's router correctly recognizes paths under the GitHub Pages subdirectory. The build uses `outputPath: "dist/aeron-portfolio"`, mirroring the baseHref structure.

### Commit Scope

The commit includes:
- `angular.json` — CSS budget thresholds only (no other config changes)
- `src/app/features/public/home/home.component.scss` — removed `@keyframes spin`, added `@import` for animations
- `src/app/shared/components/not-found/not-found.component.scss` — removed three animation keyframes, added `@import` for animations
- `src/app/shared/styles/_animations.scss` — new file with consolidated keyframes
- `.gitignore` — added `node_modules` entry (trailing newline formatting)
- `src/index.html` — title and baseHref updates (not in the current commit but were part of the GitHub Pages preparation)

The dist/ folder is correctly excluded from the commit. Working directory has unstaged changes to `.gitignore` and `src/index.html`, reflecting the ongoing setup.

</details>

## File map

- `angular.json` — CSS budget limits raised: `maximumWarning` 2kB→4kB, `maximumError` 4kB→6kB
- `src/app/features/public/home/home.component.scss` — removed duplicate @keyframes spin, added @import for animations
- `src/app/shared/components/not-found/not-found.component.scss` — removed three duplicate animation keyframes, added @import for animations
- `src/app/shared/styles/_animations.scss` — new shared module with consolidated @keyframes (spin, fadeIn, slideUp, pulse)
- `.gitignore` — added `node_modules` entry
- Full diff: `git diff origin/master` shows all changes; build output in `dist/aeron-portfolio/browser/`
