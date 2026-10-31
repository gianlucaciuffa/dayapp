import { Linking, Platform, Share } from 'react-native';

import type { Quote } from './quotes';

type BrowserNavigator = { userAgent?: string; maxTouchPoints?: number };

/**
 * La condivisione è disponibile nelle app iOS/Android e nei browser da
 * telefono o tablet. È nascosta nei browser desktop (PC e Mac).
 */
export function canShare(): boolean {
  if (Platform.OS !== 'web') return true;
  const nav = (globalThis as { navigator?: BrowserNavigator }).navigator;
  const ua = nav?.userAgent ?? '';
  const isPhoneOrTablet = /Android|iPhone|iPad|iPod|Mobile/i.test(ua);
  // iPadOS si presenta come Mac, ma ha lo schermo touch.
  const isIpadAsMac = /Macintosh/i.test(ua) && (nav?.maxTouchPoints ?? 0) > 1;
  return isPhoneOrTablet || isIpadAsMac;
}

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
