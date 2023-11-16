import {NavigationContainer, DefaultTheme} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../Component/Colors'
import Welcome from "../Screen/Welcome";
import Home from "../Screen/Home";
import tabs from "../Component/tabs"
import Description from "../Screen/Description";

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
          <Stack.Screen name='Root' component={tabs} 
          />
          <Stack.Screen name='Description' component={Description} 
          />
         </Stack.Navigator>
        </NavigationContainer>
        );

}

export default Index;










