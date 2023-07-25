import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParamList, StackNavigation } from '../../App';
import { useNavigation, useRoute } from '@react-navigation/native';
import Modal from 'react-native-modal';

const backgroundImage = require('../../assets/BackgroundWithoutlogo.jpeg');

const ConfirmOTPScreen: React.FC = () => {
  const route = useRoute();
  const { number } = route.params as RootStackParamList['Otp'];

  const { goBack, navigate } = useNavigation<StackNavigation>();
  const inputs = Array(4).fill(useRef<TextInput | null>(null));
  const [otpCode, setOtpCode] = useState<Array<string>>(['', '', '', '']);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalErrorVisible, setModalErrorVisible] = useState(false);

  const handleOnGoBack = () => goBack();

  const handleOnSubmit = () => {
    const otpCodeString = otpCode.join('');

    // Implemente a lógica para verificar o código OTP inserido.
    // Por exemplo, você pode compará-lo com o código recebido no e-mail.
    // Se o código estiver correto, você pode navegar para a próxima tela.
    if (number.toString() === otpCodeString.toString()) {
      navigate('Login');
      console.log('Código OTP inserido e Confirmado');
      navigate('NovaSenha');
    } else {
      console.log('Código OTP inserido não está igual', otpCodeString, number);
    
      setModalErrorVisible(true);
    }
  };

  const handleOnChange = (index: number, value: string) => {
    if (value.length > 0 && index < inputs.length - 1) {
      inputs[index + 1].current?.focus();
    }

    const newOtpCode = otpCode.map((code, idx) => (idx === index ? value : code));
    setOtpCode(newOtpCode);
  };

  const handleOnResendCode = () => {
    // Implemente a lógica para reenviar o código.
    console.log('Código reenviado');
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setModalErrorVisible(false);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleOnGoBack}>
          <Text>
            <Icon name="ios-arrow-back" size={30} color="white" />
          </Text>
        </TouchableOpacity>
        <Text style={styles.title}>Confirme Seu Código</Text>
        <Text style={styles.description}>Insira o código que foi enviado para o seu e-mail.</Text>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            {inputs.map((input, index) => (
              <TextInput
                key={index}
                ref={inputs[index]}
                style={styles.input}
                placeholder="0"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                maxLength={1}
                value={otpCode[index]}
                onChangeText={(value) => handleOnChange(index, value)}
                keyboardType="numeric"
              />
            ))}
          </View>
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleOnSubmit}>
          <Text style={styles.buttonText}>Confirmar Código</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resendButton} onPress={handleOnResendCode}>
          <Text style={styles.resendButtonText}>
            Não recebeu o código? <Text style={styles.resendButtonTextDestaque}>Envie Novamente</Text>
          </Text>
        </TouchableOpacity>
        <Modal isVisible={isModalVisible}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Código Enviado Com Sucesso</Text>
            <Text style={styles.modalSubText}>Um novo código foi enviado para o seu e-mail.</Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleModalClose}>
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal isVisible={isModalErrorVisible}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Código De Verificação Incorreto</Text>
            <Text style={styles.modalSubText}>Tente Novamente!</Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleModalClose}>
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
  resendButtonTextDestaque: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#11B0CF', // Cor destacada diferente
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.109)',
    width: 60,
    height: 60,
    borderRadius: 8,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
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
  resendButton: {
    marginTop: 20,
  },
  resendButtonText: {
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
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#30569F',
    marginBottom: 10,
  },
  modalSubText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#30569F',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ConfirmOTPScreen;
