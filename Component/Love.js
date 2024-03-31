// LoveScreen.js

import React from 'react';
import { View, Text } from 'react-native';
import { useLikedCoffees } from '../Components/LikedCoffeesContext';

const LoveScreen = () => {
  const { likedCoffees } = useLikedCoffees();

  return (
    <View>
      <Text>Liked Coffees:</Text>
      {likedCoffees.map(coffee => (
        <Text key={coffee.id}>{coffee.name}</Text>
      ))}
    </View>
  );
};

export default LoveScreen;








