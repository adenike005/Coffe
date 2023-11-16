// import { View, Text , ImageBackground} from 'react-native'
// import React from 'react'
// import { BlurView } from 'expo-blur'


// const Welcome = () => {
//   return (
 
//      <ImageBackground 
//     source={require("../assets/Images/bg.png")}
//     style={{
//         flex:1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         // opacity:0.8,
    
//     }}>

//     </ImageBackground>

//   )
// }

// export default Welcome

import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Button from '../Component/Button';
// import {PrimaryButton} from "../Component/Button"

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Images/bg.png")}
        style={styles.backgroundImage}
      >
       
        <View style={styles.overlay}>
          <Text style={styles.text}>Coffe Shop</Text>
         <View style={styles.bottomTextContainer}>
         <Text style={{color:"white", fontSize:10, fontWeight: 300, letterSpacing: 3}}>Feeling love? Take a slip of Coffe</Text>
        <Button title="Get Started" onPress={() => navigation.navigate("Root")} />
         </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    // justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontFamily:"Pacifico",
    marginTop: "10%",
    fontWeight:"normal",
    letterSpacing: 1,

  },
  bottomTextContainer: {
    position: 'absolute',
    top:"80%",
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});

export default Welcome;
