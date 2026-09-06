import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const handlePress = () => {
    ('Hello from React Native!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, React Native!</Text>

      <Button
        title="Click Me"
        onPress={handlePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;