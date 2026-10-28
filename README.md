# DayApp

App mobile (iOS e Android) che mostra messaggi motivazionali casuali.
Costruita con [Expo](https://expo.dev) e React Native (TypeScript).

Al momento è solo frontend: i messaggi sono in `src/messages.ts`.
Il backend verrà aggiunto in seguito.

## Avvio

```bash
npm install
npm start        # poi scansiona il QR con Expo Go, oppure premi i / a
npm run ios      # simulatore iOS (serve macOS + Xcode)
npm run android  # emulatore Android
npm run typecheck
```

## Versione web

Dipendenze necessarie (una tantum, scelgono le versioni compatibili con l'SDK):

```bash
npx expo install react-dom react-native-web @expo/metro-runtime
```

```bash
npm run web        # sviluppo nel browser
npm run build:web  # genera la cartella dist/ (sito statico)
```

Per pubblicarla, carica la cartella `dist/` su un hosting statico
(Netlify, Vercel, Cloudflare Pages, GitHub Pages).

## Struttura

- `App.tsx`: schermata principale (messaggio + pulsante "Nuovo messaggio")
- `src/messages.ts`: elenco messaggi e `getRandomMessage()`
