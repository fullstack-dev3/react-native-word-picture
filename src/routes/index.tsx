/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/welcome';

const Auth = createStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#212765' },
    }}
  >
    <Auth.Screen name="Welcome" component={Welcome} />
  </Auth.Navigator>
);

export default AuthRoutes;
