// // CoffeeList.js

// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import coffees from '../Navigation/coffees'; // Import the list of coffees
// import Colors from '../Navigation/Colors';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const numColumns = 2;
// const itemWidth = Dimensions.get('window').width / numColumns;
// const itemHeight = Dimensions.get('window').height / 4; // Adjust the height as needed

// const CoffeeList = () => {
//   const [likedItems, setLikedItems] = useState([]);
//   const [heartFilled, setHeartFilled] = useState({});

//   useEffect(() => {
//     const loadHeartFilledState = async () => {
//       try {
//         const keys = await AsyncStorage.getAllKeys();
//         const filledStates = {};
//         for (const key of keys) {
//           if (key.startsWith('heartFilled_')) {
//             const id = key.substring(12);
//             const value = await AsyncStorage.getItem(key);
//             filledStates[id] = JSON.parse(value);
//           }
//         }
//         setHeartFilled(filledStates);
//       } catch (error) {
//         console.error('Error loading heartFilled state:', error);
//       }
//     };

//     const loadLikedItems = async () => {
//       try {
//         const storedLikedItems = await AsyncStorage.getItem('likedItems');
//         if (storedLikedItems !== null) {
//           setLikedItems(JSON.parse(storedLikedItems));
//         }
//       } catch (error) {
//         console.error('Error loading liked items:', error);
//       }
//     };

//     loadHeartFilledState();
//     loadLikedItems();
//   }, []);

//   const toggleLike = async (itemId) => {
//     if (likedItems.includes(itemId)) {
//       setLikedItems(likedItems.filter((item) => item !== itemId));
//     } else {
//       setLikedItems([...likedItems, itemId]);
//     }
//     try {
//       await AsyncStorage.setItem('likedItems', JSON.stringify(likedItems));
//     } catch (error) {
//       console.error('Error saving liked items:', error);
//     }
//   };

//   const toggleHeartFill = async (itemId) => {
//     const updatedHeartFilled = { ...heartFilled, [itemId]: !heartFilled[itemId] };
//     setHeartFilled(updatedHeartFilled);
//     try {
//       await AsyncStorage.setItem(`heartFilled_${itemId}`, JSON.stringify(!heartFilled[itemId]));
//     } catch (error) {
//       console.error('Error saving heartFilled state:', error);
//     }
//   };

//   const renderItem = ({ item }) => (
//     <View style={[styles.itemContainer, { width: itemWidth, height: itemHeight }]}>
//       <TouchableOpacity onPress={() => toggleLike(item.id)} style={styles.imageContainer}>
//         <Image source={item.image} style={styles.image} />
//         <TouchableOpacity
//           style={styles.heartContainer}
//           onPress={() => toggleHeartFill(item.id)}
//         >
//           <Ionicons
//             name={heartFilled[item.id] ? 'heart' : 'heart-outline'}
//             size={24}
//             color={heartFilled[item.id] ? Colors.red : Colors.white}
//           />
//         </TouchableOpacity>
//       </TouchableOpacity>
//       <View>
//         <Text>{item.name}</Text>
//         <Text>{item.price}</Text>
//         <Text>{item.description}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <FlatList
//       data={coffees}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id.toString()}
//       numColumns={numColumns}
//       contentContainerStyle={styles.container}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: '4%',
//   },
//   itemContainer: {
//     flex: 1,
//     marginVertical: 10,
//     backgroundColor: Colors.grayblue,
//     margin: '3%',
//     borderRadius: 10,
//     padding: 5,
//   },
//   imageContainer: {
//     position: 'relative',
//     width: '100%',
//     height: '60%',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//     borderRadius: 10,
//   },
//   heartContainer: {
//     position: 'absolute',
//     top: 5,
//     right: 5,
//   },
// });

// export default CoffeeList;







// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import coffees from '../Navigation/coffees'; // Import the list of coffees
// import Colors from '../Navigation/Colors';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const numColumns = 2;
// const itemWidth = Dimensions.get('window').width / numColumns;
// const itemHeight = Dimensions.get('window').height / 4; // Adjust the height as needed

// const CoffeeList = ({ navigation }) => { // Pass navigation prop

//   const [likedItems, setLikedItems] = useState([]);
//   const [heartFilled, setHeartFilled] = useState({});

//   useEffect(() => {
//     const loadHeartFilledState = async () => {
//       try {
//         const keys = await AsyncStorage.getAllKeys();
//         const filledStates = {};
//         for (const key of keys) {
//           if (key.startsWith('heartFilled_')) {
//             const id = key.substring(12);
//             const value = await AsyncStorage.getItem(key);
//             filledStates[id] = JSON.parse(value);
//           }
//         }
//         setHeartFilled(filledStates);
//       } catch (error) {
//         console.error('Error loading heartFilled state:', error);
//       }
//     };

