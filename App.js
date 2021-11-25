import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'

const Stack=createStackNavigator();

export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

