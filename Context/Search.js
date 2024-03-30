import { StyleSheet, TextInput, View, Platform } from 'react-native';
import React, { useState } from 'react';
import Colors from '../Navigation/Colors';
import { Ionicons } from '@expo/vector-icons';

const Search = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={{ marginHorizontal: '8%', marginTop: '5%' }}>
      <View style={styles.searchContainer}>
        <Ionicons name='search-outline' size={20} color={Colors.bluish} />
        <TextInput
          style={styles.searchInput}
          placeholder="Find Your Coffee..."
          placeholderTextColor={Colors.bluish}
          value={searchText}
          onChangeText={setSearchText}
          keyboardAppearance="default" // Adjust for desired look
          enablesReturnKeyAutomatically={true} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    backgroundColor: Colors.grayblue,
    paddingHorizontal: '4%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    // Adjust behavior for iOS and Android platforms
    ...(Platform.OS === 'ios'
      ? { paddingBottom: Platform.OS === 'ios' ? 15 : 0 }
      : { paddingVertical: 5 }), // Adjust padding for Android
  },
  searchInput: {
    flex: 1,
    color: Colors.bluish,
    marginLeft: 10,
  },
});

export default Search;