//     const loadLikedItems = async () => {
//       try {
//         const storedLikedItems = await AsyncStorage.getItem('likedItems');
//         if (storedLikedItems !== null) {
//           setLikedItems(JSON.parse(storedLikedItems));
//         }
//       } catch (error) {
//         console.error('Error loading liked items:', error);
//       }
//     };

//     loadHeartFilledState();
//     loadLikedItems();
//   }, []);

//   const toggleLike = async (itemId) => {
//     if (likedItems.includes(itemId)) {
//       setLikedItems(likedItems.filter((item) => item !== itemId));
//     } else {
//       setLikedItems([...likedItems, itemId]);
//     }
//     try {
//       await AsyncStorage.setItem('likedItems', JSON.stringify(likedItems));
//     } catch (error) {
//       console.error('Error saving liked items:', error);
//     }
//   };

//   const toggleHeartFill = async (itemId) => {
//     const updatedHeartFilled = { ...heartFilled, [itemId]: !heartFilled[itemId] };
//     setHeartFilled(updatedHeartFilled);
//     try {
//       await AsyncStorage.setItem(`heartFilled_${itemId}`, JSON.stringify(!heartFilled[itemId]));
//     } catch (error) {
//       console.error('Error saving heartFilled state:', error);
//     }
//   };

//   const renderItem = ({ item }) => (
//     <View style={[styles.itemContainer, { width: itemWidth, height: itemHeight }]}>
//       <TouchableOpacity onPress={() => toggleLike(item.id)} style={styles.imageContainer}>
//         <Image source={item.image} style={styles.image} />
//         <TouchableOpacity
//           style={styles.heartContainer}
//           onPress={() => toggleHeartFill(item.id)}
//         >
//           <Ionicons
//             name={heartFilled[item.id] ? 'heart' : 'heart-outline'}
//             size={24}
//             color={heartFilled[item.id] ? Colors.red : Colors.white}
//           />
//         </TouchableOpacity>
//       </TouchableOpacity>
//       <View>
//         <Text>{item.name}</Text>
//         <Text>{item.price}</Text>
      
//       </View>
//     </View>
//   );

//   return (
//     <FlatList
//       data={coffees}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id.toString()}
//       numColumns={numColumns}
//       contentContainerStyle={styles.container}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: '4%',
//   },
//   // ... other styles
//     itemContainer: {
//     flex: 1,
//     marginVertical: 10,
//     backgroundColor: Colors.grayblue,
//     margin: '3%',
//     borderRadius: 10,
//     padding: 5,
//   },
//   imageContainer: {
//     position: 'relative',
//     width: '100%',
//     height: '60%',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//     borderRadius: 10,
//   },
//   heartContainer: {
//     position: 'absolute',
//     top: 5,
//     right: 5,
//   },
// });

// export default CoffeeList;



// CoffeeList.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import coffees from '../Navigation/coffees'; // Import the list of coffees
import Colors from '../Navigation/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const numColumns = 2;
const itemWidth = Dimensions.get('window').width / numColumns;
const itemHeight = Dimensions.get('window').height / 4; // Adjust the height as needed

const CoffeeList = ({ navigation }) => {
  const [likedItems, setLikedItems] = useState(new Set()); // Initialize as a Set
  const [heartFilled, setHeartFilled] = useState({});

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

    loadHeartFilledState();
    loadLikedItems();
  }, []);

  const toggleLike = async (itemId) => {
    const updatedLikedItems = new Set(likedItems);

    if (updatedLikedItems.has(itemId)) {
      updatedLikedItems.delete(itemId);
    } else {
      updatedLikedItems.add(itemId);
    }

    setLikedItems(updatedLikedItems);

    try {
      await AsyncStorage.setItem('likedItems', JSON.stringify([...updatedLikedItems]));
    } catch (error) {
      console.error('Error saving liked items:', error);
    }
  };

  const toggleHeartFill = async (itemId) => {
    const updatedHeartFilled = { ...heartFilled, [itemId]: !heartFilled[item.id] };
    setHeartFilled(updatedHeartFilled);
    try {
      await AsyncStorage.setItem(`heartFilled_${itemId}`, JSON.stringify(!heartFilled[itemId]));
    } catch (error) {
      console.error('Error saving heartFilled state:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={[styles.itemContainer, { width: itemWidth, height: itemHeight }]}>
      <TouchableOpacity onPress={() => toggleLike(item.id)} style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
        <TouchableOpacity
          style={styles.heartContainer}
          onPress={() => toggleHeartFill(item.id)}
        >
          <Ionicons
            name={heartFilled[item.id] ? 'heart' : 'heart-outline'}
            size={24}
            color={heartFilled[item.id] ? Colors.red : Colors.white}
          />
        </TouchableOpacity>
      </TouchableOpacity>
      <View>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
        <Text>{item.description}</Text>
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
    padding: 5,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '60%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  heartContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
  }, 
});

export default CoffeeList;


