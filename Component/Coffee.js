import { StyleSheet, Text, View, ScrollView , FlatList , TouchableHighlight, Image} from 'react-native'
import React from 'react'
import coffees from '../Navigation/coffees';
import Colors from '../Component/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';


const Coffee = () => {
  return (
  
      <FlatList
              showsVerticalScrollIndicator={false}
              numColumns={2}
              data={coffees}
              renderItem={({ item }) => (
                <TouchableHighlight
                  underlayColor={Colors.white}
                  activeOpacity={0.9}
                  style={styles.cardTouchable}
                  
                >
                  <View style={styles.card}>
                  <BlurView intensity={90}  style={styles.card}>
                    
                  {/* <View style={{width: 100, height:100, borderRadius: 50,}}>
                    <Image source={item.image} style={{width: "100%", height:"100%",}}  />
                    </View>
                   <View style={{height: 75,}}>
                   <Text style={{color:Colors.white, textAlign:"left"}}>{item.name}</Text>
                   </View> */}
                  </BlurView>
                    
                  
                  </View>
                </TouchableHighlight>
              )}
            />
   
  )
}

export default Coffee

const styles = StyleSheet.create({
    card: {
        width: 160,
        height: 180,
        marginHorizontal: 10,
        marginBottom: 20,
        borderRadius: 15,
        backgroundColor: Colors.dark,
        justifyContent:"center",
        elevation: 50, 
       
       
      },
   
})