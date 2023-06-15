import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import axios from '../api';
import UserContext from './UserContext';

const CheckinScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scanning, setScanning] = useState(true);
  const [checkinEnabled, setCheckinEnabled] = useState(false);
  const navigation = useNavigation();
  const { updateUser } = useContext(UserContext);

  // Obtém o ID do usuário do contexto
  const { userId } = useContext(UserContext);

  useEffect(() => {
    if (scanning) {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }
  }, [scanning]);

  const handleBarCodeScanned = ({ data }) => {
    if (data === 'https://www.google.com/maps/place/Faculdade+Senac+Pernambuco') {
      setScanned(true);
      setCheckinEnabled(true);
      setScanning(false); // Parar o escaneamento após encontrar o QR code correspondente
      Alert.alert('QR Code escaneado!', `Data: ${data}`);
    }
  };

  const handleCheckin = async () => {
    if (checkinEnabled) {
      try {
        const response = await axios.put('/usuario/:id/checkin'); // Substitua ":id" pelo ID do usuário atual
        console.log('Check-in realizado com sucesso:', response.data);
        Alert.alert(
          'Check-in realizado',
          'Check-in realizado com sucesso',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Perfil'), // Navegar para a tela "Perfil" ao pressionar o botão "OK"
            },
          ]
        );
      } catch (error) {
        console.error('Erro ao realizar check-in:', error);
        Alert.alert('Erro no check-in', 'Ocorreu um erro ao fazer check-in. Tente novamente mais tarde.');
      }
    } else {
      Alert.alert('Check-in não permitido', 'O QR Code escaneado não é válido para o check-in.');
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ flex: 1 }}
      />
      <View style={styles.buttonContainer}>
        {scanned && (
          <TouchableOpacity
            style={[styles.button, !checkinEnabled && styles.disabledButton]}
            onPress={handleCheckin}
            disabled={!checkinEnabled}
          >
            <Text style={styles.buttonText}>Check-in</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CheckinScreen;


const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 620,
  },
  button: {
    width: 230,
    padding: 20,
    backgroundColor: '#F7941E',
    borderRadius: 30,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
});