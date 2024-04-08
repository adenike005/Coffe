import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import Colors from "../Navigation/Colors";
import SPACING from "../Navigation/SPACING";
import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const Checkout = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.black, paddingHorizontal: SPACING * 1.5, }}>
      <View
        style={{
          flexDirection: "row",
          // justifyContent: "space-between",
        //   padding: SPACING * 2,
          marginTop: "10%",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: Colors.grayblue,
            padding: SPACING,
            borderRadius: SPACING * 1.5,
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" color={Colors.light} size={SPACING * 2} />
        </TouchableOpacity>
        <View style={{ paddingHorizontal: "30%" }}>
          <Text
            style={{ color: Colors.white, fontWeight: "bold", fontSize: 20 }}
          >
            Payment
          </Text>
        </View>
      </View>
      <TouchableOpacity style={{ marginTop: "5%", padding: SPACING * 1, borderWidth:0.5, borderColor:Colors.orangebrown , borderRadius: SPACING * 2.5, }}>
        <Text
         style={{
          fontSize: SPACING * 2,
          color: Colors.bluish,
          fontWeight: "900",
          marginBottom: SPACING/2,
          fontFamily: "Medium",
          marginLeft: '5%'
        }}
        >Credit Card</Text>
        <ImageBackground
          source={require("../assets/Images/Card.png")}
          style={{
            height: height / 4 + SPACING,
            justifyContent: "space-between",
            // paddingHorizontal: SPACING,
            borderRadius: SPACING * 2.5,
            overflow: "hidden",
            paddingHorizontal: SPACING * 1.5,
            paddingBottom:"5%",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",

             paddingTop: '5%',
              alignItems: "center",
              
              
            }}
          >
            <Image
              source={require("../assets/Images/sim.png")}
              style={{ width: 30, height: 25, borderRadius: 5 }}
            />
            <Text
              style={{
                fontSize: SPACING * 2,
                color: Colors.white,
                fontWeight: "900",
                marginBottom: SPACING,
                fontFamily: "Medium",
              }}
            >
              VISA
            </Text>
          </View>
          <View style={{width:"100%", marginLeft:"3%" }}> 
          <Text
            style={{
              fontSize: SPACING * 4.2,
              color: Colors.white,
              fontWeight: "100",
              marginBottom: SPACING,
              fontFamily: "Light",
              width:"100%"
            //   textAlign:"center"
            }}
          >
            3897 8923 6745 4638
          </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
           <View>
           <Text 
             style={{
                fontSize: SPACING * 1.5,
                color: Colors.bluish,
                fontWeight: "100",
               
                fontFamily: "Medium",
              }}>Card Holder Name</Text>
              <Text 
             style={{
                fontSize: SPACING * 2.3,
                color: Colors.white,
                fontWeight: "500",
               
                fontFamily: "Medium",
              }}>Robert Evans</Text>
           </View>
           <View>
           <Text
              style={{
                fontSize: SPACING * 1.5 ,
                color: Colors.bluish,
                fontWeight: "100",
                
                fontFamily: "Medium",
              }}
            >
              Expiry Date
            </Text>
            <Text
              style={{
                fontSize: SPACING * 2,
                color: Colors.white,
                fontWeight: "500",
               
                fontFamily: "Medium",
                textAlign:'right'
              }}
            >
              02/30
            </Text>
           </View>
          </View>

          
        </ImageBackground>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Checkout;

const styles = StyleSheet.create({});
