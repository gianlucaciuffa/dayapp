import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '../theme';

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.brand}>anima</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { paddingTop: 12, paddingHorizontal: 24 },
  brand: {
    fontFamily: fonts.serifLight,
    fontSize: 34,
    letterSpacing: 2,
    color: colors.sage,
  },
});
