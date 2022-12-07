import 'react-native-gesture-handler';


import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { HomeStack } from './src/navigation/homeStack';
//import Context layout:
import { Layout } from './src/context/context';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#272421'} />
      <Layout>
        <NavigationContainer>
          <HomeStack />
        </NavigationContainer>
      </Layout>
    </>
  );
}

