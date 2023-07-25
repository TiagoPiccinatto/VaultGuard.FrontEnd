import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RegisterScreen from '../VaultGuard.FrontEnd/Pages/Login/Register';
import LoginScreen from "../VaultGuard.FrontEnd/Pages/Login/Login";
import HomeScreen from './Pages/Login/Home';
import EsqueciSenhaScreen from './Pages/Login/ForgotPassword'
import OtpScreen from './Pages/Login/Otp'
import NewPasswordScreen from './Pages/Login/NewPassword';
import SucessoSenhaScreen from './Pages/Login/SucessoSenha'
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
export type ScreenNames = ["Register","Home", "Login", "EsqueciSenha", "Otp", "NovaSenha", "SucessoSenha"] // type these manually
// export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type RootStackParamList = {
  Login: undefined;
  Otp: { number?: number };
  Home: undefined;
  EsqueciSenha: undefined;
  Register: undefined;
  NovaSenha: undefined;
  SucessoSenha: undefined;
};
export type StackNavigation = NavigationProp<RootStackParamList>;
const  Stack = createNativeStackNavigator<RootStackParamList>();


const App: React.FC = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: false, // Oculta o header para todas as telas
        }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen name='EsqueciSenha' component={EsqueciSenhaScreen} />
      <Stack.Screen name='Otp' component={OtpScreen} />
      <Stack.Screen name='NovaSenha' component={NewPasswordScreen} />
      <Stack.Screen name='SucessoSenha' component={SucessoSenhaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
