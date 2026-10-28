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
  {
    text: "Non è che abbiamo poco tempo, ma ne sprechiamo molto.",
    author: "Seneca",
  },
  {
    text: "Non c'è vento favorevole per il marinaio che non sa dove andare.",
    author: "Seneca",
  },
  {
    text: "Mentre rimandiamo, la vita passa.",
    author: "Seneca",
  },
  {
    text: "Soffriamo più spesso nell'immaginazione che nella realtà.",
    author: "Seneca",
  },
  {
    text: "Non è perché le cose sono difficili che non osiamo; è perché non osiamo che sono difficili.",
    author: "Seneca",
  },
  {
    text: "Se vuoi essere amato, ama.",
    author: "Seneca",
  },
  {
    text: "Non c'è nessun grande ingegno senza un pizzico di follia.",
    author: "Seneca",
  },
  {
    text: "Ciò che ostacola il cammino diventa il cammino.",
    author: "Marco Aurelio",
  },
  {
    text: "La felicità della tua vita dipende dalla qualità dei tuoi pensieri.",
    author: "Marco Aurelio",
  },
  {
    text: "Il miglior modo di vendicarsi è non assomigliare a chi ti ha offeso.",
    author: "Marco Aurelio",
  },
  {
    text: "Non sono le cose a turbare gli uomini, ma i giudizi che essi formulano sulle cose.",
    author: "Epitteto",
  },
  {
    text: "Non pretendere che gli eventi accadano come desideri: desidera che accadano come accadono, e sarai sereno.",
    author: "Epitteto",
  },
  {
    text: "Prima dì a te stesso chi vuoi essere, poi fa' ciò che devi fare.",
    author: "Epitteto",
  },
  {
    text: "La ricchezza non consiste nell'avere grandi possedimenti, ma nell'avere pochi bisogni.",
    author: "Epitteto",
  },
  {
    text: "Chi conosce gli altri è saggio; chi conosce se stesso è illuminato.",
    author: "Lao Tzu",
  },
  {
    text: "Un albero grande come un abbraccio nasce da un germoglio.",
    author: "Lao Tzu",
  },
  {
    text: "Chi sa di avere abbastanza è ricco.",
    author: "Lao Tzu",
  },
  {
    text: "Nulla al mondo è più morbido e cedevole dell'acqua, eppure nulla la supera nel consumare ciò che è duro.",
    author: "Lao Tzu",
  },
  {
    text: "Quando vedi un uomo valente, cerca di imitarlo; quando vedi un uomo indegno, esamina te stesso.",
    author: "Confucio",
  },
  {
    text: "Studiare senza riflettere è inutile; riflettere senza studiare è pericoloso.",
    author: "Confucio",
  },
  {
    text: "Chi non pensa al lontano avrà presto preoccupazioni vicine.",
    author: "Confucio",
  },
  {
    text: "Tutto ciò che siamo è il risultato di ciò che abbiamo pensato.",
    author: "Buddha",
  },
  {
    text: "L'odio non cessa mai con l'odio, ma con l'amore.",
    author: "Buddha",
  },
  {
    text: "Nessun uomo può bagnarsi due volte nello stesso fiume.",
    author: "Eraclito",
  },
  {
    text: "Il carattere di un uomo è il suo destino.",
    author: "Eraclito",
  },
  {
    text: "Il principio è la parte più importante di ogni opera.",
    author: "Platone",
  },
  {
    text: "La prima e la migliore delle vittorie è vincere se stessi.",
    author: "Platone",
  },
  {
    text: "Una vita senza ricerca non è degna di essere vissuta.",
    author: "Socrate",
  },
  {
    text: "L'educazione ha radici amare, ma frutti dolci.",
    author: "Aristotele",
  },
  {
    text: "Non rovinare ciò che hai desiderando ciò che non hai: ricorda che ciò che hai ora era tra le cose che desideravi.",
    author: "Epicuro",
  },
  {
    text: "Nessuno è troppo giovane o troppo vecchio per occuparsi della propria felicità.",
    author: "Epicuro",
  },
  {
    text: "La mente non è un vaso da riempire, ma un fuoco da accendere.",
    author: "Plutarco",
  },
  {
    text: "Sono un uomo: nulla di ciò che è umano mi è estraneo.",
    author: "Terenzio",
  },
  {
    text: "La fortuna aiuta gli audaci.",
    author: "Virgilio",
  },
  {
    text: "Cogli l'attimo, confidando il meno possibile nel domani.",
    author: "Orazio",
  },
  {
    text: "Abbi il coraggio di conoscere.",
    author: "Orazio",
  },
  {
    text: "La goccia scava la pietra non con la forza, ma cadendo spesso.",
    author: "Ovidio",
  },
  {
    text: "Finché c'è vita, c'è speranza.",
    author: "Cicerone",
  },
  {
    text: "La gratitudine non è solo la più grande delle virtù, ma la madre di tutte le altre.",
    author: "Cicerone",
  },
  {
    text: "Nessun giorno senza una linea.",
    author: "Plinio il Vecchio",
  },
  {
    text: "Affrettati lentamente.",
    author: "Augusto",
  },
  {
    text: "Come una giornata ben spesa dà un lieto dormire, così una vita ben usata dà lieto morire.",
    author: "Leonardo da Vinci",
  },
  {
    text: "Come il ferro si arrugginisce senza esercizio, così l'inerzia logora l'ingegno.",
    author: "Leonardo da Vinci",
  },
  {
    text: "Tutte le verità sono facili da capire una volta scoperte; il punto è scoprirle.",
    author: "Galileo Galilei",
  },
  {
    text: "Il buon senso c'era; ma se ne stava nascosto, per paura del senso comune.",
    author: "Alessandro Manzoni",
  },
  {
    text: "Il corpo faccia pure quello che vuole. Io non sono il corpo: io sono la mente.",
    author: "Rita Levi-Montalcini",
  },
  {
    text: "Aiutami a fare da solo.",
    author: "Maria Montessori",
  },
  {
    text: "Gli uomini passano, le idee restano.",
    author: "Giovanni Falcone",
  },
  {
    text: "Il cuore ha le sue ragioni che la ragione non conosce.",
    author: "Blaise Pascal",
  },
  {
    text: "Tutta l'infelicità degli uomini deriva da una sola cosa: non saper restare in pace in una camera.",
    author: "Blaise Pascal",
  },
  {
    text: "Il meglio è nemico del bene.",
    author: "Voltaire",
  },
  {
    text: "Coltiviamo il nostro giardino.",
    author: "Voltaire",
  },
  {
    text: "Bisogna avere ancora un caos dentro di sé per partorire una stella danzante.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "Ciò che non mi uccide mi rende più forte.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "La vita può essere capita solo all'indietro, ma va vissuta in avanti.",
    author: "Søren Kierkegaard",
  },
  {
    text: "Vai con fiducia nella direzione dei tuoi sogni! Vivi la vita che hai immaginato.",
    author: "Henry David Thoreau",
  },
  {
    text: "Non è ciò che guardi che conta, ma ciò che vedi.",
    author: "Henry David Thoreau",
  },
  {
    text: "Nulla di grande è mai stato realizzato senza entusiasmo.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Chi apre una porta di scuola, chiude una prigione.",
    author: "Victor Hugo",
  },
  {
    text: "I nostri dubbi sono traditori: ci fanno perdere il bene che potremmo ottenere, per timore di tentare.",
    author: "William Shakespeare",
  },
  {
    text: "Non c'è nulla di buono o di cattivo: è il pensiero a renderlo tale.",
    author: "William Shakespeare",
  },
  {
    text: "Non basta sapere, bisogna anche applicare; non basta volere, bisogna anche fare.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "Le cose che fanno male, insegnano.",
    author: "Benjamin Franklin",
  },
  {
    text: "Non rimandare a domani quello che puoi fare oggi.",
    author: "Benjamin Franklin",
  },
  {
    text: "Il genio è per l'1% ispirazione e per il 99% traspirazione.",
    author: "Thomas Edison",
  },
  {
    text: "Non ho fallito: ho solo trovato diecimila modi che non funzionano.",
    author: "Thomas Edison",
  },
  {
    text: "Che tu creda di farcela o di non farcela, hai comunque ragione.",
    author: "Henry Ford",
  },
  {
    text: "Agisci come se ciò che fai facesse la differenza: la fa.",
    author: "William James",
  },
  {
    text: "Non è il critico che conta. Il merito appartiene a chi è realmente nell'arena.",
    author: "Theodore Roosevelt",
  },
  {
    text: "L'unica cosa di cui dobbiamo aver paura è la paura stessa.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "La vita è come andare in bicicletta: per mantenere l'equilibrio devi muoverti.",
    author: "Albert Einstein",
  },
  {
    text: "Non ho talenti speciali, sono solo appassionatamente curioso.",
    author: "Albert Einstein",
  },
  {
    text: "Sembra sempre impossibile, finché non viene fatto.",
    author: "Nelson Mandela",
  },
  {
    text: "L'istruzione è l'arma più potente che puoi usare per cambiare il mondo.",
    author: "Nelson Mandela",
  },
  {
    text: "Se non puoi volare, corri; se non puoi correre, cammina; se non puoi camminare, striscia. Ma qualunque cosa tu faccia, continua a muoverti in avanti.",
    author: "Martin Luther King",
  },
  {
    text: "L'oscurità non può scacciare l'oscurità: solo la luce può farlo.",
    author: "Martin Luther King",
  },
  {
    text: "Siate affamati, siate folli.",
    author: "Steve Jobs",
  },
  {
    text: "Il vostro tempo è limitato: non sprecatelo vivendo la vita di qualcun altro.",
    author: "Steve Jobs",
  },
  {
    text: "Non puoi unire i puntini guardando avanti; puoi unirli solo guardandoti indietro.",
    author: "Steve Jobs",
  },
  {
    text: "Chi va piano va sano e va lontano.",
    author: "Proverbio italiano",
  },
  {
    text: "Chi ben comincia è a metà dell'opera.",
    author: "Proverbio italiano",
  },
  {
    text: "Non tutto il male vien per nuocere.",
    author: "Proverbio italiano",
  },
  {
    text: "Aiutati che il ciel ti aiuta.",
    author: "Proverbio italiano",
  },
  {
    text: "La notte porta consiglio.",
    author: "Proverbio italiano",
  },
  {
    text: "Dopo la tempesta torna il sereno.",
    author: "Proverbio italiano",
  },
  {
    text: "Chi la dura la vince.",
    author: "Proverbio italiano",
  },
  {
    text: "Chi cerca trova.",
    author: "Proverbio italiano",
  },
  {
    text: "Tentar non nuoce.",
    author: "Proverbio italiano",
  },
  {
    text: "Chi fa da sé fa per tre.",
    author: "Proverbio italiano",
  },
  {
    text: "Il tempo è galantuomo.",
    author: "Proverbio italiano",
  },
  {
    text: "Il mattino ha l'oro in bocca.",
    author: "Proverbio italiano",
  },
  {
    text: "Dove c'è una volontà, c'è una strada.",
    author: "Proverbio inglese",
  },
  {
    text: "È sempre più buio poco prima dell'alba.",
    author: "Proverbio inglese",
  },
  {
    text: "La pratica rende perfetti.",
    author: "Proverbio inglese",
  },
  {
    text: "Attraverso le difficoltà, fino alle stelle.",
    author: "Proverbio latino",
  },
  {
    text: "Finché respiro, spero.",
    author: "Proverbio latino",
  },
  {
    text: "Se vuoi andare veloce, vai da solo; se vuoi andare lontano, vai insieme.",
    author: "Proverbio africano",
  },
  {
    text: "Quando soffia il vento del cambiamento, alcuni costruiscono muri, altri mulini a vento.",
    author: "Proverbio cinese",
  },
  {
    text: "Colui che sposta la montagna comincia portando via piccole pietre.",
    author: "Proverbio cinese",
  },
  {
    text: "Non temere di crescere lentamente, temi solo di restare fermo.",
    author: "Proverbio cinese",
  },
  {
    text: "Visione senza azione è un sogno, azione senza visione è un incubo.",
    author: "Proverbio giapponese",
  },
  {
    text: "Il bambù che si piega è più forte della quercia che resiste.",
    author: "Proverbio giapponese",
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
