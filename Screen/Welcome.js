// import { StyleSheet, Text, View, ImageBackground,  } from 'react-native';
// import React from 'react';
// import image from '../Navigation/Image';
// import { LinearGradient } from 'expo-linear-gradient';


// const Welcome = () => {
//   return (
//     <ImageBackground source={image.welcome} style={styles.imageBackground}>
//       <LinearGradient
    

//         colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} // Adjust the opacity as needed
//         style={styles.overlay}
//       />
//     </ImageBackground>
//   );
// };

// export default Welcome;

// const styles = StyleSheet.create({
//   imageBackground: {
//     flex: 1,
//     justifyContent:"center",
//     alignItems:"center"
//   },
//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });

import React, { useRef, useState } from 'react';
import { SafeAreaView, Image, StyleSheet, FlatList, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Buttom from '../Navigation/Buttom'
import Colors from '../Navigation/Colors';

const { width, height } = Dimensions.get('window');

const COLORS = { primary: '#282534', white: '#fff' };

const slides = [
  {
    id: '1',
    image: require('../assets/Images/bg.png'),
    title: 'Coffe Shop',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    image: require('../assets/Images/c1.jpg'),
    title: 'Best Coffee in Town',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '3',
    image: require('../assets/Images/c2.jpg'),
    title: 'The best part of morning',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: 'center', position: 'relative', flex: 1 ,}}>
      <Image
        source={item?.image}
        style={{ height: '100%', width, resizeMode: 'cover' }}
      />
      <View style={styles.overlay}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </View>
  );
};

const Dot = ({ active }) => {
  return (
    <View
      style={[
        styles.dot,
        { backgroundColor: active ? COLORS.white : 'rgba(255, 255, 255, 0.3)' },
      ]}
    />
  );
};

const OnboardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleMomentumScrollEnd = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(index);
  };

  const handleStartButtonPress = () => {
    navigation.navigate('Onboarding')
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <FlatList
        contentContainerStyle={{ height: '100%' }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
        onMomentumScrollEnd={handleMomentumScrollEnd}
      />
      {currentSlideIndex < 2 && (
        <View style={styles.dotContainer}>
          <Dot key={0} active={currentSlideIndex === 0} />
          <Dot key={1} active={currentSlideIndex === 1} />
        </View>
      )}
      {currentSlideIndex === slides.length - 1 && (
        <TouchableOpacity style={styles.startButton} onPress={handleStartButtonPress}>
          <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
       
        
      
      )}
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  dotContainer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'transparent',
  },
  dot: {
    width: 50,
    height: 2,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Pacifico',
    fontWeight: 'normal',
    letterSpacing: 1,
    textAlign: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    width: '100%',
  },
  startButton: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: Colors.orangebrown,
    width:"80%",
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  startButtonText: {
    color: COLORS.white,
    fontSize: 20,
    textAlign:"center",
  },
});

export default OnboardingScreen;







