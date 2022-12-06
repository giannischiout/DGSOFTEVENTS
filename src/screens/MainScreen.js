import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { fetchAPI } from "../utils/fetchAPI";
import { UserContext } from "../context/context";
//Import Styles:
import { genStyles } from "../styleGeneral/style";
import { FeaturedEvents } from "../components/Events/FeaturedEvents";
import { RegisteredEvents } from "../components/Events/RegisteredEvents";
import { FlatlistEvents } from "../components/Flatlist";
export const MainScreen = ({ navigation }) => {

  return (
    <View style={genStyles.eventsView}>
      <RegisteredEvents navigation={navigation} />
    </View>


  )
}


