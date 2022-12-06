import React, { useContext } from 'react';
import { TextInput, View } from 'react-native';


const Input = (props) => {
  return (
    <TextInput
      value={props.value}
      placeholder={props.placeholder}
      onChangeText={props.handleText}
      secureTextEntry={props.textEntry}
      style={props.style}
      keyboardType={props.keyboardType}
      defaultValue= {props.defaultValue}
    />
  )
}

export default Input;

