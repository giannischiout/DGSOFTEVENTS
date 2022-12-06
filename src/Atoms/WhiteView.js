import React from 'react';
import { View, StyleSheet } from 'react-native';

 const WhiteView = (props) => {
  return (
    <View style={[styles.view, props.spaceBetween && styles.spaceBetween, props.style]}>{props.children}
    </View>
  )
}


const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10
  },
  spaceBetween: {
    justifyContent: 'space-between'
  }
})

export default WhiteView;