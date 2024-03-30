import { StyleSheet, Text, View, PixelRatio } from 'react-native'
import React from 'react'
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;
import Colors from '../Navigation/Colors';
const Texts = () => {
    const text = 'Find the best coffee for you'
  return (
    <View style={{ paddingHorizontal:"8%", width: '75%', marginTop:"3%"}}>
      <Text style={{color:Colors.white, fontSize:getFontSize(25), fontWeight:900, fontFamily:"Regular"}}>{text}</Text>
    </View>
  )
}

export default Texts

const styles = StyleSheet.create({})