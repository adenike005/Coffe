// import { View, Text, TouchableOpacity } from 'react-native'
// import React from 'react'
// import Colors from '../Component/Colors'
// // import {Icon} from "react-native-vector-icons"
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { BlurView } from 'expo-blur'
// import { NavigationContainer } from '@react-navigation/native';
// // import { createDrawerNavigator } from '@react-navigation/drawer';


// const HomeScreen = () => {
//   return (
//     <View style={{backgroundColor:Colors.dark, flex:1, padding: "5%",}}>
//       {/* <BlurView
//       style={{
//         width:30,
//         height: 30,
//       }}>
//         <TouchableOpacity>
//         <Icon name="menu" size={30} color="#fff" />
//         </TouchableOpacity>
      

//       </BlurView> */}


      
   
//     </View>
//   )
// }

// export default HomeScreen

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../Component/Colors';

const HomeScreen = ({ navigation }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    if (isDrawerOpen) {
      setIsDrawerOpen(false);
    }
  };

  return (
  
    <TouchableWithoutFeedback onPress={closeDrawer}>
      <View style={{flex: 1, backgroundColor: "yellow"}}>
        {/* Main Content */}
        <View style={styles.mainContent}>
          <Text>Main Content Goes Here</Text>
        </View>

        {/* Drawer */}
        {isDrawerOpen && (
          <View style={styles.drawer}>
            <Text onPress={() => navigation.navigate("Welcome")}>Drawer Content Goes Here</Text>
          </View>
        )}

        {/* Drawer Toggle Button with Icon */}
        <TouchableWithoutFeedback onPress={toggleDrawer}>
          <View style={styles.drawerToggleButton}>
            {isDrawerOpen ? (<Icon name='times' size={30} color="black" style={styles.closeButton} />) : (<Icon name='bars' size={30} />)}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.dark,
  },
  drawer: {
    elevation: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: '100%',
    backgroundColor: 'red',
    padding: 20,
    zIndex: 2,
  },
  drawerToggleButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 3,
  },
  closeButton: {
    display: "none",
  },
});

export default HomeScreen;







