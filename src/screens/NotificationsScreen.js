import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

export function NotificationsScreen({navigation}) {
  return (
    <View style={styles.view}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
});

export default NotificationsScreen;
