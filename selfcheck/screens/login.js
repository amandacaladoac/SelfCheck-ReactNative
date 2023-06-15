import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from '../api';
import { UserProvider } from './UserContext';

const FormularioScreen = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const updateUser = (userId) => {
    // Implemente a lógica para atualizar o contexto com o ID do usuário
    console.log('ID do usuário:', userId);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/usuario/login', {
        email,
        senha,
      });
      console.log('Login realizado com sucesso:', response.data);
      // Redirecionar para a tela de navegação após o login
      navigation.navigate('Navigation');
    } catch (error) {
      console.error('Erro no login:', error);
    }
  };

  // Simule o ID do usuário obtido após o login
  const userId = '123456';

  // Atualize o contexto com o ID do usuário
  updateUser(userId);

  const navigateToCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo-principal.png')} style={styles.logo} />

      <UserProvider>
        <View style={styles.formContainer}>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={senha}
              onChangeText={text => setSenha(text)}
              secureTextEntry
            />
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer2} onPress={navigateToCadastro}>
              <Text style={styles.buttonText2}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </UserProvider>
    </View>
  );
};

export default FormularioScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 15,
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
  formContainer: {
    width: '80%',
    marginBottom: 20,
    gap: 35,
  },
  input: {
    height: 60,
    borderColor: '#808080',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  buttons: {
    gap: 30,
    alignItems: 'center',
  },
  buttonContainer: {
    width: 230,
    padding: 20,
    backgroundColor: '#004A8D',
    borderRadius: 30,
  },
  buttonContainer2: {
    width: 230,
    padding: 20,
    backgroundColor: '#F7941E',
    borderRadius: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonText2: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});