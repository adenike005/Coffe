import { StyleSheet, Text, View, ScrollView  } from 'react-native'
import React from 'react'
import Colors from '../Navigation/Colors';
import Navbar from '../Context/Navbar';
import Texts from '../Context/Texts';
import Search from '../Context/Search';
import CoffeeCategories from '../Context/Categorie';
import Contest from '../Context/Contest';

const Home = () => {
  return (
    <View style={{flex:1, backgroundColor:Colors.black}}>
      <View >
      <Navbar/>
      </View>
      <View >
        <Texts/>
      </View>
      <View>
        <Search/>
      </View>
      <View >
        <CoffeeCategories/>
      </View>
      <ScrollView >
        <Contest/>
      </ScrollView >
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})





