import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
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
      <View style={styles.container}>
        {/* Main Content */}
        <View style={styles.mainContent}>
        <Text>Main Content Goes Here</Text>
        <Text>Main Content Goes Here</Text>
        <Text>Main Content Goes Here</Text>
          <Text>Main Content Goes Here</Text>
        </View>

        {/* Drawer */}
        {isDrawerOpen && (
          <View style={styles.drawer}>
            <Text>Drawer Content Goes Here</Text>
            <Text>Drawer Content Goes Here</Text>
            <Text>Drawer Content Goes Here</Text>
            <Text>Drawer Content Goes Here</Text>
            <TouchableWithoutFeedback onPress={toggleDrawer}>
              <View style={styles.closeButton}>
                {/* <Icon name="close" size={30} color="black" /> */}
              </View>
            </TouchableWithoutFeedback>
          </View>
        )}

        {/* Drawer Toggle Button with Icon */}
        <TouchableWithoutFeedback onPress={toggleDrawer}>
          <View style={styles.drawerToggleButton}>
            {/* <Icon name={isDrawerOpen ? 'times' : 'bars'} size={30} color="black" /> */}
            {isDrawerOpen ? (<Icon name='times' size={30} color="black" style={styles.closeButton}/>) : (<Icon name='bars' size={30}/>)}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: '100%',
    backgroundColor: 'white',
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
    position: 'absolute',
    top: 0,
    left: 0,
    // right: 0,
  },
});

export default App;