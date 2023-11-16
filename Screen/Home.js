import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../Component/Colors';
import { BlurView } from 'expo-blur';
import Categories from '../Component/Categories';

const Begin = ({ navigation }) => {
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
      <View style={{ flex: 1 }}>
        {/* Main Content */}
        <View style={styles.mainContent}>
          <View style={{marginTop: "15%", marginHorizontal: "6%"}}>
            <Text style={{color:Colors.white, fontSize: 25, fontFamily:"Regular", letterSpacing:2, marginBottom:"5%"}}>It's a Great Day for Coffee</Text>
            <View style={{width: "100%", height: "25%", backgroundColor:Colors.gray, borderRadius: 10, display:"flex", flexDirection:"row",  alignItems:"center", paddingHorizontal:"5%", }}>
            <Icon name='search' size={18} color={Colors.white} />
            <TextInput
            placeholder='Find your coffee'
            placeholderTextColor={Colors.white}
            style={{
              marginHorizontal:"5%"
            }}
            color={Colors.white}/>
            </View>
            <Categories/>
          </View>
        </View>

        <View style={styles.notificationIcon}>
          <Icon name='bell' size={18} color={Colors.white} />
        </View>

        {/* Drawer */}
        {isDrawerOpen && (
          <BlurView intensity={80} style={styles.drawer}>
            <View style={{ padding: 20, position: 'relative' }}>
              <View style={{
                width: 150,
                height: 150,
                marginBottom: 30,
              }}>
                <Image source={require("../assets/Images/Black.png")}
                  style={{ width: "100%", height: "100%" }} />
              </View>

              <View style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}>
                <Icon name='home' size={18} color={Colors.white} />
                <Text style={{ fontSize: 13, textAlign: "center", marginHorizontal: 20, fontFamily: "Pacifico", color: Colors.white }}>Home</Text>
              </View>

              <View style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}>
                <Image source={require("../assets/Images/about.png")} style={{ width: 18, height: 18 }} />
                <Text style={{ fontSize: 13, textAlign: "center", marginHorizontal: 20, fontFamily: "Pacifico", color: Colors.white }}>About</Text>
              </View>
            </View>
          </BlurView>
        )}

        {/* Drawer Toggle Button with Icon */}
        <TouchableWithoutFeedback onPress={toggleDrawer}>
          <View style={styles.drawerToggleButton}>
            {isDrawerOpen ? (<Icon name='times' size={30} color="white" style={styles.closeButton} />) : (<Icon name='bars' size={18} color="white" />)}
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
    backgroundColor: Colors.dark,
  },
  drawer: {
    elevation: 80,
    position: 'absolute',
    top: 0,
    left: 0,
    width: "70%",
    height: '100%',
    // backgroundColor: Colors['dark-light'],
    backgroundColor: 'rgba(0, 0, 0, 0.8)',  
    padding: 20,
    zIndex: 20,
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
  notificationIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 3,
  },
});

export default Begin;

