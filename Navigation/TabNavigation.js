// TabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../Screen/Home";
import Vart from "../Component/Vart";
import Notification from "../Component/Notification";
import Love from "../Component/Love";
import Colors from "./Colors";



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
          } 
          else if (route.name === "Vart") {
            iconName = focused ? "cart" : "cart-outline";
          } 
          else if (route.name === "Notification") {
            iconName = focused ? "notifications" : "notifications-outline";
          }
        else if (route.name === "Love") {
            iconName = focused ? "heart" : "heart-outline";
          } 
       
        // else if (route.name === "Search") {
        //     iconName = focused ? "search-outline" : "search-outline";
        //   }

        //   return <Ionicons name={iconName} size={iconSize} color={color} />;
        return <Ionicons name={iconName} size={iconSize}  color={color}/>;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.orangebrown,
        // inactiveTintColor: Color.Red,
        showLabel: false,
        tabStyle: {
          backgroundColor: Colors.black,
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
          headerShown: false, 
        }}
      />

   


        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            headerShown: false, 
          }}
        
        /> 
      <Tab.Screen
        name="Love"
        component={Love}
        options={{
          headerShown: false,
        }}
      />
  <Tab.Screen
        name="Vart"
        component={Vart}
        options={{
          headerShown: false,
          
        }}
      />

    

    

    </Tab.Navigator>
  );
};

export default TabNavigator;