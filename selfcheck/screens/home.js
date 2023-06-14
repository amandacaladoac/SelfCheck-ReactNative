import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Image source={require('../assets/logo-principal.png')} style={styles.logo} />

            <View style={styles.textoInicio}>
                <Text style={styles.heading}>Self Check</Text>
                <Text style={styles.subheading}>
                    “No Egito, as bibliotecas eram chamadas  ''Tesouro dos remédios da alma''. De fato é nela que se cura a ignorância, a mais perigosa das enfermidades e a origem de todas as outras.”
                    ― Jacque Bossuet
                </Text>
            </View>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Faça seu Check-in</Text>
            </TouchableOpacity>

        </View>
    );
};

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 15,
    },
    logo: {
        width: 337,
        height: 217,
        resizeMode: 'contain',
    },
    textoInicio: {
        alignItems: 'center',
        marginBottom: 20,
        gap: 30,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#004A8D',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
    },
    subheading: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000000', // Define a cor do texto como preto
    },
    buttonContainer: {
        backgroundColor: '#004A8D',
        padding: 20,
        borderRadius: 30,
        width: 200,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});