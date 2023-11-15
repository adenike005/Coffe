// import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

import Colors from './Component/Colors'
import Index from './Navigation/Index';


export default function App() {
   const [loaded] = useFonts({
        // Montserrat: require('./assets/fonts/Yatra-One.ttf'),
        Pacifico: require('./assets/Fonts/Pacifico-Regular.ttf'),
        Light: require("./assets/Fonts/Barlow-Light.ttf"),
        Regular: require("./assets/Fonts/Barlow-Regular.ttf"),

       
    
      });
      if (!loaded) {
        return null;
      }
 

  return(

  <View  style={{backgroundColor:"orange", flex:1}}>
    <StatusBar barStyle="light-content"/>
    <Index />
  </View>
  )
}

const styles = StyleSheet.create({
 
});



