import { Feather } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { Quote } from '../quotes';
import { colors, fonts } from '../theme';

type Props = {
  quote: Quote;
  saved: boolean;
  onToggleSave: () => void;
  onShare: () => void;
  onNext: () => void;
};

export function TodayScreen({
  quote,
  saved,
  onToggleSave,
  onShare,
  onNext,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>FRASE DEL GIORNO</Text>
        <Text style={styles.quote}>“{quote.text}”</Text>
        <Text style={styles.author}>— {quote.author}</Text>
      </View>

      <View style={styles.actions}>
        <Pressable
          style={styles.action}
          onPress={onToggleSave}
          accessibilityRole="button"
          accessibilityLabel={saved ? 'Rimuovi dai preferiti' : 'Salva nei preferiti'}
        >
          <Feather
            name="heart"
            size={30}
            color={saved ? colors.sageDark : colors.muted}
          />
          <Text style={[styles.actionText, saved && { color: colors.sageDark }]}>
            {saved ? 'Salvata' : 'Salva'}
          </Text>
        </Pressable>

        <Pressable
          style={styles.action}
          onPress={onShare}
          accessibilityRole="button"
          accessibilityLabel="Condividi la citazione"
        >
          <Feather name="share-2" size={28} color={colors.muted} />
          <Text style={styles.actionText}>Condividi</Text>
        </Pressable>
      </View>

      <Pressable
        onPress={onNext}
        style={({ pressed }) => [styles.button, { opacity: pressed ? 0.85 : 1 }]}
        accessibilityRole="button"
        accessibilityLabel="Mostra un'altra citazione"
      >
        <Feather name="refresh-cw" size={22} color={colors.white} />
        <Text style={styles.buttonText}>Stupiscimi ancora</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 24, paddingBottom: 24 },
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
  actions: { flexDirection: 'row', gap: 40, marginBottom: 24 },
  action: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  actionText: { fontFamily: fonts.sans, fontSize: 18, color: colors.muted },
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
