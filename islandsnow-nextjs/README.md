# Island Snow in Next.js — ICS 314

Based on `ics-software-engineering/nextjs-application-template`, using the supplied Island Snow React mockup. UI components are separated into `src/components`; the page is at `src/app/page.tsx`.

## Windows / VS Code setup

Open the folder containing this `package.json`. In PowerShell run:

```powershell
npm.cmd install
& "C:\Program Files\PostgreSQL\18\bin\createdb.exe" -U postgres nextjs-islandsnow
Copy-Item sample.env .env
```

Edit `.env`: enter your PostgreSQL password in `DATABASE_URL` (URL-encode special characters) and replace the placeholder AUTH_SECRET for local use. Do not commit `.env`.

```powershell
npx.cmd prisma migrate dev
npx.cmd prisma generate
npm.cmd run seed
npm.cmd run dev
```

Visit http://localhost:3000. The PostgreSQL command assumes version 18; use the installed version if different. If database already exists, skip creation.

## Assignment GitHub sequence

Create a **private** GitHub repository called `islandsnow-nextjs` using the professor's template and clone it. If starting from the template fresh, keep commits aligned to work you actually performed: `Installed template` (if setup changed files), `Completed VSCode and ESLint setup` (if any project files changed), `Ported islandsnow into nextjs`, and `Completed islandsnow mockup`. The provided ZIP is already at the final source state; uploading in one step **does not create the required separate history**. Do not fake prior commits: reproduce the stages on your local clone and commit along the way. Push and submit the full GitHub repo URL via Lamaku; grant the assigned instructor and TA read access.

## Testing

In VS Code, use ESLint extension. Open `src/app/page.tsx`, temporarily add a trailing blank line to check ESLint and then remove it. Test the responsive nav and images, check the page tab title says Island Snow, and run `npm.cmd run build` to check the production build. No `.env`, `node_modules`, or `.next` files should be committed.
