// import React, { useContext, useEffect, useState } from 'react';
// import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
// import { CartContext } from './CardContext';
// import Colors from '../Navigation/Colors';
// import { EvilIcons } from '@expo/vector-icons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import SPACING from '../Navigation/SPACING';

// const CartScreen = () => {
//   const { cartItems, removeFromCart } = useContext(CartContext);
//   const [totalPrice, setTotalPrice] = useState(0);

//   // Function to calculate the total price for each item based on the quantity
//   const calculateTotalPrice = (item) => {
//     return item.price * item.quantity;
//   };

//   // Calculate total price when cart items change
//   useEffect(() => {
//     const price = cartItems.reduce((acc, item) => acc + calculateTotalPrice(item), 0);
//     setTotalPrice(price);
//   }, [cartItems]);

//   // Function to handle deleting an item from the cart
//   const handleDelete = async (itemId) => {
//     removeFromCart(itemId);

//     // Update AsyncStorage to reflect the changes in cart items
//     try {
//       await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
//     } catch (error) {
//       console.error('Error saving cart items:', error);
//     }
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: Colors.black }}>
//       <ScrollView style={{ flex: 1 }}>
//         {cartItems.map((item, index) => (
//           <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, paddingHorizontal: SPACING, marginVertical: 5 }}>
//             <Image source={item.image} style={{ width: 60, height: 60, marginRight: 10, borderRadius: SPACING }} />
//             <Text style={{ color: Colors.white, flex: 1, fontWeight: 'bold' }}>{item.name}</Text>
//             <Text style={{ color: Colors.white, flex: 1, fontWeight: 'bold' }}>{item.quantity}</Text>
//             <Text style={{ color: Colors.white, flex: 1, fontWeight: 'bold' }}>${calculateTotalPrice(item).toFixed(2)}</Text>
//             <TouchableOpacity onPress={() => handleDelete(item.id)}>
//               <EvilIcons name="trash" size={20} color={Colors.red} />
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>

//       <View style={{ borderTopWidth: 1, borderTopColor: Colors.white, paddingHorizontal: SPACING }}>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: SPACING }}>
//           <Text style={{ color: Colors.white, marginVertical: '3%', fontWeight: 'bold' }}>Total: </Text>
//           <Text style={{ color: Colors.white, marginVertical: '3%', fontWeight: 'bold' }}>${totalPrice.toFixed(2)}</Text>
//         </View>

//         <TouchableOpacity style={{ width: '100%', padding: SPACING * 1.5, backgroundColor: Colors.orangebrown, alignItems: 'center', borderRadius: SPACING, marginBottom:"5%" }}>
//           <Text style={{ color: Colors.white, fontWeight: 'bold' }}>Checkout</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default CartScreen;



import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { CartContext } from './CardContext';
import Colors from '../Navigation/Colors';
import { EvilIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SPACING from '../Navigation/SPACING';

const CartScreen = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to calculate the total price for each item based on the quantity
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  // Calculate total price when cart items change
  useEffect(() => {
    const price = cartItems.reduce((acc, item) => acc + calculateTotalPrice(item), 0);
    setTotalPrice(price);
  }, [cartItems]);

  // Function to handle deleting an item from the cart
  const handleDelete = async (itemId) => {
    removeFromCart(itemId);

    // Update AsyncStorage to reflect the changes in cart items
    try {
      await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error saving cart items:', error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.black }}>
      <ScrollView style={{ flex: 1 }}>
        {cartItems.length === 0 ? (
          <Text style={{ color: Colors.white, textAlign: 'center', marginTop: '50%', fontWeight: 'bold', fontSize: SPACING * 2 }}>No items in the cart. Add items to your cart!</Text>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, paddingHorizontal: SPACING, marginVertical: 5 }}>
                <Image source={item.image} style={{ width: 60, height: 60, marginRight: 10, borderRadius: SPACING }} />
                <Text style={{ color: Colors.white, flex: 1, fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ color: Colors.white, flex: 1, fontWeight: 'bold' }}>{item.quantity}</Text>
                <Text style={{ color: Colors.white, flex: 1, fontWeight: 'bold' }}>${calculateTotalPrice(item).toFixed(2)}</Text>
                <TouchableOpacity onPress={() => handleDelete(item.id)}>
                  <EvilIcons name="trash" size={20} color={Colors.red} />
                </TouchableOpacity>
              </View>
            ))}
          </>
        )}
      </ScrollView>

      {cartItems.length > 0 && (
        <View style={{ borderTopWidth: 1, borderTopColor: Colors.white, paddingHorizontal: SPACING }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: SPACING }}>
            <Text style={{ color: Colors.white, marginVertical: '3%', fontWeight: 'bold' }}>Total: </Text>
            <Text style={{ color: Colors.white, marginVertical: '3%', fontWeight: 'bold' }}>${totalPrice.toFixed(2)}</Text>
          </View>

          <TouchableOpacity style={{ width: '100%', padding: SPACING * 1.5, backgroundColor: Colors.orangebrown, alignItems: 'center', borderRadius: SPACING }}>
            <Text style={{ color: Colors.white, fontWeight: 'bold' }}>Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CartScreen;











