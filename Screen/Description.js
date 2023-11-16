import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import Colors from "../Component/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const Description = ({ navigation, route }) => {
  const item = route.params;
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <SafeAreaView style={{ backgroundColor: Colors.dark, flex: 1 }}>
      <View style={styles.header}>
        <Icon
          name="arrow-back-ios"
          size={25}
          onPress={navigation.goBack}
          style={{ marginVertical: 20 }}
          color={Colors.white}
        />
      </View>

      <View
        style={{
          width: "100%",
          height: "35%",
        }}
      >
        <Image
          source={item.image}
          style={{ height: "100%", width: "100%", resizeMode: "contain" }}
        />
      </View>

      <View
        style={{
          marginTop: "5%",
          marginHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 13, color: Colors.gray, marginBottom: 5 }}>
          {item.included}
        </Text>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: Colors.white }}>
          {item.name}
        </Text>
      </View>

      <View
        style={{
          marginTop: "5%",
          marginHorizontal: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >

        <View
        style={{
            width: 130,
            height: 40,
            borderRadius: 20,
            backgroundColor: Colors.gray,
            justifyContent: "center",
            // alignItems: "center",

        }}>
            <TouchableOpacity
            style={{display: "flex", justifyContent: "space-between", flexDirection: "row",padding:10}}>
                <Icon name="add" size={18} color={Colors.white} onPress={increment}/>
                <Text style={{color:Colors.white}}>{count}</Text>
                <Icon name="remove" size={18} color={Colors.white} onPress={decrement}/>
            </TouchableOpacity>
        </View>
        
        <Text style={{ fontSize: 16,  color: Colors.white }}>
          ${item.price}
        </Text>
      </View>

     <View
     style={{marginHorizontal: 20, marginTop: "5%"}}>
     <Text style={{color:Colors.white, lineHeight: 24, letterSpacing: 1}}>{item.description}</Text>
     </View>
    </SafeAreaView>
  );
};

export default Description;

const styles = StyleSheet.create({
  header: {
    // paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
});

