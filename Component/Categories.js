import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  
  import categories from "../Navigation/Categorie";
  import Colors from "./Colors";

  
  const Categories = ({onChange }) => {
    const [activeCategoryId, setActiveCategoryId] = useState(null);
  
    const handlePress = (id) => {
      setActiveCategoryId(id);
    //   onChange(id);
    };
  
    return (
      <FlatList
        horizontal={true}
        data={categories}
        
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ marginVertical: 10}}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handlePress(item.id)}
            style={{ marginRight: 30, alignItems: "center" }}
          >
            <Text
              style={[
                { color: Colors.secondary,  },
                activeCategoryId === item.id && { color: Colors.primary },
              ]}
            >
              {item.name}
            </Text>
            {activeCategoryId === item.id && (
              <View
                style={{
                    height: 1,
                    width: '100%',
                  backgroundColor: Colors.primary,
                  marginTop: 5,
                 
                }}
              />
            )}
          </TouchableOpacity>
        )}
      />
    );
  };
  
  export default Categories;
  
  const styles = StyleSheet.create({});
