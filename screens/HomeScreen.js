import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;