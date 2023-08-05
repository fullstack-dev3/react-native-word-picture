/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/**
 * @format
 */

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#212765" />
    <View
      style={{ backgroundColor: '#212765', flex: 1 }}
    >
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
