# SkillBridge

SkillBridge is a Next.js + Prisma MVP for a continuous pathway from a claimed skill to assessment, practical evidence, explainable opportunity matching, and improvement.

## Included in this build

| Capability | Status |
|---|---|
| Credential login with signed HTTP-only session | Implemented |
| Role-aware data model (student, company, academy, mentor, college, admin) | Implemented |
| Self-declared versus assessed skill levels | Implemented |
| Server-side progressive assessment scoring and level gating | Implemented |
| Integrity activity audit events | Implemented as review signals |
| Simulation eligibility explanations | Implemented |
| Evidence model and explainable opportunity readiness | Implemented |
| Seeded student/company/admin, assessment, simulation, opportunity | Implemented |
| Full academy, mentor, college, reviewer/admin workflows | Foundation schema; future UI/API scope |

## Run locally

1. Copy `.env.example` to `.env` and set a PostgreSQL `DATABASE_URL` plus a strong `SESSION_SECRET`.
2. Install dependencies: `npm install`
3. Create the database schema: `npx prisma migrate dev --name init`
4. Seed demo data: `npm run db:seed`
5. Start: `npm run dev`
6. Open `http://localhost:3000`.

Demo login: `student@skillbridge.demo` / `Student@123`. Also seeded: `recruiter@skillbridge.demo` and `admin@skillbridge.demo`, using the same password. The UI currently exposes the student journey; other roles are represented in the schema for their scoped dashboards.

## Tests

Run `npm test`. Tests cover no level-skipping, server-side score calculation, eligibility gaps, and explainable matching behavior.

## Security notes

Assessment answers are not returned by the assessment page/API; scores are calculated server-side. A browser blur creates an integrity review signal rather than a cheating accusation. Production should set a unique high-entropy `SESSION_SECRET`, use SSL PostgreSQL, configure rate limits, and add CSRF protection to state-changing requests.

## Deploy to Vercel

Push this directory to GitHub, import the repository into Vercel, and add `DATABASE_URL`, `SESSION_SECRET`, and `NEXT_PUBLIC_APP_URL` under Project Settings → Environment Variables. Run `npx prisma migrate deploy` against the production PostgreSQL database before—or in a controlled migration stage of—deployment. Never use `prisma db push` as a production migration strategy.

## Known MVP limits / roadmap

Resume parsing, remote code execution, file storage, email delivery, challenge evaluation, advanced plagiarism checks, and full stakeholder dashboards need their respective providers/review workflows and are deliberately not represented as operational features. The data architecture preserves room for them without presenting them as already working.
