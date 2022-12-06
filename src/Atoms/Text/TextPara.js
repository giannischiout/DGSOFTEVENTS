import React from "react";
import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../styleGeneral/colors";
const CustomText = (props) => {

  return (
    <>
      <Text style={[styles.text, props.style]}>{props.children}</Text>
    </>
  )
}


const styles = StyleSheet.create({
  text: {
    color: COLORS.bodyTextColor,
    fontSize: 17,
  }
})

export default CustomText;