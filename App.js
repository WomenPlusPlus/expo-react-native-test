import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ExampleComponent from './ExampleComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Here is an example React Native App made via Expo with tests using Jest</Text>
      <ExampleComponent arg="3"></ExampleComponent>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
