import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, StyleSheet } from 'react-native'; // Import StatusBar from react-native
import Login from './Screen/Login';
import Onboading from './Screen/Onboading';
import Registration from './Screen/Registration';
import Welcome from './Screen/Welcome';
import { useFonts } from 'expo-font';
import Colors from './Navigation/Colors';
import Home from './Screen/Home';

const Stack = createStackNavigator();

const App = () => {

  const [loaded] = useFonts({
    // Montserrat: require('./assets/fonts/Yatra-One.ttf'),
    Pacifico: require('./Fonts/Pacifico-Regular.ttf'),
    Light: require("./Fonts/Barlow-Light.ttf"),
    Regular: require("./Fonts/Barlow-Regular.ttf"),

   

  });
  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.black} barStyle="light-content" />
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='Onboarding' component={Onboading}/> 
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Registration' component={Registration}/>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({});
