import { StyleSheet, Text, View, TouchableOpacity, PixelRatio } from 'react-native'
import React from 'react'
import Colors from '../Navigation/Colors'
import { FontAwesome } from '@expo/vector-icons';
import Buttom from '../Navigation/Buttom'


const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const Onboarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome name="angle-left" size={24} color={Colors.white}/>
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to Coffee Shop</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>Please login to your account or create a new account to continue</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Buttom
          onPress={() => navigation.navigate("Login")}
          title="Login"
          buttonStyle={{ borderRadius: 5 }} // Custom button style
          textStyle={{ fontSize: 20 }} // Custom text style
          backgroundColor={Colors.orangebrown} />
          <Buttom
          onPress={() => navigation.navigate("Registration")}
          title="Register"
          buttonStyle={{ borderRadius: 5 }} // Custom button style
          textStyle={{ fontSize: 20 }} // Custom text style
          backgroundColor={Colors.black} // Custom background color
          borderWidth={1} // Custom border width
          borderColor={Colors.orangebrown}  />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: '10%',
    
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  contentContainer: {
    flex: 1,
    
    width: '100%',
    paddingBottom: 20,
    marginTop: '15%' 
  },
  title: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: getFontSize(28),
    fontFamily: 'Pacifico',
  },
  descriptionContainer: {
    marginTop: "5%",
    width: '100%',
    alignItems: 'center',
  },
  description: {
    color: Colors.white,
    fontSize: getFontSize(12),
    textAlign: 'center',
    width: '70%',
    fontFamily: 'Regular',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20, // Adjust this value as needed
    width: '100%',
    alignItems: 'center',
  },
});

export default Onboarding;



