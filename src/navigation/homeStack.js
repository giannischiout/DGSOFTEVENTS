
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MyDrawer } from './drawer';
import { Login } from '../screens/Login';
import { MainScreen } from '../screens/MainScreen';
import { AddEvent } from '../screens/AddEvent';
import NavBar from '../Molecules/NavBar';
import NavLogo from '../Molecules/LogoText/Navlogo';
export const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerRight: () => (
            <NavLogo />
          ),
          title: ''
        }}
      />
      <Stack.Screen
        name="AddEvent"
        component={AddEvent}
        options={{
          headerRight: () => (
            <NavLogo />
          ),
          title: ''
        }}
      />

    </Stack.Navigator>
  );
};
