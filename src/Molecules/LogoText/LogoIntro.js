import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Keyboard } from 'react-native';
import { COLORS } from '../../styleGeneral/colors';



const LogoIntro = (props) => {


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
      {!hide &&
        <>
          <View style={[styles.view, props.containerStyle]}>
            <Text style={[styles.textLeft, props.textStyle]}>BNI</Text>
            <Text style={[styles.textRight, props.textStyle]}>Events</Text>
          </View>
          <View>
            <Text style={styles.tagline}>SW 2022-23</Text>
          </View>
        </>
      }


    </>

  )
}


const styles = StyleSheet.create({
  view: {
    flexDirection: 'row'

  },
  textRight: {
    color: COLORS.orangeBright,
  },
  textLeft: {
    color: '#40423f',
    marginRight: 6,
  },
  tagline: {
    color: '#40423f',
    fontSize: 14,
  }


})

export default LogoIntro;