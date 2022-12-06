import React from 'react';
import { Text, StyleSheet} from 'react-native';
import WhiteView  from '../Atoms/WhiteView';
import Ionic from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../styleGeneral/colors';
import View from '../Atoms/WhiteViewTouch';


const ViewIcon = (props) => {
  return (
    <>
        <View spaceBetween={true} style={props.style} onPress={props.onPress} >
            <Text>{props.text}</Text>
            {props.addIcon && <Ionic style={styles.addIcon} name="add-circle-outline" />}
        </View>
    </>
  )
}


const styles = StyleSheet.create({
    addIcon: {
      fontSize: 30,
      color: COLORS.lightGrey,
      marginRight: 8,
    },
})
export default ViewIcon;