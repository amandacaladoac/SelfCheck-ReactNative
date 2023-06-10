import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      
      <Image source={require('./assets/logo-principal.png')} />

      <View style={styles.textoInicio}>
        <Text style={styles.heading}>Self Check</Text>
        <Text style={styles.subheading}>
          “No Egito, as bibliotecas eram chamadas  ''Tesouro dos remédios da alma''. De fato é nela que se cura a ignorância, a mais perigosa das enfermidades e a origem de todas as outras.”
          ― Jacque Bossuet
        </Text>
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => { }}>
        <Text style={styles.buttonText}>Faça seu Check-in</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textoInicio: {
    alignItems: 'center',
    marginBottom: 20,
    gap: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'normal',
    color: '#004A8D',

  },
  subheading: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000000', // Define a cor do texto como preto
  },
  buttonContainer: {
    backgroundColor: '#004A8D',
    padding: 20,
    borderRadius: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
