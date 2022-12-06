import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity} from "react-native";
import { FlatlistEvents } from "../Flatlist";
import { fetchAPI } from "../../utils/fetchAPI";
import { FeaturedListItem } from "../../Molecules/FeaturedListItem";
import { COLORS } from '../../styleGeneral/colors'

import Foundation from 'react-native-vector-icons/Foundation';
import { UserContext } from "../../context/context";
import { Button } from "../../Atoms/Button";

import AddGuests from "../../Molecules/AddGuestsView";
import ViewAdd from "../../Molecules/ViewIcon";
import CheckBoxView from "../../Molecules/CheckBoxView";
import Text from "../../Atoms/Text/TextPara";
export const UpcomingEvents = ({ navigation }) => {

  const { username, soneURL, memberID, cccEventCompany } = useContext(UserContext);
  const [expand, setExpand] = useState(false)
  const [data, setData] = useState(null)
  const [check, setCheck] = useState({
    checkBox: false,
    guestsBtn: false,
    submitBtn: false,
    expand: false,
  })

  const [raw, setRaw] = useState({
    url: soneURL,
    cccmembers: memberID,
    cccEventCompany: cccEventCompany,
    guests: 0,
    cost: 0,
    cccBNIevents: '',
    eventDate: '',

    //company
  })

  //Fetch all current events for the user to see:
  const handleFetch = async () => {
    const res = await fetchAPI('https://ccmde1.cloudon.gr/BNI/featuredEvents.php', { userName: username, url: soneURL, cccEventCompany: cccEventCompany, cccmembers: memberID })
    console.log('fetch current evetns')
    console.log(res.result)
    if (res) {
      setData(res.result)
    }
  }

  //Insert/Register a new Event:
  const handlePost = async () => {
    if (check.checkBox) {
      const res = await fetchAPI('https://ccmde1.cloudon.gr/BNI/postNewRegistrations.php', raw)
      console.log('================================== res')
      console.log(res)
      navigation.navigate('Main')
    }
  }

  useEffect(() => {
    handleFetch();
  }, [])

  const ItemSeparatorView = () => {
    return (
      <View style={{ width: '100%', height: 1, backgroundColor: '#black' }} />
    );
  };

  const clickParticipateCheckBox = () => {
    if (!check.checkBox) {
      setRaw(prev => {
        return {
          ...prev,
          cost: (prev.cost + 50)
        }
      })
      setCheck((prev) => { return { ...prev, checkBox: true } });

    }
  }
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.header}>Featured Events</Text>
      <View style={styles.divider} />
      {/* CHOOSE EVENT: */}
      <TouchableOpacity style={[styles.eventPicker]} onPress={() => setCheck((prev) => { return { ...prev, expand: !prev.expand } })}>
        <Text styles={[check.expand && styles.whiteText]}>{raw.eventDate ? `Event Date: ${raw.eventDate}` : 'Choose Event:'}</Text>
      </TouchableOpacity>

      {/* FLATLIST: */}
      <View>
        {!data && check.expand && (
          <View style={styles.noEvents}>
            <Text>Nothing to show</Text>
          </View>
        )}
        {check.expand && <FlatlistEvents data={data} scroll={true} RenderItem={FeaturedListItem} ItemSeparatorComponent={ItemSeparatorView} setRaw={setRaw} setCheck={setCheck} />}
      </View>

      {/* PARTICIPATE BOX */}
      {raw.eventDate && <CheckBoxView onPress={clickParticipateCheckBox} state={check.checkBox} text={'Check box to participate'} />}

      {/* CHOOSE NUMBER OF GUESTS: */}
      {check.checkBox && <GuestView setRaw={setRaw} raw={raw} setCheck={setCheck} check={check} />}

      {/* CALCULATE TOTAL COST: */}
      {check.checkBox && (
        <View style={[styles.flexRow, styles.itemContainer]}>
          <Text>Total Cost: </Text>
          <Text> {raw.cost} </Text>
          <Foundation style={styles.euro} name='euro' />
        </View>
      )}


      {/* SUBMIT BUTTON: */}
      {check.checkBox && <Button onPress={handlePost} containerStyle={styles.submitEvent} text={'Submit'} />}


    </View>
  )
}


const GuestView = ({ setRaw, raw, setCheck, check }) => {
  const increaseGeuests = () => {

    setRaw(prev => {
      return {
        ...prev,
        guests: (prev.guests + 1)
      }
    })
    setRaw(prev => {
      return {
        ...prev,
        cost: (prev.cost + 20)
      }
    })
  }
  const decreaseGeuests = () => {
    //Do not drecease guest bellow Zero
    //Do not decrease guest bellow
    if (raw.people !== 0 && raw.cost !== 50) {
      setRaw(prev => {
        return {
          ...prev,
          guests: (prev.guests - 1)
        }
      })
      setRaw(prev => {
        return {
          ...prev,
          cost: (prev.cost - 20)
        }
      })
    }


  }

  const showButtons = () => {
    setCheck((prev) => { return { ...prev, guestsBtn: true } })
  }
  return (
    <>

      {!check.guestsBtn ?
        // <CheckBoxView  state={check.guestsBtn} text={'Add More Guests'}/>
        <ViewAdd text={'Add More Guests'} onPress={showButtons} addIcon={true} />
        :
        <AddGuests increase={increaseGeuests} decrease={decreaseGeuests} guests={raw.guests} />

      }
    </>
  )
}


const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },
  divider: {
    width: 30,
    height: 3,
    backgroundColor: COLORS.orange,
    marginVertical: 8,
    borderRadius: 4,
  },
  expandHeader: {
    backgroundColor: COLORS.orange,
  },
  container: {
    marginBottom: 40,
  },
  eventPicker: {
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
  },
  itemContainer: {
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    marginTop: 10
  },

  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
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


  submitEvent: {
    width: 140,
    padding: 10,
    marginTop: 10,
    borderRadius: 2,
  },

  euro: {
    color: COLORS.orange,
    fontSize: 18,
    marginTop: 1,
  },
  checkbox: {
    width: 25,
    height: 25,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: COLORS.orange,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkicon: {
    fontSize: 17,
  },
  noEvents: {
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 10,
    borderTopWidth: 0.2,
    borderColor: COLORS.lightGrey
  }


});



