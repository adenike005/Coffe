// TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../Screen/Home';
import Cart from '../Screen/Cart';
import Colors from '../Component/Colors';
import { BlurView } from 'expo-blur';
import { Text } from 'react-native';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const iconSize = 18;
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } 

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={iconSize} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.white,
        showLabel: false, // Hide tab labels
        tabStyle: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',  
          // Background color for each individual tab
         
          },        style: {
            borderTopColor: 'transparent', // This is to avoid a border on the top of the tab bar
          },
  

        
    
      }}


      
    

      >
      <Tab.Screen name="Home" component={Home}
      options={{
        headerShown: false, // Hide the header for the 'Cart' screen
      }} />
      <Tab.Screen name="Cart" component={Cart}
      options={{
        headerShown: false, // Hide the header for the 'Cart' screen
      }} />
      
    </Tab.Navigator>
  );
};

export default TabNavigator;
