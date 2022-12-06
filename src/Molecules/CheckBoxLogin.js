import React from 'react';
import { StyleSheet } from 'react-native';
import { ViewRow } from "../Atoms/ViewRow";
import { CheckBoxInput } from "../Atoms/CheckBoxInput";
import Text from '../Atoms/Text/TextPara'
const CheckBoxLogin = (props) => {

  return (
    <>
      <ViewRow style={[styles.container, props.styleView]} >
        <CheckBoxInput state={props.state} onPress={props.onPress} />
        <Text>{props.text}</Text>
      </ViewRow>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: '3%',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },


})

export default CheckBoxLogin;