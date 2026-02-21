# Design System

This file documents the current design token system implemented from:

- `design-tokens.json`
- `Light mode.tokens.json`
- `Dark mode.tokens.json`

## Typography

### Font Families

- `--font-heading`: Outfit
- `--font-body`: Switzer

### Font Sizes

| Token | CSS Variable | Value |
|---|---|---|
| Font-Size-100 | `--fs-100` | `12px` (`0.75rem`) |
| Font-Size-200 | `--fs-200` | `14px` (`0.875rem`) |
| Font-Size-300 | `--fs-300` | `16px` (`1rem`) |
| Font-Size-400 | `--fs-400` | `20px` (`1.25rem`) |
| Font-Size-500 | `--fs-500` | `26px` (`1.625rem`) |
| Font-Size-600 | `--fs-600` | `32px` (`2rem`) |

### Heading Scale

| Token | CSS Variable | Value |
|---|---|---|
| H1 | `--h1` | `52px` (`3.25rem`) |
| H2 | `--h2` | `40px` (`2.5rem`) |
| H3 | `--h3` | `32px` (`2rem`) |
| H4 | `--h4` | `24px` (`1.5rem`) |
| H5 | `--h5` | `20px` (`1.25rem`) |
| H6 | `--h6` | `18px` (`1.125rem`) |
| H7 | `--h7` | `20px` (`1.25rem`) |
| H8 | `--h8` | `18px` (`1.125rem`) |
| H9 | `--h9` | `16px` (`1rem`) |
| H10 | `--h10` | `14px` (`0.875rem`) |
| H11 | `--h11` | `12px` (`0.75rem`) |
| H12 | `--h12` | `10px` (`0.625rem`) |

### Legacy Type Mapping

| Utility Token | CSS Variable | Value |
|---|---|---|
| Display | `--type-display` | `52px` (`3.25rem`) |
| H1 | `--type-h1` | `40px` (`2.5rem`) |
| H2 | `--type-h2` | `32px` (`2rem`) |
| H3 | `--type-h3` | `24px` (`1.5rem`) |
| H4 | `--type-h4` | `20px` (`1.25rem`) |
| H5 | `--type-h5` | `18px` (`1.125rem`) |
| H6 | `--type-h6` | `16px` (`1rem`) |
| Body-XL | `--type-body-xl` | `20px` (`1.25rem`) |
| Body-LG | `--type-body-lg` | `18px` (`1.125rem`) |
| Body-Base | `--type-body-base` | `16px` (`1rem`) |
| Body-SM | `--type-body-sm` | `14px` (`0.875rem`) |
| Caption | `--type-caption` | `12px` (`0.75rem`) |
| Meta | `--type-meta` | `12px` (`0.75rem`) |

### Body Scale

| Token | CSS Variable | Value |
|---|---|---|
| Body-XL | `--body-xl` | `20px` (`1.25rem`) |
| Body-L | `--body-l` | `18px` (`1.125rem`) |
| Body-M | `--body-m` | `16px` (`1rem`) |
| Body-S | `--body-s` | `14px` (`0.875rem`) |
| Body-XS | `--body-xs` | `12px` (`0.75rem`) |
| Body-XXS | `--body-xxs` | `10px` (`0.625rem`) |

### Font Weights

| Token | CSS Variable | Value |
|---|---|---|
| Regular | `--weight-regular` | `400` |
| Medium | `--weight-medium` | `500` |
| Semibold | `--weight-semibold` | `600` |
| Bold | `--weight-bold` | `700` |

### Line Heights

| Token | CSS Variable | Value |
|---|---|---|
| Line-Height-01 | `--lh-01` | `1.08` |
| Line-Height-02 | `--lh-02` | `1.15` |
| Line-Height-03 | `--lh-03` | `1.3` |
| Line-Height-04 | `--lh-04` | `1.4` |
| Line-Height-05 | `--lh-05` | `1.55` |
| Line-Height-06 | `--lh-06` | `1.5` |

Composite line-height tokens:

- `--lh-display: 1.08`
- `--lh-heading: 1.15`
- `--lh-body: 1.55`

### Letter Spacing

| Token | CSS Variable | Value |
|---|---|---|
| Letter-Space-00 | `--ls-00` | `-0.02em` |
| Letter-Space-01 | `--ls-01` | `-0.025em` |
| Letter-Space-02 | `--ls-02` | `0em` |
| Letter-Space-03 | `--ls-03` | `0em` |

