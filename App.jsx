import { View, StyleSheet } from 'react-native'
// import Registration from './src/screens/Registration';
import LoginScreenSimple from './src/screens/LoginScreenSimple';
// import LoginScreen from './src/screens/LoginScreen';

const App = () => {
return (
    <View style={styles.container}>
      {/* <Registration /> */}
    <LoginScreenSimple />
    {/* <LoginScreen /> */}
    </View>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
},
});

export default App;