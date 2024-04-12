import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const ProductItemComponent =
  navigation =>
  ({item}) => {
    // const navigation = useNavigation(); // Hook to get access to navigation

    const navToProductDetailScreen = () => {
      navigation.navigate('ProductDetails', {product: item});
    };

    return (
      <Pressable onPress={() => navToProductDetailScreen()}>
        <View style={styles.itemContainer}>
          <Image source={{uri: item.thumbnail}} style={styles.thumbnail} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </Pressable>
    );
  };

const styles = StyleSheet.create({
  // ... your existing styles
  itemContainer: {
    backgroundColor: 'white', // Background color for the items
    borderWidth: 1, // Width of the border
    borderColor: '#e1e1e1', // Color of the border
    borderRadius: 10, // Increased rounded corners
    padding: 10, // Padding inside the item container
    marginVertical: 8, // Margin vertically between items
    // Removed horizontal margins to extend to both edges
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: {width: 0, height: 1}, // Shadow offset for iOS
    shadowOpacity: 0.22, // Shadow opacity for iOS
    shadowRadius: 2.22, // Shadow radius for iOS
    elevation: 3, // Elevation for Android
  },
  thumbnail: {
    width: '100%', // Full width of the container
    height: 150, // Fixed height for the thumbnail
    resizeMode: 'cover', // Cover the whole area without stretching
    borderRadius: 5, // The border radius should match the container's
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8, // Space between image and title
  },
  description: {
    fontSize: 14,
    color: '#666', // A darker color for the description text
    marginVertical: 4, // Margin vertically for spacing
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 8, // Space at the bottom of the container
  },
  // ... any other styles you need
});

export default ProductItemComponent;
