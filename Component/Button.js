import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from "../Component/Colors"

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
  
    borderRadius: 5,
    height: 40,
    width: 130,
    marginTop:30,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
   
  },
});

export default Button;
