import React from 'react';
import { CheckBoxInput } from "../Atoms/CheckBoxInput";
import WhiteView  from '../Atoms/WhiteView';
import Text from '../Atoms/Text/TextPara';

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