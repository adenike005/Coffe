import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableHighlight,
  Image,
} from "react-native";
import React from "react";
import coffees from "../Navigation/coffees";
import Colors from "../Component/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import Icon from "react-native-vector-icons/FontAwesome";

const Coffee = ({navigation}) => {
  return (
   <>
      <FlatList
      showsVerticalScrollIndicator={false}
      numColumns={2}
      data={coffees}
      renderItem={({ item }) => (
        <TouchableHighlight
          underlayColor={Colors.white}
          activeOpacity={0.9}
          onPress={() => navigation.navigate("Description", { coffeeItem: item })}
          style={styles.cardTouchable}
          
        >
          <View style={styles.card}>
            <BlurView intensity={90} style={styles.card}>
              <View style={{ width: "100%", height: "50%" }}>
                <Image
                  source={item.image}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                />
              </View>
              <View style={{ marginHorizontal: 5 }}>
                <Text
                  style={{
                    color: Colors.white,
                    textAlign: "left",
                    fontSize: 18,
                    fontFamily: "Regular",
                    marginBottom: 5,
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: Colors.white,
                    textAlign: "left",
                    fontSize: 10,
                    fontFamily: "Regular",
                    marginBottom: 5,
                  }}
                >
                  {item.included}
                </Text>
              </View>
              <View
                style={{
                  marginHorizontal: 5,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: Colors.white,
                    fontWeight: "bold",
                  }}
                >
                  ${item.price}
                </Text>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30,
                    backgroundColor: Colors.primary,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon name="plus" size={15} color={Colors.white} 
                   onPress={() => navigation.navigate("Root", { coffeeItem: item })}
          />
                </View>
              </View>
            </BlurView>
          </View>
        </TouchableHighlight>
      )}
    />
   </>
  );
};

export default Coffee;

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 180,
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: Colors.dark,
    justifyContent: "center",
    elevation: 50,
  },
});
