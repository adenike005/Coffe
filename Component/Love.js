// LoveScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../Navigation/Colors';
import coffees from '../Navigation/coffees'; // Import the list of coffees

const LoveScreen = () => {
  // State to store liked items
  const [likedItems, setLikedItems] = useState(new Set()); // Initialize as a Set

  // Load liked items from AsyncStorage
  useEffect(() => {
    const loadLikedItems = async () => {
      try {
        const storedLikedItems = await AsyncStorage.getItem('likedItems');
        if (storedLikedItems !== null) {
          setLikedItems(new Set(JSON.parse(storedLikedItems))); // Initialize as a Set
        }
      } catch (error) {
        console.error('Error loading liked items:', error);
      }
    };

    loadLikedItems();
  }, []);

  const renderLikedItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
        {/* Add other item details if available */}
      </View>
    </View>
  );

  // Filter the liked items from the coffees array
  const likedCoffees = coffees.filter(coffee => likedItems.has(coffee.id));

  return (
    <View style={styles.container}>
      {likedCoffees.length > 0 ? (
        <FlatList
          data={likedCoffees}
          renderItem={renderLikedItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <Text style={styles.noItemsText}>You haven't liked any coffees yet!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '8%',
    backgroundColor: Colors.grayblue,
  },
  listContainer: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  details: {
    flex: 1,
  },
  noItemsText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: '50%',
  },
});

export default LoveScreen;




