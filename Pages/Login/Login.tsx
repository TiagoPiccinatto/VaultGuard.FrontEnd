import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigation } from '../../App';
import { useNavigation } from '@react-navigation/native';

const backgroundImage = require('../../assets/BackgroundWithoutlogo.jpeg');

const RegisterScreen: React.FC = () => {
  const { navigate, goBack } = useNavigation<StackNavigation>();

  const handleOnGoBack = () => goBack();

  const handleOnRegister = () => navigate('Register');

  const handleOnRecoverPassword = () => navigate('EsqueciSenha');

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleOnGoBack}>
          <Text>
            <Icon name="ios-arrow-back" size={30} color="white" />
          </Text>
        </TouchableOpacity>
        <Text style={styles.title}>Olá, <Text style={styles.titleSyle}>Bem-vindo de Volta!</Text> Bom ter você de Volta Aqui!</Text>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nome de Usuário"
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
            />
            <TouchableOpacity onPress={handleOnRecoverPassword}>
              <Text style={styles.recoverPasswordLink}>Esqueceu Senha ?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.buttonText}>Logar Agora</Text>
        </TouchableOpacity>
        <View style={styles.loginLinkContainer}>
          <Text style={styles.loginLinkText}>Se você não tem conta</Text>
          <TouchableOpacity onPress={handleOnRegister}>
            <Text style={styles.loginLink}>Registre-se agora!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 70,
  },
  titleSyle:{
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 70,
    color: '#30569F',
  },
  formContainer: {
    width: '100%',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.109)',
    height: 70,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  registerButton: {
    backgroundColor: '#30569F',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLinkContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  loginLinkText: {
    fontSize: 14,
    marginRight: 5,
  },
  loginLink: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#30569F', // Cor destacada diferente
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 15,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(1, 86, 189, 0.29)',
    borderRadius: 9,
  },
  recoverPasswordLink: {
    alignSelf: 'flex-end',
    fontSize: 14,
    top: 4,
    fontWeight: 'bold',
    color: '#30569F', // Cor destacada diferente
  },
});

export default RegisterScreen;
