import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import coffees from '../Navigation/coffees'; // Import the list of coffees

const numColumns = 2;
const itemWidth = Dimensions.get('window').width / numColumns;
const itemHeight = Dimensions.get('window').height / 4; // Adjust the height as needed

const CoffeeList = () => {
  // Function to render each item in the list
  const renderItem = ({ item }) => (
    <View style={[styles.itemContainer, { width: itemWidth, height: itemHeight }]}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={coffees}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={numColumns}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  // container: {
  //   paddingVertical: 10,
  // },
  // itemContainer: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderWidth: 1,
  //   borderColor: 'black',
  // },
});

export default CoffeeList;
