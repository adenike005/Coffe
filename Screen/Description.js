import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import Colors from "../Component/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const Description = ({ navigation, route }) => {
  const item = route.params;
  const [count, setCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // const addToCart = () => {
  //   // Navigate to the CartScreen
  //   // Navigating to CartScreen
  //   navigation.navigate("CartScreen", {
  //     item: item,
  //     // quantity: quantity,
  //   });
  // };

  const handleAddToCart = () => {
    addToCart({ ...item, quantity: count });
    // Navigate to the Cart tab
    navigation.navigate('Cart');
  };
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <SafeAreaView style={{ backgroundColor: Colors.dark, flex: 1 }}>
      <View style={styles.header}>
        <Icon
          name="arrow-back-ios"
          size={25}
          onPress={navigation.goBack}
          style={{ marginVertical: 20 }}
          color={Colors.white}
        />
      </View>

      <View
        style={{
          width: "100%",
          height: "35%",
        }}
      >
        <Image
          source={item.image}
          style={{ height: "100%", width: "100%", resizeMode: "contain" }}
        />
      </View>

      <View
        style={{
          marginTop: "5%",
          marginHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 13, color: Colors.gray, marginBottom: 5 }}>
          {item.included}
        </Text>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: Colors.white }}>
          {item.name}
        </Text>
      </View>

      <View
        style={{
          marginTop: "5%",
          marginHorizontal: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 130,
            height: 40,
            borderRadius: 20,
            backgroundColor: Colors.gray,
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              padding: 10,
            }}
          >
            <Icon
              name="add"
              size={18}
              color={Colors.white}
              onPress={increment}
            />
            <Text style={{ color: Colors.white }}>{count}</Text>
            <Icon
              name="remove"
              size={18}
              color={Colors.white}
              onPress={decrement}
            />
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 16, color: Colors.white }}>${item.price}</Text>
      </View>

      <View
        style={{ marginHorizontal: 20, marginTop: "10%", marginBottom: "5%" }}
      >
        <Text
          style={{
            color: Colors.white,
            lineHeight: 26,
            letterSpacing: 1,
            fontFamily: "Regular",
          }}
        >
          {item.description}
        </Text>
      </View>

      <View
        style={{
          marginTop: "5%",
          marginHorizontal: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 130,
            height: 40,
            borderRadius: 20,
            backgroundColor: Colors.gray,
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          {/* <TouchableOpacity
            style={{display: "flex", justifyContent: "center", flexDirection: "row",padding:10}}
            onPress={addToCart}>
               <Text style={{color:Colors.white}}>Add  to cart</Text>
            </TouchableOpacity> */}

          <TouchableOpacity
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              padding: 10,
            }}
            onPress={handleAddToCart}
          >
            <Text style={{ color: Colors.white, textAlign: "center" }}>
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={toggleLike}>
          {/* Heart icon that changes color based on 'isLiked' state */}
          <Icon
            name={isLiked ? "favorite" : "favorite-border"}
            size={24}
            color={isLiked ? Colors.primary : Colors.white}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Description;

const styles = StyleSheet.create({
  header: {
    // paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
});

// Description.js
// import React, { useState } from "react";
// import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
// import Icon from "react-native-vector-icons/MaterialIcons";
// import Colors from "../Component/Colors";

// const Description = ({ navigation, route }) => {
//   const item = route.params;
//   const [count, setCount] = useState(0);
//   const [isLiked, setIsLiked] = useState(false);

//   const addToCart = () => {
//     // Navigate to the CartScreen and pass item and quantity as parameters
//     navigation.navigate('CartScreen', { item, quantity: count });
//   };

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   const toggleLike = () => {
//     setIsLiked(!isLiked);
//   };

//   return (
//     <SafeAreaView style={{ backgroundColor: Colors.dark, flex: 1 }}>
//       {/* ... existing code ... */}

//       <View
//         style={{
//           marginTop: "5%",
//           marginHorizontal: 20,
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <View
//           style={{
//             width: 130,
//             height: 40,
//             borderRadius: 20,
//             backgroundColor: Colors.gray,
//             justifyContent: "center",
//           }}
//         >
//           <TouchableOpacity
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               flexDirection: "row",
//               padding: 10,
//             }}
//             onPress={addToCart}
//           >
//             <Text style={{ color: Colors.white }}>Add to cart</Text>
//           </TouchableOpacity>
//         </View>
//         {/* ... existing code ... */}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Description;
