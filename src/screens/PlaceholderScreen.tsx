import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlaceholderScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Em breve 🔧</Text>
    </View>
  );
};

export default PlaceholderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#666',
  },
});
