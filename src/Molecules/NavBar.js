import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Keyboard } from 'react-native';

const NavBar = (props) => {

  return (
    <>
      <View>
        <Image style={styles.image} source={require('../../assets/imgs/logo.png')} />
      </View>

    </>

  )
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 40,
  },

})

export default NavBar;