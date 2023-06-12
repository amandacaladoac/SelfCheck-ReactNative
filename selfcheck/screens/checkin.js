import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const CheckinScreen = () => {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [scanned, setScanned] = React.useState(false);
  const [checkinEnabled, setCheckinEnabled] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    setCheckinEnabled(true);
    Alert.alert('QR Code escaneado!', `Data: ${data}`);
  };

  const handleCheckin = () => {
    // Lógica para processar o check-in
    navigation.navigate('CheckinConfirmation'); // Navegar para a tela de confirmação do check-in
    Alert.alert('Check-in realizado', 'Check-in realizado com sucesso');
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
}


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