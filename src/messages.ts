// Messaggi motivazionali locali. In futuro arriveranno dal backend.
export const MESSAGES: string[] = [
  'Ogni grande risultato inizia con la decisione di provarci.',
  'Un passo alla volta è comunque un passo avanti.',
  'Oggi è un ottimo giorno per iniziare.',
  'Non devi essere perfetto, devi solo essere costante.',
  'Le difficoltà di oggi sono la forza di domani.',
  'Credi in te stesso: hai già superato giorni più difficili.',
  'Il momento migliore per iniziare era ieri. Il secondo migliore è adesso.',
  'Piccoli progressi ogni giorno portano a grandi risultati.',
  'Fai oggi qualcosa di cui il te di domani ti ringrazierà.',
  'Il coraggio non è assenza di paura, è agire nonostante essa.',
  'Sei più capace di quanto pensi.',
  'Gli ostacoli sono opportunità travestite.',
  "L'unico modo per fallire davvero è smettere di provare.",
  'Concentrati su ciò che puoi controllare.',
  'Respira, riparti, vai avanti.',
];

/** Restituisce un messaggio casuale, diverso da `exclude` quando possibile. */
export function getRandomMessage(exclude?: string): string {
  const pool =
    exclude && MESSAGES.length > 1
      ? MESSAGES.filter((m) => m !== exclude)
      : MESSAGES;
  return pool[Math.floor(Math.random() * pool.length)];
}
