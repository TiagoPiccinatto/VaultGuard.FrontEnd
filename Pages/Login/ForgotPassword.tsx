import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigation } from '../../App';
import { useNavigation } from '@react-navigation/native';

const backgroundImage = require('../../assets/BackgroundWithoutlogo.jpeg');

const ForgotPasswordScreen: React.FC = () => {
  const { navigate, goBack } = useNavigation<StackNavigation>();
  const [email, setEmail] = useState('');

  const handleOnGoBack = () => goBack();
  
  const handleOnSubmit = () => {
    // Implemente a lógica para enviar o e-mail de recuperação de senha.
     const number = 1252
// funcao para gerar o codigo de otp e enviar para email
    const randomNumber = Math.floor(Math.random() * 10000);
    const numberr = parseInt(String(randomNumber).padStart(4, '0'));

    console.log('E-mail enviado para:', email);
    navigate('Otp', { number });
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleOnGoBack}>
          <Text>
            <Icon name="ios-arrow-back" size={30} color="white" />
          </Text>
        </TouchableOpacity>
        <Text style={styles.title}>Esqueceu Sua Senha?</Text>
        <Text style={styles.description}>Insira seu e-mail abaixo e enviaremos instruções para recuperar sua senha.</Text>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleOnSubmit}>
          <Text style={styles.buttonText}>Enviar E-mail</Text>
        </TouchableOpacity>
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
    marginBottom: 10,
    color: '#30569F',
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
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
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  submitButton: {
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
});

export default ForgotPasswordScreen;
