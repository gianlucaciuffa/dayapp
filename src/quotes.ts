export type Quote = {
  text: string;
  author: string;
};

// Citazioni locali. In futuro arriveranno dal backend.
// Le attribuzioni vanno ricontrollate prima della pubblicazione.
export const QUOTES: Quote[] = [
  {
    text: "L'unico modo per fare un ottimo lavoro è amare ciò che fai.",
    author: 'Steve Jobs',
  },
  {
    text: 'Il viaggio di mille miglia comincia con un singolo passo.',
    author: 'Lao Tzu',
  },
  {
    text: "Siamo ciò che facciamo ripetutamente. L'eccellenza, dunque, non è un atto, ma un'abitudine.",
    author: 'Will Durant',
  },
  {
    text: 'Chi ha un perché abbastanza forte può sopportare quasi ogni come.',
    author: 'Friedrich Nietzsche',
  },
  {
    text: 'Il successo è la somma di piccoli sforzi, ripetuti giorno dopo giorno.',
    author: 'Robert Collier',
  },
  {
    text: 'Cadere sette volte, rialzarsi otto.',
    author: 'Proverbio giapponese',
  },
  {
    text: "Il momento migliore per piantare un albero era vent'anni fa. Il secondo momento migliore è adesso.",
    author: 'Proverbio cinese',
  },
  {
    text: 'Fai ciò che puoi, con ciò che hai, dove sei.',
    author: 'Theodore Roosevelt',
  },
];

export function sameQuote(a: Quote, b: Quote): boolean {
  return a.text === b.text && a.author === b.author;
}

/** La citazione del giorno: stessa per tutto il giorno, cambia a mezzanotte. */
export function getQuoteOfTheDay(date: Date = new Date()): Quote {
  const dayNumber = Math.floor(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86_400_000,
  );
  return QUOTES[dayNumber % QUOTES.length];
}

/** Una citazione casuale, diversa da `exclude` quando possibile. */
export function getRandomQuote(exclude?: Quote): Quote {
  const pool = exclude
    ? QUOTES.filter((q) => !sameQuote(q, exclude))
    : QUOTES;
  return pool[Math.floor(Math.random() * pool.length)];
}