### Type Utilities

- Legacy utilities: `.type-display`, `.type-h1` ... `.type-h6`, `.type-body-xl`, `.type-body-lg`, `.type-body-base`, `.type-body-sm`, `.type-caption`, `.type-meta`
- New heading utilities: `.h1` ... `.h12`
- New body utilities: `.body-xl`, `.body-l`, `.body-m`, `.body-s`, `.body-xs`, `.body-xxs`

### Typography Ratios

- `.h1`-`.h6` use `line-height: 1.1` for compact hero/section headlines.
- `.h7`-`.h12` use `line-height: 1.3` to preserve readability at small sizes.
- `.body-*` utilities use `line-height: 1.55`.
- Body/caption/meta tracking is neutral (`0em`) to keep paragraph rhythm clean.

### Ramp-Inspired Rationale

- The system intentionally uses a conservative heading scale to avoid oversized hero text and reduce wrapping on tablet widths.
- Heading line-height remains tight for a crisp corporate tone, while body line-height is looser (`1.55`) for long-form readability.
- Letter spacing is near-zero for body copy and only slightly negative for headings, matching modern fintech typography patterns.

## Color

### Primitive Palettes

- Gray: `100 #F2F2F0`, `200 #DCDDE4`, `300 #A3A4B5`, `400 #67697C`, `600 #292A36`, `700 #20212B`, `800 #16171F`, `900 #010109`
- Primary: `100 #E7DCFF`, `150 #D0BAFE`, `200 #7042D2`, `300 #8952FD`, `400 #261052`
- Success: `100 #E9FBF0`, `150 #D3F6E0`, `200 #1CAA50`, `300 #23D464`, `400 #0B401E`
- Warning: `100 #FFF7F0`, `150 #FEE8D2`, `200 #D59455`, `300 #FBB26A`, `400 #88592C`
- Error: `100 #FDD8E1`, `150 #FCC5D2`, `200 #C73154`, `300 #F63D68`, `400 #521221`
- Info: `100 #D4D6FA`, `150 #A9AEF5`, `200 #181F8B`, `300 #202AB9`, `400 #080A2E`
- Coral: `100 #FFE5E0`, `150 #FFCCC1`, `200 #D86851`, `300 #FF7F65`, `400 #632114`
- Teal: `100 #DAFBFB`, `150 #B5F7F7`, `200 #39BEBE`, `300 #47EBEB`, `400 #0F3636`

### Semantic Tokens

#### Light

- Surface: `--background #F2F2F0`, `--card #FFFFFF`, `--border #DCDDE4`
- Text: `--text-primary #010109`, `--text-secondary #292A36`, `--text-tertiary #67697C`
- System: `--text-brand #7042D2`, `--text-error #C73154`, `--text-success #1CAA50`, `--text-warning #D59455`, `--text-info #181F8B`

#### Dark

- Surface: `--background #010109`, `--card #16171F`, `--border #67697C`
- Text: `--text-primary #F2F2F0`, `--text-secondary #A3A4B5`, `--text-tertiary #67697C`
- System: `--text-brand #D0BAFE`, `--text-error #F63D68`, `--text-success #23D464`, `--text-warning #FBB26A`, `--text-info #202AB9`

### Tailwind Theme Color Exports

`@theme inline` exposes semantic colors as utilities via:

- `--color-text-primary`
- `--color-text-secondary`
- `--color-text-tertiary`
- `--color-text-brand`
- `--color-text-error`
- `--color-text-success`
- `--color-text-warning`
- `--color-text-info`

### DS Surface and Effect Tokens

- `--surface-elevated` (light: `#ffffff`, dark: `#16171f`)
- `--surface-subtle` (light: `#f2f2f0`, dark: `#20212b`)
- `--stroke-subtle` (light: `#dcdde4`, dark: `#67697c`)
- `--gradient-brand` (primary token-driven gradient)
- `--shadow-xs`, `--shadow-sm`, `--shadow-md`, `--shadow-lg`

## Radius

| Token | CSS Variable | Value |
|---|---|---|
| Radius-XSmall | `--radius-xs` | `2px` (`0.125rem`) |
| Radius-Small | `--radius-sm` | `4px` (`0.25rem`) |
| Radius-Medium | `--radius-md` | `8px` (`0.5rem`) |
| Radius-Large | `--radius-lg` | `10px` (`0.625rem`) |
| Radius-XLarge | `--radius-xl` | `12px` (`0.75rem`) |
| Radius-Round | `--radius-round` | `100px` |

