## GitHub

- Repo: pracio/what-can-ai-do (public)
- Credentials: Hermes .env via `hermes config set` — GITHUB_TOKEN / GITHUB_USER / GITHUB_REPO (read back with `hermes config get <KEY>`)
- Push flow: keep remote URL token-free; push with one-shot inline token read from the secret store: `T=$(grep "^GITHUB_TOKEN=" ~/.hermes/.env | cut -d= -f2); git push https://pracio:$T@github.com/pracio/what-can-ai-do.git main` (http.extraHeader auth does NOT work here — git still prompts for username)
- git identity: pracio <pracio@users.noreply.github.com>

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
