// CartScreen.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import Coffee from '../Component/Coffee';

const CartScreen = ({ route,  }) => {
  const { item, quantity } = route.params;

  return (
    <View>
        <Image source={item.image}/>
      <Text>Added to Cart</Text>
      <Text>{quantity} x {item.name}</Text>
      <Text>Total Price: ${quantity * item.price}</Text>
      {/* Add additional information as needed */}
    </View>
  );
};

export default CartScreen;


