import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// importando telas
import HomeScreen from './screens/home.js';
import FormularioScreen from './screens/login.js';
import CadastroScreen from './screens/cadastro.js';
import CheckinScreen from './screens/checkin.js';
import PerfilScreen from './screens/perfil.js';
import Navigation from './screens/navigation.js';


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
        <Stack.Screen name="Navigation" component={Navigation} options={{ headerShown: false }} />
        
        {/* outras telas do aplicativo */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

