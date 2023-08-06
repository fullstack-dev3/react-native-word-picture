/* eslint-disable prettier/prettier */
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

export type RootStackParamList = {
  Signup: undefined;
  Signin: undefined;
};

const Welcome = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const lottieWidth = Math.round(Dimensions.get('window').width * 0.8);

  return (
    <>
      <View style={styles.container}>
        <LottieView
          source={require('../assets/animations/astronaut.json')}
          autoPlay
          loop
          style={{ height: lottieWidth, width: lottieWidth }}
        />
        <Image source={require('../assets/images/logo.png')} />
        <TouchableOpacity
          style={styles.signupbutton}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.buttontext}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.signinbutton}
        onPress={() => navigation.navigate('Signin')}
      >
        <Text style={styles.buttontext}>Sign In</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  signupbutton: {
    alignItems: 'center',
    backgroundColor: '#BE1FD3',
    borderRadius: 10,
    height: 60,
    justifyContent: 'center',
    marginTop: 60,
    width: '100%',
  },
  signinbutton: {
    alignItems: 'center',
    borderTopColor: '#ADADAD',
    borderTopWidth: 1,
    paddingVertical: 16,
  },
  buttontext: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default Welcome;
