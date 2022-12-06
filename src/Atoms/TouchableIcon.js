import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../styleGeneral/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TouchableIcon = (props) => {

  return (
    <TouchableOpacity onPress={props.onPress} >
        <AntDesign style={styles.countIcons} name={props.name}/>
    </TouchableOpacity >

  )
}

const styles= StyleSheet.create({
    countIcons: {
        fontSize: 25,
        color: COLORS.orange,
      },
})

export default TouchableIcon;
