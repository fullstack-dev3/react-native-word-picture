/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

export type RootStackParamList = {
  Signin: undefined;
};

const Signin = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <>
      {!isKeyboardVisible && (
        <TouchableOpacity
          style={{ padding: 16 }}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      )}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <View style={styles.container}>
            <Image source={require('../assets/images/logo.png')} />
            <View>
              <View style={styles.inputContainer}>
                <Feather name="user" size={20} color="#B6B6B6" style={{ marginRight: 15 }} />
                <TextInput
                  style={styles.textInput}
                  placeholder="Name"
                  placeholderTextColor="#B6B6B6"
                />
              </View>
              <View style={styles.inputContainer}>
                <Feather name="lock" size={20} color="#B6B6B6" style={{ marginRight: 15 }} />
                <TextInput
                  style={styles.textInput}
                  secureTextEntry={true}
                  placeholder="Password"
                  placeholderTextColor="#B6B6B6"
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.signupbutton}
              onPress={() => navigation.navigate('Signin')}
            >
              <Text style={styles.buttontext}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 30,
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: '#161A43',
    borderRadius: 10,
    flexDirection: 'row',
    height: 60,
    marginVertical: 5,
    paddingHorizontal: 16,
    paddingVertical: 0,
    width: '100%',
  },
  textInput: {
    color: '#FFFFFF',
    flex: 1,
    fontSize: 16,
  },
  signupbutton: {
    alignItems: 'center',
    backgroundColor: '#BE1FD3',
    borderRadius: 10,
    height: 60,
    justifyContent: 'center',
    width: '100%',
  },
  buttontext: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default Signin;
