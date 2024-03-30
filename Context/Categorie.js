import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import categories from '../Navigation/Categorie'; // Import the list of coffee categories
import Colors from '../Navigation/Colors';

const CoffeeCategories = () => {
  const [selectedItem, setSelectedItem] = useState(categories[0]?.id); // Initialize with the id of the first category

  // Function to render each item in the list
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.item, selectedItem === item.id && styles.selectedItem]} // Apply selected styles conditionally
      onPress={() => setSelectedItem(item.id)}
    >
      <Text style={[styles.text, selectedItem === item.id && { color: Colors.orangebrown }]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true} // Make the FlatList horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container} // Apply styles to the FlatList container
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '8%',
    marginTop: '3%',
  },
  item: {
    padding: 10,
    marginRight: 10,
    
  },
  text: {
    fontSize: 18,
    color: Colors.bluish,
  },
  selectedItem: {
    borderBottomWidth: 1,
    borderColor: Colors.orangebrown,
  },
});

export default CoffeeCategories;






