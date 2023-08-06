/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/welcome';
import Signup from '../pages/signup';
import Signin from '../pages/signin';

const Auth = createStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator
    initialRouteName="Welcome"
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#212765' },
    }}
  >
    <Auth.Screen name="Welcome" component={Welcome} />
    <Auth.Screen name="Signup" component={Signup} />
    <Auth.Screen name="Signin" component={Signin} />
  </Auth.Navigator>
);

export default AuthRoutes;
