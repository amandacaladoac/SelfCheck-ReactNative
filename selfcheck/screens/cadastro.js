import React, { cloneElement, useState } from 'react';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Button, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const CadastroScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Tela de Cadastro</Text>
    </View>
  );
};

export default CadastroScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
