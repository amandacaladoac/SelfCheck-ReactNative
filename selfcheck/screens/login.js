import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from '../api';
import UsuarioContext from './UsuarioContext';

const FormularioScreen = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState(null); // Adicionado o estado 'usuario'


  const handleSubmit = async () => {
    try {
      const response = await axios.post('/usuario/login', {
        email,
        senha,
      });
      console.log('Login realizado com sucesso:', response.data);

      // Armazena todos os dados do usuário no estado 'usuario'
      setUsuario(response.data.usuario);

      useEffect(() => {
        if (usuario !== null) {
          navigation.navigate('Navigation');
        }
      }, [usuario, navigation]);
      
      // Redirecionar para a tela de navegação após o login
      navigation.navigate('Navigation');
    } catch (error) {
      console.error('Erro no login:', error);
    }
  };

  // Verifica se o usuário está logado e redireciona para a tela de navegação
  useEffect(() => {
    if (usuario) {
      navigation.navigate('Navigation');
    }
  }, [usuario, navigation]);


  const navigateToCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <UsuarioContext.Provider value={usuario}>
      <View style={styles.container}>
        <Image source={require('../assets/logo-principal.png')} style={styles.logo} />
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
      </View>
    </UsuarioContext.Provider>

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