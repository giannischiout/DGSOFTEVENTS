import React from 'react';
import { StyleSheet } from 'react-native';
import { ViewRow } from "../Atoms/ViewRow";
import { CheckBoxInput } from "../Atoms/CheckBoxInput";
import Text from '../Atoms/Text/TextPara'
import { COLORS } from '../styleGeneral/colors';
const CheckBoxLogin = (props) => {

  return (
    <>
      <ViewRow style={[styles.container, props.styleView]} >
        <CheckBoxInput style={styles.checkbox} styleIcon={styles.icon} state={props.state} onPress={props.onPress} />
        <Text style={styles.text}>{props.text}</Text>
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
  checkbox: {
    width: 20,
    height: 20,
    borderColor: '#d8d7d7',
    marginHorizontal: 10,
    borderWidth: 0.3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    color: COLORS.orangeBright,
    fontSize: 16,
  },
  text: {
    fontSize: 14,
  }


})

export default CheckBoxLogin;