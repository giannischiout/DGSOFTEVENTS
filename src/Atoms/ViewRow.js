import React from 'react';
import { View, StyleSheet } from 'react-native';


export const ViewRow = (props) => {
  return (
    <View style={[
        styles.viewRow, 
        props.spaceBetween && styles.spaceBetween,
        props.style,
      ]}>
      {props.children}
    </View>
  )
}


const styles = StyleSheet.create({
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  spaceBetween: {
    justifyContent: 'space-between'
  }, 
  
  

})

