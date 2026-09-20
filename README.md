# dafemboy.dev — Portfolio von Lee Daniel Hertel

Persönliches Portfolio, ausgeliefert als Vue-3-SPA über einen **Cloudflare Worker**.

## Lizenz & Attribution (WICHTIG)

Dieses Projekt basiert auf dem Portfolio-Template
[**devgosling/portfolio-source**](https://github.com/devgosling/portfolio-source)
von **Steven Kukla**, veröffentlicht unter der **GNU AGPL-3.0**.

Es steht deshalb ebenfalls unter der **AGPL-3.0** (siehe [`LICENSE`](./LICENSE)).
Daraus folgt für den Betrieb dieser Seite:

- Der **Quellcode dieser (modifizierten) Version muss öffentlich verfügbar** sein und
  von der laufenden Website aus verlinkt werden (AGPL §13). Der Link steht in der
  Fußzeile der Seite (`src/components/RightSide.vue`) — **dort die eigene Repo-URL eintragen**.
- Das Copyright des Originals und die `LICENSE`-Datei bleiben erhalten.
- Änderungen sind unten dokumentiert.

### Änderungen gegenüber dem Original (durch Lee Daniel Hertel)

- Inhalte ersetzt (Name, Über-mich, Erfahrung, Skills, Kontakt).
- Akzentfarbe von Cyan/Blau auf **Pink** (`#EC4899`) umgestellt.
- Sektionen „Projekte" und „Schulische Bildung" entfernt.
- Logos `Luau.svg` und `JDA.svg` ergänzt.
- **Cloudflare-Worker-Deploy** hinzugefügt (`src/worker.js`, `wrangler.jsonc`, `deploy`-Script).

## Voraussetzungen

- Node.js 18+
- Cloudflare-Account (für Deploy)

## Setup & Befehle

```sh
npm install       # Abhängigkeiten
npm run dev       # Vite-Dev-Server
npm run build     # Produktions-Build nach ./dist
npm run deploy    # Build + Deploy zum Cloudflare Worker
```

## Auf dafemboy.dev schalten

Nach dem Deploy im Cloudflare-Dashboard: **Workers & Pages → dafemboy-dev →
Settings → Domains & Routes → Add → Custom Domain → `dafemboy.dev`**.

## Noch zu erledigen

- Fußzeilen-Link `Quellcode dieser Seite` auf das eigene öffentliche Repo setzen (`src/components/RightSide.vue`).
- Social-Links (GitHub, Discord) und Kontakt-E-Mail eintragen (`src/components/LeftSide.vue`, `src/components/EmailLink.vue`).
