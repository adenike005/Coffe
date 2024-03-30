import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import coffees from '../Navigation/coffees'; // Import the list of coffees
import Colors from '../Navigation/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const numColumns = 2;
const itemWidth = Dimensions.get('window').width / numColumns;
const itemHeight = Dimensions.get('window').height / 4; // Adjust the height as needed

const CoffeeList = () => {
  // State to keep track of liked items
  const [likedItems, setLikedItems] = useState([]);

  // State to keep track of heart icon fill
  const [heartFilled, setHeartFilled] = useState({});

  // Effect to load heartFilled state from AsyncStorage
  useEffect(() => {
    const loadHeartFilledState = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const filledStates = {};
        for (const key of keys) {
          if (key.startsWith('heartFilled_')) {
            const id = key.substring(12);
            const value = await AsyncStorage.getItem(key);
            filledStates[id] = JSON.parse(value);
          }
        }
        setHeartFilled(filledStates);
      } catch (error) {
        console.error('Error loading heartFilled state:', error);
      }
    };

    loadHeartFilledState();
  }, []);

  // Function to toggle like status of an item
  const toggleLike = (itemId) => {
    // Check if the item is already liked
    if (likedItems.includes(itemId)) {
      // If already liked, remove it from the liked items
      setLikedItems(likedItems.filter((item) => item !== itemId));
    } else {
      // If not liked, add it to the liked items
      setLikedItems([...likedItems, itemId]);
    }
  };

  // Function to toggle heart icon fill
  const toggleHeartFill = async (itemId) => {
    // Toggle heartFilled state
    const updatedHeartFilled = { ...heartFilled, [itemId]: !heartFilled[itemId] };
    setHeartFilled(updatedHeartFilled);
    try {
      // Save the heartFilled state to AsyncStorage for this specific item
      await AsyncStorage.setItem(`heartFilled_${itemId}`, JSON.stringify(!heartFilled[itemId]));
    } catch (error) {
      console.error('Error saving heartFilled state:', error);
    }
  };

  // Function to render each item in the list
  const renderItem = ({ item }) => (
    <View style={[styles.itemContainer, { width: itemWidth, height: itemHeight }]}>
      <View onPress={() => toggleLike(item.id)} style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
        <TouchableOpacity
          style={styles.heartContainer}
          onPress={() => toggleHeartFill(item.id)}
        >
          <Ionicons
            name={heartFilled[item.id] ? 'heart' : 'heart-outline'}
            size={24}
            color={likedItems.includes(item.id) ? Colors.white : Colors.orangebrown}
          />
        </TouchableOpacity>
      </View>
      <View >
        <Text>{item.name}</Text>
        <Text>{item.name}</Text>
        <Text>{item.name}</Text>
      </View>
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
  container: {
    paddingHorizontal: '4%',
  },
  itemContainer: {
    flex: 1,
    marginVertical: 10,
    backgroundColor: Colors.grayblue,
    margin: '3%',
    borderRadius: 10,
    padding: 5
  },
  imageContainer: {
    position: 'relative',
    width:"100%",
    height:"60%",
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10
  },
  heartContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});

export default CoffeeList;

