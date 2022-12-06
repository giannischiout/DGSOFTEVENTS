import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';


export const FlatlistEvents = ({ data, scroll, RenderItem, ItemSeparatorComponent, setRaw, setCheck }) => {

  const renderItem = ({ item, index, }) => (
    <RenderItem item={item} index={index} setRaw={setRaw} setCheck={setCheck} />
  );

  const keyExtractor = (item, index) => {
    { return index.toString() }
  };


  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        scrollEnabled={scroll}
        ItemSeparatorComponent={ItemSeparatorComponent} />
    </>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 10,
//   }
// })