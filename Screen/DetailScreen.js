import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";

import { Ionicons } from "@expo/vector-icons";
import Colors from "../Navigation/Colors";
import SPACING from "../Navigation/SPACING";
import { BlurView } from "expo-blur";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LikedCoffeesContext } from "../Components/LikedCoffeesContext";
import Buttom from "../Navigation/Buttom";
import { CartContext } from "../Component/CardContext";

const { height, width } = Dimensions.get("window");

const sizes = ["S", "M", "L"];

const DetailScreen = ({ route, navigation }) => {
  const { coffee } = route.params;

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const [liked, setLiked] = useState(false); // State to track if the coffee is liked

  const loadLikedStatus = async () => {
    try {
      const storedLiked = await AsyncStorage.getItem(
        `likedCoffee_${coffee.id}`
      );
      if (storedLiked !== null) {
        setLiked(JSON.parse(storedLiked));
      }
    } catch (error) {
      console.error("Error loading liked status:", error);
    }
  };


  const { addToCart } = useContext(CartContext); // Access addToCart function from CartContext

  const handleAddToCart = () => {
    addToCart(coffee); // Add coffee item to cart
  };

  //const [liked, setLiked] = useState(false); // State to track if the coffee is liked

  useEffect(() => {
    // Load liked status when the component mounts
    loadLikedStatus();
  }, []);

  // Function to handle heart icon press
  const handleHeartPress = async () => {
    const updatedLiked = !liked; // Toggle liked state
    setLiked(updatedLiked);

    // Save the updated liked status asynchronously for this specific coffee item
    try {
      await AsyncStorage.setItem(
        `likedCoffee_${coffee.id}`,
        JSON.stringify(updatedLiked)
      );
    } catch (error) {
      console.error("Error saving liked status:", error);
    }
  };

  // console.log('Liked status:', liked);

  // const { likedCoffees, addLikedCoffee, removeLikedCoffee } = useLikedCoffees();
  // const [liked, setLiked] = useState(false);

  // const handleLikeToggle = () => {
  //   if (liked) {
  //     removeLikedCoffee(coffee.id);
  //   } else {
  //     addLikedCoffee(coffee);
  //   }
  //   setLiked(!liked);
  // };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.black, }}>
      <ScrollView>
        <SafeAreaView>
          <ImageBackground
            source={coffee.image}
            style={{
              height: height / 2 + SPACING * 2,

              justifyContent: "space-between",
            }}
            // imageStyle={{
            //   borderRadius: SPACING * 3,
            // }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: SPACING * 2,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.dark,
                  padding: SPACING,
                  borderRadius: SPACING * 1.5,
                }}
                onPress={() => navigation.goBack()}
              >
                <Ionicons
                  name="arrow-back"
                  color={Colors.light}
                  size={SPACING * 2}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.dark,
                  padding: SPACING,
                  borderRadius: SPACING * 1.5,
                }}
                onPress={handleHeartPress}
              >
                <Ionicons
                  name="heart"
                  // color={Colors.light}
                  color={liked ? Colors.light : Colors.orangebrown}
                  size={SPACING * 2}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                // borderRadius: SPACING * 3,
                overflow: "hidden",
              }}
            >
              <BlurView
                intensity={80}
                tint="dark"
                style={{
                  padding: SPACING * 2,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: SPACING * 2,
                      color: Colors.white,
                      fontWeight: "900",
                      marginBottom: SPACING,
                      fontFamily: "Medium",
                    }}
                  >
                    {coffee.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: SPACING * 1.8,
                      color: Colors["white-smoke"],
                      fontWeight: "300",
                      marginBottom: SPACING,
                      fontFamily: "Light",
                    }}
                  >
                    {coffee.included}
                  </Text>
                  <View style={{ flexDirection: "row", marginTop: SPACING }}>
                    <Ionicons
                      name="star"
                      size={SPACING * 1.5}
                      color={Colors.primary}
                    />
                    <Text
                      style={{
                        color: Colors.white,
                        marginLeft: SPACING,
                      }}
                    >
                      {coffee.rating}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "35%",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        padding: SPACING / 2,
                        width: SPACING * 5,
                        height: SPACING * 5,
                        backgroundColor: Colors.dark,
                        borderRadius: SPACING,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Ionicons
                        name="cafe"
                        size={SPACING * 2}
                        color={Colors.primary}
                      />
                      <Text
                        style={{
                          color: Colors["white-smoke"],
                          fontSize: SPACING,
                        }}
                      >
                        Coffee
                      </Text>
                    </View>
                    <View
                      style={{
                        padding: SPACING / 2,
                        width: SPACING * 5,
                        height: SPACING * 5,
                        backgroundColor: Colors.dark,
                        borderRadius: SPACING,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Ionicons
                        name="water"
                        size={SPACING * 2}
                        color={Colors.primary}
                      />
                      <Text
                        style={{
                          color: Colors["white-smoke"],
                          fontSize: SPACING,
                        }}
                      >
                        Milk
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      backgroundColor: Colors.dark,
                      padding: SPACING / 2,
                      borderRadius: SPACING / 2,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: Colors["white-smoke"],
                        fontSize: SPACING * 1.3,
                      }}
                    >
                      Medium roasted
                    </Text>
                  </View>
                </View>
              </BlurView>
            </View>
          </ImageBackground>

          <SafeAreaView
            style={{ paddingHorizontal: SPACING * 1.5, marginTop: SPACING }}
          >
            <View style={{ width: "100%", height: "100%" }}>
              <View
                style={{
                  marginBottom: "3%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: Colors.orangebrown,
                    padding: SPACING * 1.5,
                    borderRadius: 10,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        color: Colors.white,
                        fontSize: SPACING * 2,
                        marginRight: "5%",
                      }}
                      onPress={increment}
                    >
                      +
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: Colors.white,
                        fontSize: SPACING * 2,
                        marginRight: "5%",
                      }}
                    >
                      {count}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: Colors.white,
                        fontSize: SPACING * 2,
                        marginRight: "5%",
                      }}
                      onPress={decrement}
                    >
                      -
                    </Text>
                  </View>
                </TouchableOpacity>
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: SPACING * 2,
                    fontWeight: "900",
                    fontFamily: "Medium",
                    letterSpacing: 2,
                    lineHeight: SPACING * 3,
                  }}
                >
                  {" "}
                  ${coffee.price}
                </Text>
              </View>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: SPACING * 2,
                  fontWeight: "400",
                  fontFamily: "Regular",
                  letterSpacing: 2,
                  lineHeight: SPACING * 3,
                }}
              >
                {" "}
                {coffee.description}
              </Text>

              <View style={{ marginTop: "10%" }}>
                <Buttom title='Add to cart' onPress={handleAddToCart}/>
              </View>
            </View>
          </SafeAreaView>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
