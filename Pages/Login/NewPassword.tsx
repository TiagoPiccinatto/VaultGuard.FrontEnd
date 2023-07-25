import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigation } from '../../App';
import { useNavigation } from '@react-navigation/native';

const backgroundImage = require('../../assets/BackgroundWithoutlogo.jpeg');

const ChangePasswordScreen: React.FC = () => {
  const { navigate, goBack } = useNavigation<StackNavigation>();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleOnGoBack = () => goBack();

  const handleOnChangePassword = (value: string) => setPassword(value);
  const handleOnChangeConfirmPassword = (value: string) => setConfirmPassword(value);

  const handleOnSubmit = () => {
    // Implemente a lógica para trocar a senha aqui.
    console.log('Senha alterada com sucesso!');
    navigate('SucessoSenha');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleOnGoBack}>
          <Text>
            <Icon name="ios-arrow-back" size={30} color="white" />
          </Text>
        </TouchableOpacity>
        <Text style={styles.title}>Vamos Criar uma Super Senha!</Text>
        <Text style={styles.description}>Está na hora de deixar sua senha ainda mais poderosa! Digite abaixo uma nova senha única e surpreendente para sua conta.</Text>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nova Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              secureTextEntry={true}
              value={password}
              onChangeText={handleOnChangePassword}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirme a Nova Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirme a Senha"
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={handleOnChangeConfirmPassword}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleOnSubmit}>
          <Text style={styles.buttonText}>Salvar Senha</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#30569F',
  },
  description: {
    fontSize: 14,
    marginBottom: 30,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  formContainer: {
    width: '100%',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#30569F',
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

export default ChangePasswordScreen;
