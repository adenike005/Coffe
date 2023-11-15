import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../Component/Colors';
import { BlurView } from 'expo-blur';

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
            <Text style={{fontSize: 20, paddingBottom: 20,}}>Home</Text>
            <Text style={{fontSize: 20, paddingBottom: 20}}>Cart</Text>
          </View>
        )}

        {/* Drawer Toggle Button with Icon */}
        <TouchableWithoutFeedback onPress={toggleDrawer}>
          <View style={styles.drawerToggleButton}>
           <BlurView
           style={{width: 40,
           height: 40,
           justifyContent:"center",
           alignItems:"center"}}>
           {isDrawerOpen ? (<Icon name='times' size={30} color="white" style={styles.closeButton} />) : (<Icon name='bars' size={30} color="white" />)}
           </BlurView>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#000",
  },
  drawer: {
    elevation: 80,
    position: 'absolute',
    top: 0,
    left: 0,
    width: "70%",
    height: '100%',
    backgroundColor: "#fff",
    padding: 20,
    zIndex: 6,
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