Backward-compat radius:

- `--radius` uses `0.5rem` (`Radius-Medium`).

## Spacing

| Token | CSS Variable | Value |
|---|---|---|
| Space-0 | `--space-0` | `0px` |
| Space-01 | `--space-1` | `2px` |
| Space-02 | `--space-2` | `4px` |
| Space-03 | `--space-3` | `8px` |
| Space-04 | `--space-4` | `12px` |
| Space-05 | `--space-5` | `16px` |
| Space-06 | `--space-6` | `24px` |
| Space-07 | `--space-7` | `32px` |
| Space-08 | `--space-8` | `48px` |
| Space-09 | `--space-9` | `72px` |
| Space-10 | `--space-10` | `96px` |
| Space-11 | `--space-11` | `120px` |

For new component spacing, use these variables in arbitrary values, e.g. `p-[var(--space-5)]`, `gap-[var(--space-3)]` (see table above for the full scale).

## Layout Primitives

- `PageContainer` (`src/components/ui/container.tsx`): shared max width and responsive horizontal padding.
- `SectionShell` (`src/components/ui/section-shell.tsx`): shared vertical rhythm (`py-16 md:py-24 lg:py-28`) with optional semantic `as` element.
- Homepage sections now compose these primitives for consistent responsive spacing.

## Utility Helpers

- `bg-surface-elevated`, `bg-surface-subtle`
- `border-stroke-subtle`
- `bg-brand-gradient`
- `shadow-ds-xs`, `shadow-ds-sm`, `shadow-ds-md`, `shadow-ds-lg`

## Usage Rules (Shadcn Adaptation)

When building new components, pulling in shadcn blocks, or updating existing components, apply these rules so the UI stays aligned with this design system.

- **Typography**: Prefer design system utilities over default Tailwind text sizes and font weights. Use `.type-display`, `.type-h1`–`.type-h6`, `.type-body-xl`–`.type-body-sm`, `.type-caption`, `.type-meta` **or** `.h1`–`.h12` and `.body-xl`–`.body-xxs` as documented; avoid raw `text-sm`, `text-lg`, `text-2xl`, `font-medium`, etc. unless there is no DS equivalent. Use `--font-heading` / `--font-body` where appropriate.
- **Colors and surfaces**: Prefer DS variables and helpers over shadcn semantic class names. Use `bg-[var(--background)]`, `text-[var(--text-secondary)]`, `border-[var(--border)]`, `text-[var(--text-brand)]`, and helpers like `bg-surface-elevated`, `bg-surface-subtle`, `border-stroke-subtle` instead of `bg-primary`, `text-muted-foreground`, `border-border` where the intent is to align with the design system. (Note: `@theme inline` currently maps shadcn names to the same DS variables; this rule keeps the DS as the explicit contract.)
- **Spacing and layout**: Use `PageContainer` and `SectionShell` for structural layout. For internal component spacing, prefer space variables (e.g. `p-[var(--space-5)]`, `gap-[var(--space-3)]`) over ad hoc Tailwind spacing where possible; the space scale is defined in the Spacing table above.
- **Radius and shadows**: Prefer DS radius variables (e.g. `rounded-[var(--radius-md)]`) over default `rounded-*` classes and use DS shadows (`shadow-ds-xs`, `shadow-ds-sm`, `shadow-ds-md`, `shadow-ds-lg`) as listed in Utility Helpers.

When adding or refactoring shadcn components: (1) apply the rules above, (2) do not invent new tokens—use only tokens defined in this document and the referenced token JSON files, (3) if a requirement has no token, ask for clarification before proceeding.

## Avoid / Do Not Use

- Do not use default Tailwind type scale or font-weight classes for UI that should follow the design system; use DS type and weight utilities/variables instead.
- Do not use shadcn semantic color class names as the default choice when a DS variable or helper exists; prefer the DS forms described in Usage Rules.
- Do not introduce new design tokens; use only tokens defined in this document (and in the referenced token JSON files).

## One-Off Color Notes

The rollout replaces most hardcoded values with DS tokens. Remaining non-token values are intentional and should be revisited only with visual QA sign-off:

- Hero overlay `bg-black/60` for text contrast over photography.
- Illustration-specific dimensions in chart/video placeholders.
