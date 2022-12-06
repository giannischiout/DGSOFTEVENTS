import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FlatlistEvents } from "../Flatlist";
import { UserContext } from "../../context/context";
import { fetchAPI } from "../../utils/fetchAPI";
import { RegisterListItem } from "../../Molecules/RegisteredListItem";
import { COLORS } from "../../styleGeneral/colors";
import Ionic from 'react-native-vector-icons/Ionicons';
import Text from "../../Atoms/Text/TextPara";
export const RegisteredEvents = ({ navigation }) => {
  const { soneURL, cccEventCompany, memberID } = useContext(UserContext);
  console.log(soneURL)

  const [data, setData] = useState(null)

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      handleFetch()
    });
    return unsubscribe;
  }, [navigation]);

  const handleFetch = async () => {
    const res = await fetchAPI('https://ccmde1.cloudon.gr/BNI/fetchEvents.php', { url: soneURL, cccEventCompany: cccEventCompany, cccmembers: memberID })

    if (res) {

      setData(res.result)
    }

  }


  const ItemSeparatorView = () => {
    return (
      <View style={{ width: '100%', height: 10, backgroundColor: '#f2f3f2' }} />
    );
  };
  return (
    <>
      <TouchableOpacity style={styles.newEvent} onPress={() => navigation.navigate('AddEvent')}>
        <Text>Join Event</Text>
        <Ionic style={styles.addIcon} name="add-circle-outline" />
      </TouchableOpacity>
      <Text style={styles.text}>Registered Events</Text>
      <View style={styles.divider} />
      <View style={styles.flatlistContainer}>
        {data == null && (
          <View style={styles.noEventsView}>
            <Text> No Registered Events</Text>
          </View>
        )}
        <FlatlistEvents data={data} scroll={true} RenderItem={RegisterListItem} ItemSeparatorComponent={ItemSeparatorView} />
      </View>

    </>
  )
}


const styles = StyleSheet.create({
  flatlistContainer: {
    flex: 1,
    marginTop: 10,
  },
  container: {
    marginVertical: 20,
  },
  text: {
    fontSize: 20,
  },
  divider: {
    width: 30,
    height: 3,
    backgroundColor: COLORS.orange,
    marginVertical: 8,
    borderRadius: 4,
  },
  newEvent: {
    height: 60,
    backgroundColor: 'white',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    elevation: 2,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "#f6f6f6",
  },
  addIcon: {
    fontSize: 30,
    color: COLORS.orange
  },
  noEventsView: {
    height: 60,
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 50,
    justifyContent: 'center'
  },

}
)