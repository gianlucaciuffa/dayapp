import {
  CormorantGaramond_300Light,
  CormorantGaramond_400Regular,
} from '@expo-google-fonts/cormorant-garamond';
import { Jost_400Regular, Jost_500Medium } from '@expo-google-fonts/jost';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { Header } from './src/components/Header';
import { TabBar, type TabKey } from './src/components/TabBar';
import {
  getQuoteOfTheDay,
  getRandomQuote,
  sameQuote,
  type Quote,
} from './src/quotes';
import { AboutScreen } from './src/screens/AboutScreen';
import { FavoritesScreen } from './src/screens/FavoritesScreen';
import { TodayScreen } from './src/screens/TodayScreen';
import { shareQuote } from './src/share';
import { colors } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    CormorantGaramond_300Light,
    CormorantGaramond_400Regular,
    Jost_400Regular,
    Jost_500Medium,
  });
  const [tab, setTab] = useState<TabKey>('today');
  const [quote, setQuote] = useState<Quote>(() => getQuoteOfTheDay());
  // I preferiti restano solo in memoria: la persistenza arriverà col backend.
  const [favorites, setFavorites] = useState<Quote[]>([]);

  if (!fontsLoaded) {
    return <View style={styles.root} />;
  }

  const isSaved = favorites.some((f) => sameQuote(f, quote));

  const toggleSave = () =>
    setFavorites((prev) =>
      prev.some((f) => sameQuote(f, quote))
        ? prev.filter((f) => !sameQuote(f, quote))
        : [quote, ...prev],
    );

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="dark" />
      <Header />
      <View style={styles.body}>
        {tab === 'today' && (
          <TodayScreen
            quote={quote}
            saved={isSaved}
            onToggleSave={toggleSave}
            onShare={() => void shareQuote(quote)}
            onNext={() => setQuote((prev) => getRandomQuote(prev))}
          />
        )}
        {tab === 'favorites' && (
          <FavoritesScreen
            favorites={favorites}
            onRemove={(q) =>
              setFavorites((prev) => prev.filter((f) => !sameQuote(f, q)))
            }
            onShare={(q) => void shareQuote(q)}
          />
        )}
        {tab === 'about' && <AboutScreen />}
      </View>
      <TabBar active={tab} onChange={setTab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  body: { flex: 1 },
});
