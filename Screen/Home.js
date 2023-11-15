import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../Component/Colors';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

const Home = ({ navigation }) => {
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
      <View style={{flex: 1, }}>
        {/* Main Content */}
        <View style={styles.mainContent}>
          <Text>Main Content Goes Here</Text>
        </View>

        {/* Drawer */}
        {isDrawerOpen && (
          <View style={styles.drawer}>
           <View style={{padding: 20,position:"relative" }}>
           <View style={{
              width: 150,
              height: 150,
              marginBottom: 30,
            
            }}>
              <Image source={require("../assets/Images/Black.png")}
              style={{width: "100%",
              height:"100%"}}/>
            </View>
            
         <View style={{display:"flex", flexDirection:"row",marginBottom: 20 }}>
         {/* <Image source={require("../assets/Images/home.png")} style={{width: 20, height: 25}}/> */}
         <Icon name='home' size={30} color={Colors.white}/>
         <Text style={{fontSize: 16, textAlign:"center", marginHorizontal: 20, fontFamily:"Pacifico", color:Colors.white}}>Home</Text>
         </View >

         <View style={{display:"flex", flexDirection:"row",marginBottom: 20 }}>
         <Image source={require("../assets/Images/about.png")} style={{width: 30, height: 30}}/>
        
         <Text style={{fontSize: 16, textAlign:"center", marginHorizontal: 20, fontFamily:"Pacifico", color:Colors.white}}>About</Text>
         </View >
          
          
        
            
          </View>

          
          </View>
        )}

        {/* Drawer Toggle Button with Icon */}
        <TouchableWithoutFeedback onPress={toggleDrawer}>
          <View style={styles.drawerToggleButton}>
          
           {isDrawerOpen ? (<Icon name='times' size={30} color="white" style={styles.closeButton} />) : (<Icon name='bars' size={30} color="white" />)}
           
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
    backgroundColor: Colors.primary,
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

export default Home;