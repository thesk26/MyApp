/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function App() {
return (
    <View style={styles.container}> 

    <TouchableOpacity>
      <Text style={{color:'yellow', fontSize: 20}}>Welcome to the Home Screen!</Text>
    </TouchableOpacity>
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
})


export default App;