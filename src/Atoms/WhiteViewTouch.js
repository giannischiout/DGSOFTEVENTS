import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

 const WhiteViewTouch = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.view, props.spaceBetween && styles.spaceBetween, props.style]}>{props.children}
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10
  },
  spaceBetween: {
    justifyContent: 'space-between'
  }
})

export default WhiteViewTouch;