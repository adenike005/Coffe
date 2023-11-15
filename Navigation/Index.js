import {NavigationContainer, DefaultTheme} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screen/HomeScreen';
import Colors from '../Component/Colors'
import Welcome from "../Screen/Welcome";

const Stack = createStackNavigator();

const Index = () =>{
    return (
        <NavigationContainer style={{backgroundColor:Colors.dark, flex
          :1}}>
         <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}>
              <Stack.Screen name='Welcome' component={Welcome} 
          />
          <Stack.Screen name='HomeScreen' component={HomeScreen} 
          />
         </Stack.Navigator>
        </NavigationContainer>
        );

}

export default Index;










