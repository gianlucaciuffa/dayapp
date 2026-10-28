import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '../theme';

export function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Anima</Text>
      <Text style={styles.text}>
        Una frase al giorno per fermarti un momento, respirare e ripartire.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', paddingHorizontal: 24 },
  title: {
    fontFamily: fonts.serif,
    fontSize: 44,
    color: colors.ink,
    marginBottom: 16,
  },
  text: {
    fontFamily: fonts.sans,
    fontSize: 18,
    lineHeight: 28,
    color: colors.inkSoft,
  },
});
