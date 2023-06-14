import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const PerfilScreen = () => {
    const [checkins, setCheckins] = useState(0);
    const [pontos, setPontos] = useState(0);
    const navigation = useNavigation();

    const adicionarCheckin = () => {
        setCheckins(checkins + 1);
        saveCache();
    };

    const adicionarPontos = () => {
        setPontos(pontos + 1);
        saveCache();
    };

    const handleLogout = () => {
        // Lógica para deslogar o usuário da conta
    
        navigation.navigate('Home');
      };

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/fundo-perfil.jpg')}
                style={styles.fundoPerfil}
            />
            <View style={styles.sobrepor}>
                <View style={styles.sobrepor2}>
                    <Image
                        source={require('../assets/foto-perfil.png')}
                        style={styles.fotoPerfil}
                    />

                    <Image
                        source={require('../assets/icon-edit.png')}
                        style={styles.iconEdit}
                    />
                </View>

                <View style={styles.container1}>
                    <Text style={styles.nomeUsuarioPerfil}>Nome do usuário</Text>
                    <Text style={styles.emailUsuarioPerfil}>email do usuário</Text>
                </View>

                <View style={styles.container2}>
                    <View style={styles.listItem}>
                        <Image source={require('../assets/Vector2.png')} style={styles.iconCheckin} />

                        <Text style={styles.checkins}> {checkins}</Text>
                    </View>
                    <View style={styles.listItem}>
                        <Image source={require('../assets/Vector.png')} style={styles.vector} />

                        <Text style={styles.pontos}>{pontos}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonContainer2} onPress={handleLogout}>
                    <Text style={styles.buttonText2}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fundoPerfil: {
        position: 'absolute',
        width: '100%',
        height: '55%',
        left: 0,
        top: 0,
    },
    sobrepor: {
        width: 324,
        height: 380,
        opacity: 1,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 50,
        borderRadius: 20,
        padding: 20,
    },
    sobrepor2: {
        alignSelf: 'center',
        flexDirection: 'row',
        gap: 20,
        bottom: 100,
        width: 150,
        height: 150,
        zIndex: 2,
    },
    container1: {
        alignSelf: 'center',
        alignItems: 'center',
        bottom: 85,
    },
    fotoPerfil: {
        width: '100%',
        height: '100%',
    },
    iconEdit: {
        width: 40,
        height: 40,
        alignSelf: 'flex-end',
    },
    buttonContainer2: {
        position: 'absolute',
        alignSelf: 'center',
        top: 355,
        width: 200,
        padding: 12,
        backgroundColor: '#F7941E',
        borderRadius: 30,
    },
    buttonText2: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    nomeUsuarioPerfil: {
        width: '100%',
        height: 'auto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        letterSpacing: 0.01,
        color: '#263238',
    },
    emailUsuarioPerfil: {
        width: '100%',
        height: 'auto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 15.79,
        textAlign: 'center',
        color: '#888888',
    },
    iconCheckin: {
        marginLeft: 3,
        width: 18,
        height: 24,
    },
    vector: {
        width: 24,
        height: 24,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    container2: {
        position: 'absolute',
        top: 100,
        padding: 50,
        gap: 20,
    },
    checkins: {
        fontWeight: 'normal',
        fontSize: 21,
    },
    pontos: {
        fontWeight: 'normal',
        fontSize: 21,
    },
});

export default PerfilScreen;


