import React, { useState, useEffect, useContext } from "react";
import { View, Linking, ActivityIndicator, TouchableOpacity, StyleSheet, TextInput, Button } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ion from 'react-native-vector-icons/Ionicons';

import Foundation from 'react-native-vector-icons/Foundation';
import { fetchAPI } from "../utils/fetchAPI";
import { UserContext } from "../context/context";
import Text from "../Atoms/Text/TextPara";
import { getDateTime } from "../utils/dateNow";

export const RegisterListItem = React.memo(({ item, index }) => {
  const [guests, setGuests] = useState(parseInt(item.guests))
  const [save, setSave] = useState(false)
  const [cost, setCost] = useState(((item.guests * 20) + 50))
  const { username, soneURL, memberID, cccEventCompany } = useContext(UserContext);
  const [expand, setExpand] = useState(false);



  const currentDate = Date.parse(getDateTime())
  const expiration = Date.parse(item.cccExpirationDate)


  let coordinates = () => {
    return Linking.openURL(`${item.eventSpace}`);
  };

  const raw = {
    cccBNIevents: item.cccBNIevents,
    cccEventCompany: cccEventCompany,
    username: username,
    guests: guests,
    cost: cost,
    url: soneURL,
    cccMembers: memberID,
    cccParousies: item.cccParousies,
  }

  //Updates the records:
  const handlePost = async () => {
    console.log('handlePost')
    const res = await fetchAPI('https://ccmde1.cloudon.gr/BNI/updateRegistrations.php', raw)
  }



  return (
    <View style={styles.container} key={index}>
      {/* HEADER WITH EVENT TIME AND EDIT BUTTON */}
      <View style={[styles.topContainer, expand && styles.openContainer]}>
        <View style={styles.flexRow}>
          <AntDesign style={[styles.icon, expand && styles.textWhite]} name='clockcircleo' />
          <Text style={expand && styles.textWhite} >{item.eventDATE}</Text>
        </View>
        <View style={styles.eventTime} >

          <TouchableOpacity
            style={styles.flexRow}
            onPress={() => setExpand((prev) => !prev)} >
            <Text>{!expand ? "Edit" : "Close"} </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* EXPANDABLE ITEMS */}
      {expand && (
        <View >

          <View style={[styles.flexRow, styles.paddingRow]}>
            <Text>Comments: </Text>
            <Text>{item.sxolia}</Text>
          </View>
          <View style={[styles.flexRow, styles.paddingRow]}>
            <Ion style={[styles.icon, styles.pinIcon]} name="location-sharp" />
            {/* <Text>Location: </Text> */}

            <TouchableOpacity onPress={coordinates}>
              <Text style={styles.textGrey}>{'GPS Location'}</Text>
            </TouchableOpacity>


          </View>
          <GuestView
            guests={guests}
            setGuests={setGuests}
            setCost={setCost}
            guestCost={item.guestCost}
          />

          <View style={styles.priceView}>
            <Text>Total Cost: </Text>
            <Text> {cost} </Text>
            <Foundation style={styles.euro} name='euro' />
          </View>

          <ButtonView
            setSave={setSave}
            save={save}
            handlePost={handlePost}
            setExpand={setExpand}
            currentDate={currentDate}
            expiration={expiration}
          />
        </View>
      )}

    </View >
  )
})

const GuestView = ({ guests, setGuests, setCost, confirm, guestCost }) => {
  const increaseGeuests = () => {
    setGuests((prev) => prev + 1)
    setCost((prev) => prev + parseInt(guestCost))
  }
  const decreaseGeuests = () => {
    if (guests !== 0) {
      setGuests((prev) => prev - 1)
      setCost((prev) => prev - parseInt(guestCost))
    }

  }
  return (
    <View style={[styles.flexRow, styles.paddingBorder]}>
      <Text>Guests: </Text>
      <TouchableOpacity onPress={decreaseGeuests} disabled={confirm}>
        <AntDesign style={[styles.countIcons, confirm && styles.guestViewDisabled]} name="minussquare" />
      </TouchableOpacity >
      <View style={styles.countText}>
        <Text style={confirm && styles.guestViewDisabled}>{guests}</Text>
      </View>
      <TouchableOpacity onPress={increaseGeuests} disabled={confirm}>
        <AntDesign style={[styles.countIcons, confirm && styles.guestViewDisabled]} name="plussquare" />
      </TouchableOpacity>
    </View>
  )
}

const ButtonView = ({ setExpand, handlePost, currentDate, expiration }) => {
  //BUTTONS:
  const handleSave = () => {
    if (currentDate > expiration) {
      alert('Registration period is closed. \n You cannot edit this event')
    }
    if (currentDate < expiration) {
      setExpand(false);
      handlePost();
    }

  }


  return (
    <>

      <View style={styles.buttonView}>
        <TouchableOpacity
          style={[styles.button, styles.confirmButton]}
          onPress={handleSave}>
          <Text style={styles.textWhite}>Save</Text>
        </TouchableOpacity>
      </View>


    </>

  )
}





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
  },
  elevationEl: {
    elevation: 10,
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
  openContainer: {
    backgroundColor: COLORS.orange,
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
    color: COLORS.orange
  },
  pinIcon: {
    color: '#d66829'
  },
  eventTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 30,
    paddingVertical: 4,
    paddingHorizontal: 10,
    // backgroundColor: '#d66829',
  },
  textWhite: {
    color: 'white',
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
    textDecorationLine: 'underline'
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

  // dropDownContainer: {
  //   backgroundColor: COLORS.orange,
  //   width: 25,
  //   height: 25,
  //   marginLeft: 10,
  //   borderRadius: 2,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  dropdown: {
    fontSize: 18,
    color: COLORS.orange,

  }

})