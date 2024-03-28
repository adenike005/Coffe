// import { StyleSheet, Text, View, TouchableOpacity,PixelRatio } from 'react-native'
// import React from 'react'
// import Colors from '../Navigation/Colors'
// import { FontAwesome } from '@expo/vector-icons';

// const fontScale = PixelRatio.getFontScale();
// const getFontSize = (size) => size / fontScale;

// const Registration = ({navigation}) => {
//   return (
//     <View style={{flex:1, backgroundColor:Colors.black, paddingHorizontal: '5%',}}>
//        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//         <FontAwesome name="angle-left" size={24} color={Colors.white}/>

//       </TouchableOpacity>
//         <View>
//           <Text style={{color:Colors.white, fontFamily:"Regular", fontSize:getFontSize(25), fontWeight:"500", marginTop:"10%"}}>Login</Text>

//           <View>
//             <Text>Username</Text>
//           </View>
//         </View>
//     </View>
//   )
// }

// export default Registration

// const styles = StyleSheet.create({
//   backButton: {
//     position: 'absolute',
//     top: 10,
//     left: 10,
//   },
// })

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, PixelRatio, Linking } from 'react-native';
import { firebase } from '../Config'; // Replace with your Config path
import Colors from '../Navigation/Colors';
import Buttom from '../Navigation/Buttom'

import { FontAwesome } from '@expo/vector-icons';

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const Registration = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Username, setUsername] = useState('');
  const [error, setError] = useState(null); // To display errors

  const handleRegister = async () => {
    try {
      // Register the user
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log('User registered successfully:', response.user);
  
      // Display registration success message
      alert('Registration successful! Please check your email to complete the process.');
  
      // Redirect the user to the login page after successful registration
      navigation.navigate('Login');
  
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.message); // Display appropriate error message
    }
  };
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome name="angle-left" size={24} color={Colors.white}/>
      </TouchableOpacity>
      <Text style={styles.title}>Register</Text>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Text style={{ color: Colors.white, fontSize: getFontSize(15) }}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor={Colors.bluish}
      />
      <Text style={{ color: Colors.white, fontSize: getFontSize(15) }}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Username"
        value={Username}
        onChangeText={setUsername}
        placeholderTextColor={Colors.bluish}
      />
      <Text style={{ color: Colors.white, fontSize: getFontSize(15) }}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor={Colors.bluish}
      />
        <Buttom
          onPress={handleRegister}
          title="Register"
          buttonStyle={{ borderRadius: 5 }} // Custom button style
          textStyle={{ fontSize: 20 }} // Custom text style
          backgroundColor={Colors.orangebrown} // Custom background color
          // Custom border width
          />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "5%",
    backgroundColor: Colors.black,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: '15%',
    color: Colors.white,
    fontSize: getFontSize(25),
    fontWeight: "bold",
    fontFamily: "Regular"
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: '5%',
    width: '100%',
    marginTop: "5%",
    color: Colors.white,
    borderRadius: 5,
   
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  button: {
    width: '100%',
    backgroundColor: Colors.orangebrown,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Registration;


// test-c4e73.firebaseapp.com