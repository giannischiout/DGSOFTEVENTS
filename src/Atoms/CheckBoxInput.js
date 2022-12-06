import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../styleGeneral/colors';
import AntDesign from 'react-native-vector-icons/AntDesign'
export const CheckBoxInput = (props) => {

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        props.style ? props.style : styles.checkbox
      ]}>
      {props.state && <AntDesign style={[props.styleIcon ? props.styleIcon : styles.checkicon,  ]} name="check" />}
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    borderWidth: 1,
    marginRight: 10,
    marginLeft: 5,
    width: 25,
    height: 25,
    borderColor: COLORS.orange,
  },
  checkicon: {
    fontSize: 17,
    color: 'black'
  },

})





