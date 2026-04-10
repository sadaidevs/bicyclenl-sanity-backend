# Changelog

## [Unreleased]

### PR Title
Schema simplification and cleanup

### Summary
This update simplifies the schema by removing `sharedSection` support, cleaning up related references, and making a small type adjustment in portable text links.

### Changes
- Removed `sharedSection` document type by deleting `schemaTypes/sharedRichContentType.js`.
- Removed `sharedSection` import and usage from `schemaTypes/index.ts`.
- Updated `schemaTypes/pageType.js` to remove `sharedSection` references in the `sections` field.
- Updated page schema title from `Page` to `Pages` for consistency.
- Changed `href` field type in `portableTextBlock` link object from `url` to `string`.

### Why
- Reduces schema complexity.
- Makes page section modeling clearer and easier to maintain.
- Allows more flexible link values in portable text.

### Affected Files
- `schemaTypes/index.ts`
- `schemaTypes/pageType.js`
- `schemaTypes/sharedRichContentType.js` (removed)
- `schemaTypes/shared/portableText.js`

### Verification Checklist
- [ ] Studio runs successfully (`npm run dev`).
- [ ] Page documents can be edited with sections as expected.
- [ ] No schema validation/import errors in Studio.

---

## Template

Use this block for future updates:

```md
## [YYYY-MM-DD] - PR/Release Title

### Summary
Short description of what changed and why.

### Changes
- Change 1
- Change 2
- Change 3

### Why
- Reason 1
- Reason 2

### Affected Files
- path/to/file1
- path/to/file2

### Verification Checklist
- [ ] Check 1
- [ ] Check 2
```
