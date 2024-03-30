import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import Colors from '../Navigation/Colors';
import Images from '../Navigation/Image';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.blurContainer}>
          <BlurView intensity={50} style={styles.blurView}>
            <MaterialCommunityIcons name='dots-grid' size={20} color={Colors.orangebrown} />
          </BlurView>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={Images.person} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Colors.black,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '8%',
    marginTop: '10%',
  },
  blurContainer: {
    width: 30,
    height: 30,
    borderRadius: 5, // Adjust borderRadius as needed
    overflow: 'hidden',
  },
  blurView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 30,
    height: 30,
    borderRadius: 5, // Adjust borderRadius as needed
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10, // Adjust borderRadius as needed
  },
});

export default Navbar;