import { Linking, Share } from 'react-native';

import type { Quote } from './quotes';

export function formatQuote(quote: Quote): string {
  return `“${quote.text}” — ${quote.author}`;
}

/**
 * Apre il foglio di condivisione del sistema: da lì l'utente sceglie
 * WhatsApp, Facebook, Instagram o un'altra app installata.
 * Se il sistema non lo supporta (es. alcuni browser), ripiega su WhatsApp.
 */
export async function shareQuote(quote: Quote): Promise<void> {
  const message = formatQuote(quote);
  try {
    await Share.share({ message });
  } catch {
    try {
      await Linking.openURL(`https://wa.me/?text=${encodeURIComponent(message)}`);
    } catch {
      // Nessun modo di condividere disponibile: non facciamo nulla.
    }
  }
}
