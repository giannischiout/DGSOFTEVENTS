import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../styleGeneral/colors';

export const Button = (props) => {

  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.defaultBtn, props.containerStyle ? props.containerStyle : styles.buttonContainer]}>
      {props.Icon}
      <Text style={props.textStyle ? props.textStyle : styles.buttonText}>
        {props.text}
      </Text>
    </TouchableOpacity >
  )
}


const styles = StyleSheet.create({
  defaultBtn: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: COLORS.orangeBright,
    height: 60,
  },
  buttonContainer: {
    height: 60,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },

})
