import { createDrawerNavigator } from '@react-navigation/drawer';



import { StyleSheet } from 'react-native';
import { MainScreen } from '../screens/MainScreen';
import { SecondScreen } from '../screens/SecondSreen';
const Drawer = createDrawerNavigator();


export const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          // backgroundColor: 'grey',
          width: '100%',
        },
        // drawerActiveTintColor: COLORS.redPrimary,
        // drawerInactiveTintColor: COLORS.darkGrey,
      }}>
      <Drawer.Screen
        name="Home"
        component={MainScreen}
      // options={{
      //   header: ({ navigation }) => <NavDrawer navigation={navigation} />,
      //   drawerIcon: () => (
      //     <IconFontAw name="home" style={Styles.SideBarIcon} />
      //   ),
      // }}
      />
      <Drawer.Screen
        name="Screen2"
        component={SecondScreen}
      // options={{
      //   header: ({ navigation }) => <NavDrawer navigation={navigation} />,
      //   drawerIcon: () => (
      //     <FeatherIcon name="search" style={Styles.SideBarIcon} />
      //   ),
      // }}
      />
    </Drawer.Navigator>
  );
};