import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigation } from '../../App';
import { useNavigation } from '@react-navigation/native';

const backgroundImage = require('../../assets/BackgroundWithoutlogo.jpeg');
const checkIcon = require('../../assets/verifyy.png');

const PasswordChangedScreen: React.FC = () => {
  const { goBack } = useNavigation<StackNavigation>();

  const handleOnGoBack = () => goBack();

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image source={checkIcon} style={styles.icon} />
        </View>
        <Text style={styles.title}>Senha Alterada</Text>
        <Text style={styles.description}>Sua senha foi alterada com Sucesso</Text>
        <TouchableOpacity style={styles.returnButton} onPress={handleOnGoBack}>
          <Text style={styles.returnButtonText}>Voltar</Text>
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
  iconContainer: {
    marginBottom: 20,
  },
  icon: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#30569F',
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
    color: '#666666',
  },
  returnButton: {
    backgroundColor: '#30569F',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  returnButtonText: {
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

export default PasswordChangedScreen;
