import {
  CormorantGaramond_300Light,
  CormorantGaramond_400Regular,
} from '@expo-google-fonts/cormorant-garamond';
import { Jost_400Regular, Jost_500Medium } from '@expo-google-fonts/jost';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { getQuoteOfTheDay, getRandomQuote, type Quote } from './src/quotes';
import { QuoteScreen } from './src/screens/QuoteScreen';
import { shareQuote } from './src/share';
import { colors } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    CormorantGaramond_300Light,
    CormorantGaramond_400Regular,
    Jost_400Regular,
    Jost_500Medium,
  });
  const [quote, setQuote] = useState<Quote>(() => getQuoteOfTheDay());

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="dark" />
      {fontsLoaded && (
        <QuoteScreen
          quote={quote}
          onShare={() => void shareQuote(quote)}
          onNext={() => setQuote((prev) => getRandomQuote(prev))}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
});
