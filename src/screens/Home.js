import {
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {DrawerActions} from '@react-navigation/native';
import ProductItemComponent from '../component/ProductItemComponent.js';
import {HttpRequests} from '../httpRequests/HttpRequests.js';

const httpRequests = new HttpRequests();

export function Home({navigation}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    httpRequests
      .getProducts()
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  const [searchText, setSearchText] = useState('');
  console.log(searchText);
  return (
    <View style={styles.view}>
      <View style={styles.inlineContainer}>
        <TouchableOpacity onPress={toggleDrawer} style={styles.menuButton}>
          <Entypo name="menu" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.searchSection}>
          <Entypo
            name="magnifying-glass"
            size={20}
            color="black"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search a product..."
            onChangeText={text => setSearchText(text)}
            value={searchText}
          />
        </View>
      </View>
      <FlatList
        data={products}
        renderItem={ProductItemComponent(navigation)}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatListContainer} // This removes any padding around the items

        // Add any other props you need, such as contentContainerStyle
      />
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'yellow',
    paddingTop: 10,
  },
  inlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    // marginTop: 5,
  },
  menuButton: {
    marginRight: 10,
    padding: 10,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40, // Fixed height for the input
    fontSize: 16, // Font size for the placeholder text
    color: 'black', // Text color
    // Removing styles that are now part of the searchSection
  },
  flatListContainer: {
    marginHorizontal: 10, // Make sure no horizontal padding is affecting the list
  },
});

export default Home;
