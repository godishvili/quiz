
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Home from './src/screens/Home.js';
import NotificationsScreen from './src/screens/NotificationsScreen.js';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import CustomDrawerContent from './src/component/CustomDrawerContent.js';
import CustomIconComponent from './src/component/CustomIconComponent.js';
import axios from "axios";
import ProductDetailScreen from "./src/screens/ProductDetailScreen.js";

const Drawer = createDrawerNavigator();
axios.defaults.baseURL = 'https://dummyjson.com/';
function App() {
  return (
      <SafeAreaProvider style={{flex: 1}}>
        <SafeAreaView style={{flex: 1, backgroundColor: 'yellow'}}>
          <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                drawerContent={CustomDrawerContent}
                screenOptions={{
                  headerShown: false, // This line hides the header
                }}>
              <Drawer.Screen
                  name="Home"
                  component={Home}
                  options={{
                    drawerActiveTintColor: 'white',
                    drawerActiveBackgroundColor: 'orange',
                    headerTitleAlign: 'center',
                    drawerIcon: ({color, size}) => (
                        <CustomIconComponent
                            color={color}
                            size={size}
                            name={'home'}
                        />
                    ),
                  }}
              />
              <Drawer.Screen
                  name="Notifications"
                  component={NotificationsScreen}
                  options={{
                    drawerActiveTintColor: 'white',
                    drawerActiveBackgroundColor: 'orange',
                    headerTitleAlign: 'center',
                    drawerIcon: ({color, size}) => (
                        <CustomIconComponent
                            color={color}
                            size={size}
                            name={'notification'}
                        />
                    ),
                  }}
              />
              <Drawer.Screen
                  name="ProductDetails"
                  component={ProductDetailScreen}
                  options={{
                    title: 'Product Details',
                    drawerItemStyle: { display: 'none' }
                  }}
              />
            </Drawer.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

export default App;
