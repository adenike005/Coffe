// Cart.js
import React from "react";
import {View, Text, StyleSheet, Image} from "react-native"
import Colors from "../Component/Colors";
import Coffee from "../Component/Coffee";

const Cart = ({route}) => {
  const { item } = route.params;
  // console.log(item);


  return (
    <View style={{backgroundColor:Colors.dark, flex:1,}}>
      <View>
      <Image source={item.image}/>
      <Text>Added to Cart</Text>
      <Text> {item.name}</Text>
    
    </View>
    </View>
  );
};
export default Cart;