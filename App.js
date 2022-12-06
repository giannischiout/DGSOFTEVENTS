import 'react-native-gesture-handler';


import { StyleSheet, Text, View } from 'react-native';
import { HomeStack } from './src/navigation/homeStack';
//import Context layout:
import { Layout } from './src/context/context';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <Layout>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </Layout>
  );
}

