# DayApp

App mobile (iOS e Android) che mostra una citazione motivazionale al giorno.
Costruita con [Expo](https://expo.dev) e React Native (TypeScript).

Al momento è solo frontend: le citazioni sono in `src/quotes.ts`.
Il backend verrà aggiunto in seguito.

## Avvio

Dipendenze di grafica (font e icone), da installare una tantum:

```bash
npx expo install @expo/vector-icons expo-font @expo-google-fonts/cormorant-garamond @expo-google-fonts/jost
```

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

- `App.tsx`: caricamento font e stato della citazione
- `src/screens/QuoteScreen.tsx`: schermata unica
- `src/quotes.ts`: citazioni, citazione del giorno e casuale
- `src/share.ts`: condivisione (foglio di sistema, con ripiego su WhatsApp)
- `src/theme.ts`: colori e font

## Condivisione

"Condividi" apre il foglio di condivisione del sistema: da lì si sceglie
WhatsApp, Facebook, Instagram o un'altra app installata. Instagram non
permette di precompilare un testo da un link, quindi non c'è un tasto
diretto: passa dal foglio di sistema.

Nella versione web, il tasto è nascosto sui browser desktop (PC e Mac) e
visibile su telefono e tablet.
