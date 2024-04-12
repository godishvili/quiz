import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  Dimensions,
  SafeAreaView, Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

export const ProductDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { product } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'yellow' }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>{product.title}</Text>
        </View>
        <Image source={{ uri: product.thumbnail }} style={styles.thumbnail} />
        <View style={styles.details}>
          <Text style={styles.detailText}>Description: {product.description}</Text>
          <Text style={styles.detailText}>Price: ${product.price}</Text>
          <Text style={styles.detailText}>Discount Percentage: {product.discountPercentage}%</Text>
          <Text style={styles.detailText}>Rating: {product.rating}</Text>
          <Text style={styles.detailText}>Stock: {product.stock}</Text>
          <Text style={styles.detailText}>Brand: {product.brand}</Text>
          <Text style={styles.detailText}>Category: {product.category}</Text>
        </View>
        <FlatList
          data={product.images}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => openImage(item)}>
              <Image source={{ uri: item }} style={styles.productImage} />
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.imagesList}
        />
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeModalButton} onPress={() => setModalVisible(false)}>
              <Ionicons name="close-circle" size={30} color="#FFFFFF" />
            </TouchableOpacity>
            <Image source={{ uri: selectedImage }} style={styles.fullSizeImage} />
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    flex: 1,
    marginRight: 50, // Compensate for the back button space to center the title
  },
  thumbnail: {
    width: width - 20,
    height: 300,
    resizeMode: 'contain',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 10,
  },
  priceAndRating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
  rating: {
    fontSize: 20,
    color: 'blue',
  },
  description: {
    fontSize: 16,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  imagesList: {
    paddingHorizontal: 10,
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 10,
    margin: 10,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCloseButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 44 : 20, // Adjust for iOS status bar height or Android
    right: 20,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 8,
    elevation: 2,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#000',
  },
  enlargedImage: {
    width: width - 40,
    height: width - 40,
    resizeMode: 'contain',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'transparent',
  },
  closeButton: {
    padding: 10,
    zIndex: 10,
  },
  fullScreenImage: {
    width: width,
    height: height,
    resizeMode: 'contain',
  },
  details: {
    padding: 10,
  },
  detailText: {
    fontSize: 16,
    color: 'black', // Ensure text is visible against yellow background
    marginBottom: 4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    position: 'relative',
  },
  closeModalButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1, // Make sure it's above other elements
  },
  fullSizeImage: {
    width: width - 20,
    height: width - 20,
    resizeMode: 'contain',
    marginVertical: 10,
  },
});


export default ProductDetailScreen;
