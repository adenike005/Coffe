// import React, { createContext, useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const LikedCoffeesContext = createContext();

// const initialState = [];

// const LikedCoffeesProvider = ({ children }) => {
//   const [likedCoffees, setLikedCoffees] = useState(initialState);

//   useEffect(() => {
//     const loadLikedCoffees = async () => {
//       try {
//         const storedLikedCoffees = await AsyncStorage.getItem('likedCoffees');
//         if (storedLikedCoffees !== null) {
//           setLikedCoffees(JSON.parse(storedLikedCoffees));
//         }
//       } catch (error) {
//         console.error('Error loading liked coffees:', error);
//       }
//     };

//     loadLikedCoffees();
//   }, []);

//   const addLikedCoffee = (coffee) => {
//     setLikedCoffees([...likedCoffees, coffee]);
//     storeLikedCoffees([...likedCoffees, coffee]);
//   };

//   const removeLikedCoffee = (coffeeId) => {
//     const filteredCoffees = likedCoffees.filter((coffee) => coffee.id !== coffeeId);
//     setLikedCoffees(filteredCoffees);
//     storeLikedCoffees(filteredCoffees);
//   };

//   const storeLikedCoffees = async (coffees) => {
//     try {
//       await AsyncStorage.setItem('likedCoffees', JSON.stringify(coffees));
//     } catch (error) {
//       console.error('Error saving liked coffees:', error);
//     }
//   };

//   return (
//     <LikedCoffeesContext.Provider
//       value={{ likedCoffees, addLikedCoffee, removeLikedCoffee }}
//     >
//       {children}
//     </LikedCoffeesContext.Provider>
//   );
// };

// export { LikedCoffeesContext, LikedCoffeesProvider };


// LikedCoffeesContext.js

// LikedCoffeesContext.js

import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LikedCoffeesContext = createContext();

const initialState = [];

const LikedCoffeesProvider = ({ children }) => {
  const [likedCoffees, setLikedCoffees] = useState(initialState);

  useEffect(() => {
    const loadLikedCoffees = async () => {
      try {
        const storedLikedCoffees = await AsyncStorage.getItem('likedCoffees');
        if (storedLikedCoffees !== null) {
          setLikedCoffees(JSON.parse(storedLikedCoffees));
        }
      } catch (error) {
        console.error('Error loading liked coffees:', error);
      }
    };

    loadLikedCoffees();
  }, []);

  const addLikedCoffee = (coffee) => {
    setLikedCoffees([...likedCoffees, coffee]);
    storeLikedCoffees([...likedCoffees, coffee]);
  };

  const removeLikedCoffee = (coffeeId) => {
    const filteredCoffees = likedCoffees.filter((coffee) => coffee.id !== coffeeId);
    setLikedCoffees(filteredCoffees);
    storeLikedCoffees(filteredCoffees);
  };

  const storeLikedCoffees = async (coffees) => {
    try {
      await AsyncStorage.setItem('likedCoffees', JSON.stringify(coffees));
    } catch (error) {
      console.error('Error saving liked coffees:', error);
    }
  };

  return (
    <LikedCoffeesContext.Provider
      value={{ likedCoffees, addLikedCoffee, removeLikedCoffee }}
    >
      {children}
    </LikedCoffeesContext.Provider>
  );
};

export { LikedCoffeesContext, LikedCoffeesProvider };



