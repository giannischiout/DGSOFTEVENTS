import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { genStyles } from "../styleGeneral/style";
import { UpcomingEvents } from "../components/Events/FeaturedEvents";
export const AddEvent = ({ navigation }) => {
    return (
        <View style={genStyles.eventsView}>
            <UpcomingEvents navigation={navigation} />
        </View>
    )
}