import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const CadastroScreen = () => {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    // Logic to process the form
    console.log('Usuário:', usuario);
    console.log('Email:', email);
  };

  const navigateToCadastro = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo-principal.png')} style={styles.logo} />
      <View style={styles.formContainer}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            value={usuario}
            onChangeText={text => setUsuario(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Matrícula"
            value={matricula}
            onChangeText={text => setMatricula(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={text => setSenha(text)}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
            value={confirmarSenha}
            onChangeText={text => setConfirmarSenha(text)}
            secureTextEntry
          />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.buttonContainer2} onPress={navigateToCadastro}>
            <Text style={styles.buttonText2}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CadastroScreen;

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
  buttonText2: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
