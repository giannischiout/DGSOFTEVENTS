import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../styleGeneral/colors';


const NavLogo = (props) => {

  return (
    <>
      {<View style={[styles.view, props.containerStyle]}>
        <Text style={[styles.textLeft, props.textStyle]}>DGSOFT</Text>
        <Text style={[styles.textRight, props.textStyle]}>EVENTS</Text>
      </View>}

    </>

  )
}


const styles = StyleSheet.create({
  view: {
    flexDirection: 'row'

  },
  textRight: {
    color: COLORS.orangeBright,

  },
  textLeft: {
    color: '#40423f',
    marginRight: 3,
  }

})

export default NavLogo;