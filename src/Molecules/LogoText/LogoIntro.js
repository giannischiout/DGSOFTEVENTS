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
        <View style={[styles.view, props.containerStyle]}>
          <Text style={[styles.textLeft, props.textStyle]}>DGSOFT</Text>
          <Text style={[styles.textRight, props.textStyle]}>EVENTS</Text>
        </View>
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
    marginRight: 3,
  }

})

export default LogoIntro;