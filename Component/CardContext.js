// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { createContext, useEffect, useState } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     loadCartItems();
//   }, []);

//   const loadCartItems = async () => {
//     let cartItems = await AsyncStorage.getItem("cart");
//     cartItems = cartItems ? JSON.parse(cartItems) : [];
//     setCartItems(cartItems);
//     calculateTotalPrice(cartItems);
//   };

//   const addToCartItem = async (item) => {
//     let cartItems = await AsyncStorage.getItem("cart");
//     cartItems = cartItems ? JSON.parse(cartItems) : [];
//     let isExist = cartItems.findIndex((cart) => cart.id === item.id);
//     if (isExist === -1) {
//       cartItems.push(item);
//       calculateTotalPrice(cartItems);
//       setCartItems(cartItems);
//       await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
//     }
//   };

//   const deleteCartItem = async (id) => {
//     let cartItems = await AsyncStorage.getItem("cart");
//     cartItems = cartItems ? JSON.parse(cartItems) : [];
//     cartItems = cartItems.filter((item) => item.id !== id);
//     setCartItems(cartItems);
//     calculateTotalPrice(cartItems);
//     await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
//   };

//   const calculateTotalPrice = (cartItems) => {
//     let totalSum = cartItems.reduce((total, item) => total + item.price, 0);
//     totalSum = totalSum.toFixed(2);
//     setTotalPrice(totalSum);
//   };
//   const value = {
//     cartItems,
//     addToCartItem,
//     deleteCartItem,
//     totalPrice,
//   };
//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };



// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   // const removeFromCart = (index) => {
//   //   const newCartItems = [...cartItems];
//   //   newCartItems.splice(index, 1);
//   //   setCartItems(newCartItems);
    
//   // };

//   const removeFromCart = (itemId) => {
//     setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== itemId));
//   };
  

  

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };


// import React, { createContext, useReducer } from 'react';

// // Define initial state for cart
// const initialState = {
//   cartItems: [],
// };

// // Define actions
// const CartActionTypes = {
//   ADD_TO_CART: 'ADD_TO_CART',
//   REMOVE_FROM_CART: 'REMOVE_FROM_CART',
// };

// // Define reducer function to handle actions
// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case CartActionTypes.ADD_TO_CART:
//       // Check if item is already in the cart
//       const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.item.id);

//       // If item already exists in the cart, update its quantity
//       if (existingItemIndex !== -1) {
//         const updatedCartItems = [...state.cartItems];
//         updatedCartItems[existingItemIndex].quantity += action.payload.quantity;
//         return {
//           ...state,
//           cartItems: updatedCartItems,
//         };
//       }

//       // If item is not in the cart, add it with the specified quantity
//       return {
//         ...state,
//         cartItems: [...state.cartItems, { ...action.payload.item, quantity: action.payload.quantity }],
//       };

//     case CartActionTypes.REMOVE_FROM_CART:
//       return {
//         ...state,
//         cartItems: state.cartItems.filter(item => item.id !== action.payload.itemId),
//       };

//     default:
//       return state;
//   }
// };

// // Create CartContext
// export const CartContext = createContext();

// // Create CartProvider component to wrap the application with CartContext provider
// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   // Define addToCart function to dispatch ADD_TO_CART action
//   const addToCart = (item, quantity) => {
//     dispatch({ type: CartActionTypes.ADD_TO_CART, payload: { item, quantity } });
//   };

//   // Define removeFromCart function to dispatch REMOVE_FROM_CART action
//   const removeFromCart = itemId => {
//     dispatch({ type: CartActionTypes.REMOVE_FROM_CART, payload: { itemId } });
//   };

//   return (
//     <CartContext.Provider value={{ cartItems: state.cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };


import React, { createContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define initial state for cart
const initialState = {
  cartItems: [],
};

// Define actions
const CartActionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
};

// Define reducer function to handle actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      // Check if item is already in the cart
      const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.item.id);

      // If item already exists in the cart, update its quantity
      if (existingItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += action.payload.quantity;
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }

      // If item is not in the cart, add it with the specified quantity
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload.item, quantity: action.payload.quantity }],
      };

    case CartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.itemId),
      };

    default:
      return state;
  }
};

// Create CartContext
export const CartContext = createContext();

// Create CartProvider component to wrap the application with CartContext provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Define addToCart function to dispatch ADD_TO_CART action
  const addToCart = (item, quantity) => {
    dispatch({ type: CartActionTypes.ADD_TO_CART, payload: { item, quantity } });
  };

  // Define removeFromCart function to dispatch REMOVE_FROM_CART action
  const removeFromCart = itemId => {
    dispatch({ type: CartActionTypes.REMOVE_FROM_CART, payload: { itemId } });
  };

  // UseEffect to watch for changes in cartItems state and update AsyncStorage
  useEffect(() => {
    const saveCartToStorage = async () => {
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      } catch (error) {
        console.error('Error saving cart items:', error);
      }
    };

    saveCartToStorage();
  }, [state.cartItems]);

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
