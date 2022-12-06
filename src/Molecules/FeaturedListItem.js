import React, { useState, useEffect, useContext } from "react";
import { View, TouchableOpacity, StyleSheet, } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Text from "../Atoms/Text/TextPara";

export const FeaturedListItem = React.memo(({ item, index, setRaw, setCheck }) => {

  const handleRaw = () => {
    setCheck((prev) => {
      return {
        ...prev, expand: false
      }
    })
    setRaw(prev => {
      return {
        ...prev,
        cccBNIevents: item.cccBNIevents,
        eventDate: item.eventDate,
      }
    })
  }

  return (
    <View style={styles.container} key={index}>
      <TouchableOpacity onPress={handleRaw} style={styles.event} >
        <Text style={styles.index}>{index + 1}</Text>
        <AntDesign style={[styles.icon]} name='clockcircleo' />
        <Text >{item.eventDate}</Text>
      </TouchableOpacity >
    </View >
  )
})

const COLORS = {
  orange: '#d66829',
  medLightGrey: '#d5d6d6',
  lightGrey: '#cecfcd',
  confirm: "#f1140e",
  success: '#4BB543'
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 4,
    padding: 8
  },
  index: {
    marginRight: 10,
  },
  event: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    paddingVertical: 4,
    paddingHorizontal: 10,
    height: 40,
    // backgroundColor: '#d66829',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    height: 60,
    // marginBottom: 10,
    // borderBottomWidth: 0.2,
    // borderBottomColor: '#d5d6d6',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  flexRowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  icon: {
    marginRight: 5,
    fontSize: 13,
  },
  pinIcon: {
    color: '#d66829'
  },

  textWhite: {
    color: 'white',
    fontSize: 13,
    letterSpacing: 1.1,
    textAlign: 'center'
  },
  locationRow: {
    borderTopWidth: 0.2,
    borderTopColor: '#d5d6d6',
    padding: 5,
  },
  textGrey: {
    fontSize: 13,
    color: '#5a5253',
    letterSpacing: 1.1,
  },
  priceView: {
    borderWidth: 0.2,
    borderColor: '#d5d6d6',
    padding: 10,
    flexDirection: "row",
    alignItems: 'center',
  },
  buttonView: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
  },
  button: {
    width: 90,
    backgroundColor: "#f3450c",
    paddingVertical: 7,
    borderRadius: 30,
    textAlign: 'center',
  },

  confirmButton: {
    backgroundColor: COLORS.confirm,
  },
  saveButton: {
    backgroundColor: COLORS.lightGrey,
  },
  euro: {
    color: COLORS.orange,
    fontSize: 18,
    marginTop: 1,
  },
  paddingBorder: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderTopWidth: 0.2,
    borderTopColor: '#d5d6d6',
  },
  paddingRow: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderTopWidth: 0.2,
    borderTopColor: '#d5d6d6',
  },
  countIcons: {
    fontSize: 25,
    color: COLORS.orange,
  },
  guestViewDisabled: {
    color: COLORS.lightGrey,
  },
  countText: {
    marginHorizontal: 8,
    minWidth: 25,
    height: 25,
    borderWidth: 1,
    borderColor: COLORS.medLightGrey,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registration: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderTopWidth: 0.2,
    borderTopColor: '#d5d6d6',
  },
  registrationText: {
    color: COLORS.success,
  },

  dropDownContainer: {
    backgroundColor: COLORS.orange,
    width: 25,
    height: 25,
    marginLeft: 10,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dropdown: {
    fontSize: 18,
    color: 'white'

  }

})