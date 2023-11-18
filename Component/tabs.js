// TabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../Screen/Home";
import CartScreen from "../Screen/CartScreen";
import Colors from "../Component/Colors";
import Cart from "../Screen/Cart";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const iconSize = 18;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          }

          return <Ionicons name={iconName} size={iconSize} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.white,
        showLabel: false,
        tabStyle: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
        style: {
          borderTopColor: "transparent",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false, // Hide the header for the 'Cart' screen
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerShown: false, // Hide the header for the 'Cart' screen
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false, // Hide the header for the 'Cart' screen
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
