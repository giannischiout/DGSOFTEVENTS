import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Keyboard } from "react-native";
import LoginForm from "../components/LoginForm";
import Logo from "../Molecules/Logo";
import LogoIntro from "../Molecules/LogoText/LogoIntro";




export const Login = ({ navigation }) => {



  return (
    <View style={styles.container}>

      <View style={styles.topView}>
        <LogoIntro textStyle={styles.text} />
      </View>
      <View style={styles.centerView}>
        <LoginForm navigation={navigation} />
      </View>
      <View style={styles.bottomView}>
        <Logo />
      </View>
    </View >
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    // width: '100%'
  },
  text: {
    fontSize: 30,
  },
  centerView: {
    height: '70%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  topView: {
    height: '15%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end'

  },
  bottomView: {
    height: '15%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }

});

