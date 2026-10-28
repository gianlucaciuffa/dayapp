import { Feather } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { Quote } from '../quotes';
import { canShare } from '../share';
import { colors, fonts } from '../theme';

type Props = {
  quote: Quote;
  onShare: () => void;
  onNext: () => void;
};

export function QuoteScreen({ quote, onShare, onNext }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>FRASE DEL GIORNO</Text>
        <Text style={styles.quote}>“{quote.text}”</Text>
        <Text style={styles.author}>— {quote.author}</Text>
      </View>

      {canShare() && (
        <Pressable
          style={styles.share}
          onPress={onShare}
          accessibilityRole="button"
          accessibilityLabel="Condividi la citazione"
        >
          <Feather name="share-2" size={28} color={colors.muted} />
          <Text style={styles.shareText}>Condividi</Text>
        </Pressable>
      )}

      <Pressable
        onPress={onNext}
        style={({ pressed }) => [styles.button, { opacity: pressed ? 0.85 : 1 }]}
        accessibilityRole="button"
        accessibilityLabel="Mostra un altro pensiero"
      >
        <Feather name="refresh-cw" size={22} color={colors.white} />
        <Text style={styles.buttonText}>Un altro pensiero</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 24, paddingVertical: 24 },
  content: { flex: 1, justifyContent: 'center' },
  label: {
    fontFamily: fonts.sans,
    fontSize: 14,
    letterSpacing: 3,
    color: colors.sage,
    marginBottom: 32,
  },
  quote: {
    fontFamily: fonts.serif,
    fontSize: 38,
    lineHeight: 50,
    color: colors.ink,
  },
  author: {
    fontFamily: fonts.sans,
    fontSize: 18,
    color: colors.inkSoft,
    marginTop: 32,
  },
  share: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 24,
  },
  shareText: { fontFamily: fonts.sans, fontSize: 18, color: colors.muted },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.sage,
  },
  buttonText: {
    fontFamily: fonts.sansMedium,
    fontSize: 20,
    color: colors.white,
  },
});
