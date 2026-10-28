import { Feather } from '@expo/vector-icons';
import type { ComponentProps } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '../theme';

export type TabKey = 'today' | 'favorites' | 'about';

type IconName = ComponentProps<typeof Feather>['name'];

const TABS: { key: TabKey; label: string; icon: IconName }[] = [
  { key: 'today', label: 'Oggi', icon: 'sun' },
  { key: 'favorites', label: 'Preferiti', icon: 'heart' },
  { key: 'about', label: 'Anima', icon: 'feather' },
];

type Props = {
  active: TabKey;
  onChange: (tab: TabKey) => void;
};

export function TabBar({ active, onChange }: Props) {
  return (
    <View style={styles.bar}>
      {TABS.map((tab) => {
        const selected = tab.key === active;
        const color = selected ? colors.sageDark : colors.muted;
        return (
          <Pressable
            key={tab.key}
            style={styles.tab}
            onPress={() => onChange(tab.key)}
            accessibilityRole="tab"
            accessibilityState={{ selected }}
            accessibilityLabel={tab.label}
          >
            <Feather name={tab.icon} size={28} color={color} />
            <Text style={[styles.label, { color }]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.line,
    backgroundColor: colors.bg,
    paddingTop: 12,
    paddingBottom: 10,
  },
  tab: { flex: 1, alignItems: 'center', gap: 6 },
  label: { fontFamily: fonts.sans, fontSize: 14 },
});
