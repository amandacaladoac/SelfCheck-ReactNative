import { StatusBar } from 'expo-status-bar';
import React, { cloneElement, useState } from 'react';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Button, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// importando telas
import HomeScreen from './screens/home.js';
import FormularioScreen from './screens/login.js';
import CadastroScreen from './screens/cadastro.js';
import CheckinScreen from './screens/checkin.js';
import PerfilScreen from './screens/perfil.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Login" component={FormularioScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Checkin" component={CheckinScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Perfil" component={PerfilScreen} options={{ headerShown: false }} />
        {/* Adicione outras telas do seu aplicativo aqui */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

