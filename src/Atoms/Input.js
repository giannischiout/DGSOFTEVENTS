import React, { useContext } from 'react';
import { TextInput, View } from 'react-native';
import { COLORS } from '../styleGeneral/colors';

const Input = (props) => {
  return (
    <TextInput
      value={props.value}
      placeholder={props.placeholder}
      placeholderTextColor= '#968e87'
      onChangeText={props.handleText}
      secureTextEntry={props.secureTextEntry}
      style={props.style}
      keyboardType={props.keyboardType}
      defaultValue= {props.defaultValue}
    />
  )
}

export default Input;

