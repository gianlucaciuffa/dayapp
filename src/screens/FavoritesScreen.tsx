import { Feather } from '@expo/vector-icons';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import type { Quote } from '../quotes';
import { colors, fonts } from '../theme';

type Props = {
  favorites: Quote[];
  onRemove: (quote: Quote) => void;
  onShare: (quote: Quote) => void;
};

export function FavoritesScreen({ favorites, onRemove, onShare }: Props) {
  if (favorites.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyTitle}>Ancora nessun preferito</Text>
        <Text style={styles.emptyText}>
          Tocca il cuore su una frase per ritrovarla qui.
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.listContent}
      data={favorites}
      keyExtractor={(item) => `${item.author}:${item.text}`}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.quote}>“{item.text}”</Text>
          <Text style={styles.author}>— {item.author}</Text>
          <View style={styles.row}>
            <Pressable
              onPress={() => onRemove(item)}
              accessibilityRole="button"
              accessibilityLabel="Rimuovi dai preferiti"
              hitSlop={8}
            >
              <Feather name="heart" size={24} color={colors.sageDark} />
            </Pressable>
            <Pressable
              onPress={() => onShare(item)}
              accessibilityRole="button"
              accessibilityLabel="Condividi la citazione"
              hitSlop={8}
            >
              <Feather name="share-2" size={22} color={colors.muted} />
            </Pressable>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: { flex: 1 },
  listContent: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 24 },
  card: {
    paddingBottom: 24,
    marginBottom: 24,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.line,
  },
  quote: {
    fontFamily: fonts.serif,
    fontSize: 28,
    lineHeight: 36,
    color: colors.ink,
  },
  author: {
    fontFamily: fonts.sans,
    fontSize: 16,
    color: colors.inkSoft,
    marginTop: 12,
  },
  row: { flexDirection: 'row', gap: 24, marginTop: 16 },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  emptyTitle: {
    fontFamily: fonts.serif,
    fontSize: 30,
    color: colors.ink,
    textAlign: 'center',
  },
  emptyText: {
    fontFamily: fonts.sans,
    fontSize: 16,
    color: colors.muted,
    textAlign: 'center',
    marginTop: 12,
  },
});
