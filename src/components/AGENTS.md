# Component Guidelines

## Structure
- **Primitives**: `src/components/primitives/` - simple components (Button, Toggle, Badge, CodeBlock)
- **Composites**: `src/components/<name>/` - complex components with sub-components

## Composites Pattern
- Directory with `index.ts` barrel file
- `root.tsx` for main component (exported without "Root" suffix)
- Separate files for sub-components

## Directives
- Use Tailwind + `tailwind-variants` for variants
- Let `tv()` handle class merging when possible, use `twMerge` for components without variants
- Extend native element props in TypeScript
- Named exports only
- Update demo page (`src/app/demo`) when adding/modifying components
- All colors from theme tokens in `globals.css`, never use hardcoded values
