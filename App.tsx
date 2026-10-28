import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { getRandomMessage } from './src/messages';

export default function App() {
  const dark = useColorScheme() === 'dark';
  const [message, setMessage] = useState(() => getRandomMessage());
  const colors = dark
    ? { bg: '#111418', text: '#F4F5F7', accent: '#7C9CFF', onAccent: '#0B1020' }
    : { bg: '#FAF7F2', text: '#1D2433', accent: '#3D5AFE', onAccent: '#FFFFFF' };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      <StatusBar style={dark ? 'light' : 'dark'} />
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.accent }]}>DayApp</Text>
        <Text
          style={[styles.message, { color: colors.text }]}
          accessibilityRole="text"
        >
          {message}
        </Text>
      </View>
      <Pressable
        onPress={() => setMessage((prev) => getRandomMessage(prev))}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: colors.accent, opacity: pressed ? 0.8 : 1 },
        ]}
        accessibilityRole="button"
        accessibilityLabel="Mostra un nuovo messaggio"
      >
        <Text style={[styles.buttonText, { color: colors.onAccent }]}>
          Nuovo messaggio
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 24, paddingBottom: 32 },
  content: { flex: 1, justifyContent: 'center' },
  title: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 24,
  },
  message: { fontSize: 32, fontWeight: '600', lineHeight: 42 },
  button: {
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: { fontSize: 17, fontWeight: '600' },
});
