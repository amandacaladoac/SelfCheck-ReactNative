import React, { cloneElement, useState } from 'react';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Button, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const FormularioScreen = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    // Lógica para processar o formulário
    console.log('Usuário:', usuario);
    console.log('Senha:', senha);
  };

  const navigateToCheckin = () => {
    navigation.navigate('Checkin');
  }

  const navigateToCadastro = () => {
    navigation.navigate('Cadastro');
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
            placeholder="Senha"
            value={senha}
            onChangeText={text => setSenha(text)}
            secureTextEntry
          />
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.buttonContainer} onPress={navigateToCheckin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer2} onPress={navigateToCadastro}>
            <Text style={styles.buttonText2}>Cadastre-se</Text>
          </TouchableOpacity>

        </View>
      </View>
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