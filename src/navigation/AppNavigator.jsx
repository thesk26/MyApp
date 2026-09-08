import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreenSimple from '../screens/LoginScreenSimple';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
<Stack.Navigator initialRouteName="Login">
    <Stack.Screen
    name="Login"
    component={LoginScreenSimple}
    options={{ headerShown: false }}
    />
    <Stack.Screen
    name="SignUp"
    component={SignUpScreen}
    options={{ title: 'Create Account' }}
    />
</Stack.Navigator>
);

export default AppNavigator;
