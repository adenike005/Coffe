import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, PixelRatio, Linking } from 'react-native';
import { firebase } from '../Config'; // Replace with your Config path
import Colors from '../Navigation/Colors';
import Buttom from '../Navigation/Buttom'

import { FontAwesome } from '@expo/vector-icons';

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // To display errors

  const handleLogin = async () => {
    try {
      // Sign in the user
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('User logged in successfully');

      // Redirect the user to the desired screen after successful login
      // For example, navigate to the Home screen
      navigation.navigate('Home');
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message); // Display appropriate error message
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome name="angle-left" size={24} color={Colors.white}/>
      </TouchableOpacity>
      <Text style={styles.title}>Login</Text>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Text style={{ color: Colors.white, fontSize: getFontSize(15) }}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Email"
        value={email}
        onChangeText={setEmail}
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
          onPress={handleLogin}
          title="Login"
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
});

export default Login;
