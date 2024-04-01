// import React from 'react';
// import { View, Text, FlatList } from 'react-native';

// const CartPage = ({ route }) => {
//   const { cart } = route.params;

//   return (
//     <View>
//       <Text>Cart Page</Text>
//       <FlatList
//         data={cart}
//         renderItem={({ item }) => (
//           <View>
//             <Text>{item.name} - ${item.price}</Text>
//           </View>
//         )}
//         keyExtractor={item => item.id.toString()}
//       />
//     </View>
//   );
// };

// export default CartPage;


import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { CartContext } from './CardContext';

const CartScreen = () => {
  const { cartItems } = useContext(CartContext); // Access cartItems from CartContext

  return (
    <View>
      {cartItems.map((item, index) => (
        <Text key={index}>{item.name}</Text>
      ))}
    </View>
  );
};

export default CartScreen;
