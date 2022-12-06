import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Keyboard, Image } from 'react-native';


const Logo = (props) => {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setHide(true)
    })
    Keyboard.addListener('keyboardDidHide', () => {
      setHide(false)
    })
  }, [Keyboard])


  return (
    <>
      {!hide && (
        <View>
          <Image style={styles.image} source={require('../../assets/imgs/logo.png')} />
        </View>
      )}
    </>

  )
}


const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 30,
    marginVertical: 30,
  },
  text: {
  },
  text2: {
    // fontFamily: 'Lato-Bold'
  }
})

export default Logo;