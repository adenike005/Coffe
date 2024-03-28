import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from './Colors';

const CustomButton = ({ onPress, title, buttonStyle, textStyle, backgroundColor, borderWidth, borderColor }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: backgroundColor || Colors.orangebrown },
        buttonStyle,
        borderWidth && { borderWidth: borderWidth },
        borderColor && { borderColor: borderColor }
      ]}
      onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: '5%',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: '3%'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CustomButton;

