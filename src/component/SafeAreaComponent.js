import React from 'react';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleSheet, Text, View} from 'react-native';

export function SafeAreaComponent() {
  const insets = useSafeAreaInsets();

  return (
    <View style={safeAreaStyle(insets).view}>
      <Text>This is top text.</Text>
      <Text>This is bottom text.</Text>
    </View>
  );
}

const safeAreaStyle = insets =>
  StyleSheet.create({
    view: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',

      // Paddings to handle safe area
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
  });

export default SafeAreaComponent;
