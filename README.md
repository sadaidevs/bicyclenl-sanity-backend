# BicycleNL Sanity Backend

This repository contains the Sanity Studio and schemas used to manage BicycleNL content.
The frontend project reads content from this Sanity dataset.

## Project Details

- Studio name: BicycleNL
- Sanity project id: `hcnm45vz`
- Dataset: `production`
- Main config: `sanity.config.ts`

## Quick Start (Using Sanity Locally)

Important login note:

- Before running Sanity Studio, the developer must already be logged in on their local machine with the dev admin Gmail account.
- Access details are managed internally. Contact management to get the correct login information.

1. Install dependencies:

	```bash
	npm install
	```

2. Start Sanity Studio in development mode:

	```bash
	npm run dev
	```

3. Open the local Studio URL shown in the terminal and sign in.

## Updating Schemas

Schema files are in `schemaTypes/`.

When adding or changing a schema:

1. Update or create the schema file in `schemaTypes/`.
2. Ensure the schema is exported in `schemaTypes/index.ts`.
3. Confirm it is included in `schemaTypes` array used by `sanity.config.ts`.
4. Run `npm run dev` and verify the document type/fields in Studio.
5. Update docs in `docs/` so the schema reference stays current.

## Current Schema (Active)

The currently registered schema types are:

1. `eventItem` (Events)
2. `news` (News Article)
3. `page` (Pages)
4. `section` (Rich content section object)
5. `eventsResult` (Event result linked to an event)

Source of truth:

- Registration list: `schemaTypes/index.ts`
- Field definitions: files in `schemaTypes/`

## Schema Documentation

Schema docs are stored in `docs/`:

- `docs/events_dataschema.md`
- `docs/eventResults_dataschema.md`
- `docs/news_dataschema.md`
- `docs/page_dataschema.md`
- `docs/richContect_dataschema.md`

Note: file name `richContect_dataschema.md` is intentionally spelled as currently present in the repo.

## Deploying The Studio

Use these scripts:

- Build Studio: `npm run build`
- Deploy Studio: `npm run deploy`
- Deploy GraphQL schema (if used): `npm run deploy-graphql`

Suggested deployment flow:

1. Pull latest `dev`.
2. Run `npm install`.
3. Run `npm run build` to catch build-time issues.
4. Run `npm run deploy`.
5. If GraphQL changes were made, run `npm run deploy-graphql`.

## Git Workflow (main/dev/feature)

Branch roles:

- `main`: production-ready code only
- `dev`: integration branch for tested feature work
- `feature/*`: individual feature branches

Typical flow:

1. Branch from `dev`:

	```bash
	git checkout dev
	git pull origin dev
	git checkout -b feature/short-description
	```

2. Commit your work in the feature branch:

	```bash
	git add .
	git commit -m "feat: short description of change"
	```

3. Push branch and open a Pull Request to `dev`:

	```bash
	git push -u origin feature/short-description
	```

4. After review/approval, merge into `dev`.
5. When ready for release, open PR from `dev` to `main`.

Recommended PR checklist:

- Schema changes validated in local Studio
- Related docs in `docs/` updated
- Build succeeds (`npm run build`)
- Deployment impact noted in PR description
