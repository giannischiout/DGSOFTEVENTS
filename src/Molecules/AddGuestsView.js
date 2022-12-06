import React from 'react';
import { StyleSheet, View } from 'react-native';
import WhiteView from '../Atoms/WhiteView';
import { COLORS } from '../styleGeneral/colors';
import TouchIcon from '../Atoms/TouchableIcon';
import Text from '../Atoms/Text/TextPara';

const AddGuests = (props) => {
    return (
        <>
            <WhiteView spaceBetween={false} style={props.style}>
                <Text style={styles.text}>Add More Guests</Text>
                <TouchIcon name="minussquare" onPress={props.decrease} />

                <View style={styles.countText}>
                    <Text>{props.guests}</Text>
                </View>

                <TouchIcon name="plussquare" onPress={props.increase} />
            </WhiteView>
        </>
    )
}

const styles = StyleSheet.create({
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
    text: {
        marginRight: 10,
    }
})

export default AddGuests;