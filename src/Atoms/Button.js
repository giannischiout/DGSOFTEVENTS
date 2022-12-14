import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS } from '../styleGeneral/colors';

export const Button = (props) => {

  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={props.onPress}
      activeOpacity={props.disabled && 1}
      style={[styles.defaultBtn, props.disabled && styles.disabled, props.containerStyle ? props.containerStyle : styles.buttonContainer]}>

      {props.Icon}
      {!props.spinner ? (
        <Text style={props.textStyle ? props.textStyle : styles.buttonText}>
          {props.text}
        </Text>
      ) : (
        <ActivityIndicator size={'small'} color={'white'} />
      )}

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
  disabled: {
    backgroundColor: '#d1ceca'
  }

})

