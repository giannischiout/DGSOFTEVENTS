import React from 'react';
import { Text } from 'react-native';
import { CheckBoxInput } from "../Atoms/CheckBoxInput";
import WhiteView  from '../Atoms/WhiteView';


const CheckBoxView = (props) => {
  return (
    <>
        <WhiteView spaceBetween={true} style={props.style}>
            <Text>{props.text}</Text>
            <CheckBoxInput state={props.state} onPress={props.onPress} />
        </WhiteView>
    </>
  )
}

export default CheckBoxView;