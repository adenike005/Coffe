import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image, TextInput, Dimensions, FlatList, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../Component/Colors';
import { BlurView } from 'expo-blur';
import Categories from '../Component/Categories';
import coffees from '../Navigation/coffees';
import Coffee from '../Component/Coffee';

const { width } = Dimensions.get('window');

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
    <TouchableWithoutFeedback onPress={closeDrawer} style={styles.container}>
      <View style={{ flex: 1 }}>
        {/* Main Content */}
        <View style={styles.mainContent}>
          <View style={{ marginTop: '15%', marginHorizontal: '6%' }}>
            <Text style={styles.headingText}>It's a Great Day for Coffee</Text>
            <View style={styles.searchContainer}>
              <Icon name='search' size={18} color={Colors.white} />
              <TextInput
                placeholder='Find your coffee'
                placeholderTextColor={Colors.white}
                style={styles.searchInput}
                color={Colors.white}
              />
            </View>
            <View>
            <Categories />
            </View>
          </View>
          <Coffee/>
          
        </View>

        <View style={styles.notificationIcon}>
          <Icon name='bell' size={18} color={Colors.white} />
        </View>

        {/* Drawer */}
        {isDrawerOpen && (
          <BlurView intensity={80} style={styles.drawer}>
            <View style={styles.drawerContent}>
              <Image source={require('../assets/Images/Black.png')} style={styles.drawerImage} />
              {drawerMenuItem('home', 'Home')}
              {drawerMenuItem('about', 'About')}
            </View>
          </BlurView>
        )}

        {/* Drawer Toggle Button with Icon */}
        <TouchableWithoutFeedback onPress={toggleDrawer}>
          <View style={styles.drawerToggleButton}>
            {isDrawerOpen ? <Icon name='times' size={30} color='white' style={styles.closeButton} /> : <Icon name='bars' size={18} color='white' />}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

const drawerMenuItem = (iconName, text) => (
  <View style={styles.drawerMenuItem}>
    <Icon name={iconName} size={18} color={Colors.white} />
    <Text style={styles.drawerItemText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  headingText: {
    color: Colors.white,
    fontSize: 25,
    fontFamily: 'Regular',
    letterSpacing: 2,
    marginBottom: '5%',
  },
  searchContainer: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.gray,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  searchInput: {
    marginHorizontal: '5%',
    color: Colors.white,
    flex: 1, // Fill the remaining space
  },
  cardTouchable: {
    marginBottom: 20,
    borderRadius: 15,
    elevation: 13,
  },
  card: {
    width: width / 2 - 20,
    height: 220,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: Colors.white,
    overflow: 'hidden',
    alignItems: 'center',
  },
  cardImage: {
    height: '80%',
    width: '100%',
    resizeMode: 'cover',
  },
  cardTitle: {
    color: Colors.primary,
    fontSize: 16,
    marginTop: 10,
  },
  notificationIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 3,
  },
  drawer: {
    elevation: 80,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '70%',
    height: '100%',
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
    display: 'none',
  },
  drawerContent: {
    padding: 20,
    position: 'relative',
    alignItems: 'center',
  },
  drawerImage: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  drawerMenuItem: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  drawerItemText: {
    fontSize: 13,
    textAlign: 'center',
    marginHorizontal: 20,
    fontFamily: 'Pacifico',
    color: Colors.white,
  },
});

export default Begin;



