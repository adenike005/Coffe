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
  import React, { useState, useEffect , useContext} from "react";
  
  import { Ionicons } from "@expo/vector-icons";
import Colors from "../Navigation/Colors";
import SPACING from "../Navigation/SPACING";
import { BlurView } from "expo-blur";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLikedCoffees } from "../Components/LikedCoffeesContext";
  
  const { height, width } = Dimensions.get("window");
  
  const sizes = ["S", "M", "L"];

const DetailScreen = ({ route, navigation }) => {
    const { coffee } = route.params;

    
    // const [liked, setLiked] = useState(false); // State to track if the coffee is liked

    // const loadLikedStatus = async () => {
    //     try {
    //         const storedLiked = await AsyncStorage.getItem(`likedCoffee_${coffee.id}`);
    //         if (storedLiked !== null) {
    //             setLiked(JSON.parse(storedLiked));
    //         }
    //     } catch (error) {
    //         console.error('Error loading liked status:', error);
    //     }
    // };

    // //const [liked, setLiked] = useState(false); // State to track if the coffee is liked

    // useEffect(() => {
    //     // Load liked status when the component mounts
    //     loadLikedStatus();
    // }, []);

    // // Function to handle heart icon press
    // const handleHeartPress = async () => {
    //     const updatedLiked = !liked; // Toggle liked state
    //     setLiked(updatedLiked);

    //     // Save the updated liked status asynchronously for this specific coffee item
    //     try {
    //         await AsyncStorage.setItem(`likedCoffee_${coffee.id}`, JSON.stringify(updatedLiked));
    //     } catch (error) {
    //         console.error('Error saving liked status:', error);
    //     }

    //     if (updatedLiked) {
    //       navigation.navigate('Love', { likedCoffee: coffee });
    //   }
    // };


    // console.log('Liked status:', liked); 



    const { likedCoffees, addLikedCoffee, removeLikedCoffee } = useLikedCoffees();
    const [liked, setLiked] = useState(false);
  
    const handleLikeToggle = () => {
      if (liked) {
        removeLikedCoffee(coffee.id);
      } else {
        addLikedCoffee(coffee);
      }
      setLiked(!liked);
    };
    
  
  return (
    <>
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
                //   color={Colors.light}
                color={liked ? Colors.light : Colors.orangebrown}
                  size={SPACING * 2}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                borderRadius: SPACING * 3,
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
                      fontFamily:"Medium",
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
                      fontFamily:"Light"
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
          {/* <View
            style={{
              padding: SPACING,
              backgroundColor:Colors.black
            }}
          >
            <Text
              style={{
                color: Colors["white-smoke"],
                fontSize: SPACING * 1.7,
                marginBottom: SPACING,
              }}
            >
              Description
            </Text>
            <Text numberOfLines={4} style={{ color: Colors.white, fontSize:SPACING * 1.5 }}>
              {coffee.description}
            </Text>
            <View
              style={{
                marginVertical: SPACING * 2,
              }}
            >
              <Text
                style={{
                  color: Colors["white-smoke"],
                  fontSize: SPACING * 1.7,
                  marginBottom: SPACING,
                }}
              >
                Size
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {sizes.map((size, index) => (
                  <TouchableOpacity
                    onPress={() => setActiveSize(size)}
                    key={index}
                    style={[
                      {
                        borderWidth: 2,
                        paddingVertical: SPACING / 2,
                        borderRadius: SPACING,
                        backgroundColor: Colors["dark-light"],
                        width: width / 3 - SPACING * 2,
                        alignItems: "center",
                      },
                      activeSize == size && {
                        borderColor: Colors.primary,
                        backgroundColor: Colors.dark,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        {
                          color: Colors["white-smoke"],
                          fontSize: SPACING * 1.9,
                        },
                        activeSize === size && {
                          color: Colors.primary,
                        },
                      ]}
                    >
                      {size}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View> */}
        </SafeAreaView>
      </ScrollView>
      
    </>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})