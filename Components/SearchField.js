import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import SPACING from "../Navigation/SPACING";
import Colors from "../Navigation/Colors";

import { Ionicons } from "@expo/vector-icons";

const SearchField = () => {
    const text = 'Find Your Coffee...'
  return (
    <View
      style={{
        borderRadius: SPACING,
        overflow: "hidden",
      }}
    >
      <BlurView
        intensity={30}
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          style={{
            width: "100%",
            color: Colors.white,
            fontSize: SPACING * 1.7,
            padding: SPACING,
            paddingLeft: SPACING * 3.5,
          }}
          placeholder={text}
          placeholderTextColor={Colors.light}
        />
        <Ionicons
          style={{
            position: "absolute",
            left: SPACING,
          }}
          name="search"
          color={Colors.light}
          size={SPACING * 2}
        />
      </BlurView>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({});