# Pubblicare anima

Guida passo passo. Prima di iniziare: completa i segnaposto indicati nella
sezione «Prima di pubblicare».

## Prima di pubblicare
1. Ricontrolla le attribuzioni delle citazioni in `src/quotes.ts`.
2. In `public/privacy.html` sostituisci `[DATA]`, `[NOME E COGNOME]`,
   `[EMAIL DI CONTATTO]` e `[INDICARE IL FORNITORE DI HOSTING SCELTO]`.
3. Sostituisci, se vuoi, le icone in `assets/` (sono segnaposto):
   `icon.png` 1024×1024 senza trasparenza, `adaptive-icon.png` 1024×1024
   con trasparenza (soggetto al centro), `splash-icon.png`, `favicon.png`.
4. Controlla `npm run typecheck` e prova l'app con `npm start`.

## Identificativi
- iOS: `com.gianlucaciuffa.anima` (`ios.bundleIdentifier` in `app.json`)
- Android: `com.gianlucaciuffa.anima` (`android.package` in `app.json`)

Sono l'«indirizzo» univoco dell'app negli store. Dopo la pubblicazione non si
possono più cambiare: se li vuoi diversi, cambiali prima.

## Web
```bash
npm run build:web
```
Carica la cartella `dist/` su un hosting statico (Netlify, Vercel, Cloudflare
Pages). L'informativa sarà su `https://TUO-SITO/privacy.html`.

## Android (Google Play)
1. Crea un account sviluppatore Google Play (pagamento una tantum).
2. Account personali creati dopo il 13 novembre 2023: serve un test chiuso con
   almeno 12 tester iscritti per almeno 14 giorni consecutivi prima di
   chiedere la pubblicazione.
3. Build: `npx.cmd eas-cli login`, poi `npx.cmd eas-cli build --platform android --profile production`.
4. Carica il file `.aab` in Play Console (oppure `eas submit`) e compila la
   scheda con `docs/store-listing.md`.

Per provare l'app su telefono Android senza store:
`npx.cmd eas-cli build --platform android --profile preview` produce un `.apk`.

## iOS (App Store)
1. Iscriviti all'Apple Developer Program (a pagamento, annuale).
2. Build nel cloud, senza Mac: `npx.cmd eas-cli build --platform ios --profile production`
   (EAS ti guida nella creazione di certificati e profili).
3. Invio: `npx.cmd eas-cli submit --platform ios`, poi compila la scheda in
   App Store Connect e invia in revisione.

## Dopo ogni modifica
Aumenta `version` in `app.json` per i cambi visibili agli utenti: il numero di
build lo incrementa EAS (`autoIncrement`).
