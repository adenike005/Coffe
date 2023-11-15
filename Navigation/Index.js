import {NavigationContainer, DefaultTheme} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../Component/Colors'
import Welcome from "../Screen/Welcome";
import Home from "../Screen/Home";
import tabs from "../Component/tabs"

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
          <Stack.Screen name='Home' component={tabs} 
          />
         </Stack.Navigator>
        </NavigationContainer>
        );

}

export default Index;










