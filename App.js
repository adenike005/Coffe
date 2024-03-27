import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './Screen/Login';
import Onboading from './Screen/Onboading';
import Registration from './Screen/Registration';
import Welcome from './Screen/Welcome';


const Stack = createStackNavigator();
const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Onboarding' component={Onboading}/>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Registration' component={Registration}/>
      <Stack.Screen name='Welcome' component={Welcome}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})