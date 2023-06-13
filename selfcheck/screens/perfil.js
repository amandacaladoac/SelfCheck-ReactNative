import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const PerfilScreen = () => {
    const [checkins, setCheckins] = useState(0);
    const [pontos, setPontos] = useState(0);

    const adicionarCheckin = () => {
        setCheckins(checkins + 1);
        saveCache();
    };

    const adicionarPontos = () => {
        setPontos(pontos + 1);
        saveCache();
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
                </View>
                <View style={styles.corpo}>
                    <Image
                        source={require('../assets/icon-edit.png')}
                        style={styles.iconEdit}
                    />
                </View>
                <Text style={styles.nomeUsuarioPerfil}>Nome do usuário</Text>
                <Text style={styles.emailUsuarioPerfil}>email do usuário</Text>

                <View style={styles.container2}>
                    <View style={styles.listItem}>
                        <Image source={require('../assets/Vector2.png')} style={styles.iconCheckin} />
                        <Text style={styles.checkins}>{checkins}</Text>
                    </View>
                    <View style={styles.listItem}>
                        <Image source={require('../assets/Vector.png')} style={styles.vector} />
                        <Text style={styles.pontos}>{pontos}</Text>
                    </View>
                </View>
            </View>
        </View>
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
        width: '75%',
        height: 350,
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
        marginLeft: 45,
        bottom: 100,
        width: 150,
        height: 150,
        zIndex: 2,
    },
    fotoPerfil: {
        width: '100%',
        height: '100%',
    },
    iconEdit: {
        width: 40,
        height: 40,
        marginLeft: 205,
        bottom: 138,
    },
    nomeUsuarioPerfil: {
        width: '100%',
        height: 'auto',
        bottom: 130,
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
        bottom: 130,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 15.79,
        textAlign: 'center',
        color: '#888888',
    },
    iconCheckin: {
        position: 'absolute',
        width: 18,
        height: 24,
    },
    vector: {
        position: 'absolute',
        width: 24,
        height: 24,
    },
    listItem: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    container2: {
        flexDirection: 'column',
        gap:50,
    },
    checkins: {
        position: 'absolute',
        left: '43%',
        top: '45%',
        fontWeight: 'normal',
        fontSize: 21,
    },
    pontos: {
        position: 'absolute',
        left: '43%',
        top: '63%',
        fontWeight: 'normal',
        fontSize: 21,
    },
});

export default PerfilScreen;


