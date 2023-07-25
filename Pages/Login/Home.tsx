import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../../App';


const backgroundImage = require('../../assets/BackGround.jpeg');


const HomeScreen: React.FC = () => {
const { navigate } = useNavigation<StackNavigation>();
const handleOnNavigate = () => navigate("Register");
const handleOnNavigateLogin = () => navigate("Login");
const handleOnNavigateOtp = () => navigate("SucessoSenha");
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleOnNavigateLogin}>
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleOnNavigate}>
          <Text style={styles.buttonText} >Registrar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Entrar como convidado</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText} onPress={handleOnNavigateOtp}>Boatao de Teste</Text>
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
    alignItems: 'center',
    marginBottom: 80,
  },
  button: {
    backgroundColor: '#30569F',
    width: '85%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#30569F',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;
