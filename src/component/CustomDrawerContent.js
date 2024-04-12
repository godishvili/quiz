import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, Linking, StyleSheet, Text, View} from 'react-native';

export function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/user-profile.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>John Doe</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() =>
          Linking.canOpenURL('https://mywebsite.com/help').then(supported => {
            if (supported) {
              Linking.openURL('https://mywebsite.com/help');
            } else {
              console.log(
                "Don't know how to open URI: " + 'https://mywebsite.com/help',
              );
            }
          })
        }
      />
    </DrawerContentScrollView>
  );
}

// Styles for the profile
const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center', // Center items horizontally
    paddingVertical: 20, // Vertical padding for the profile container
  },
  profileImage: {
    width: 80, // Set the width of the image
    height: 80, // Set the height of the image
    borderRadius: 40, // Make the image round
    marginBottom: 10, // Margin between the image and the name
  },
  profileName: {
    fontSize: 20, // Set the font size for the name
    fontWeight: 'bold', // Make the name bold
    color: 'black', // Set the text color
    // Add additional styling as needed
  },
});

export default CustomDrawerContent;
