import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import categoriesData from "../Navigation/Categories";
import Colors from "../Navigation/Colors";
import SPACING from "../Navigation/SPACING";

const Categoriess = ({ onChange }) => {
  const [activeCategoryId, setActiveCategoryId] = useState(categoriesData[0].id);

  const handlePress = (id) => {
    setActiveCategoryId(id);
    onChange(id);
  };

  return (
    <FlatList
      horizontal={true}
      data={categoriesData}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ marginVertical: SPACING, paddingHorizontal: "5%" }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handlePress(item.id)}
          style={{ marginRight: SPACING * 2, alignItems: "center" }}
        >
          <Text
            style={[
              { color: Colors.secondary, fontSize: SPACING * 2 },
              activeCategoryId === item.id && { color: Colors.primary },
            ]}
          >
            {item.name}
          </Text>
          {activeCategoryId === item.id && (
            <View
              style={{
                height: SPACING,
                width: SPACING,
                backgroundColor: Colors.primary,
                borderRadius: SPACING / 2,
                marginTop: SPACING / 2,
              }}
            />
          )}
        </TouchableOpacity>
      )}
    />
  );
};

export default Categoriess;

const styles = StyleSheet.create({});
