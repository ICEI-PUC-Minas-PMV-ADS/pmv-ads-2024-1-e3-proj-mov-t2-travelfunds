import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import InputDados from "../components/InputDados";
import BotaoSalvar from "../components/BotaoSalvar";
import { Icon } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { FIRESTORE_DB, FIREBASE_AUTH } from '../../FirebaseConfig';
import { doc, setDoc } from "firebase/firestore";
import { logout } from '../services/Firebase.Auth';
import Ionicons from '@expo/vector-icons/Ionicons';
import InputButton from "../components/InputButton";

const CadastroViagem = () => {
    const [destino, setDestino] = useState('');
    const [dataPartida, setDataPartida] = useState('');
    const [dataRetorno, setDataRetorno] = useState('');
    const navigation = useNavigation();

    const salvarViagem = async () => {
        try {
            const user = FIREBASE_AUTH.currentUser;

            if (user) {
                const viagemDoc = doc(FIRESTORE_DB, 'viagens', '9RnHz6QuKFMLCLCqxyMX');
                await setDoc(viagemDoc, {
                    usuarioID: user.uid,
                    destino,
                    dataPartida,
                    dataRetorno,
                });

                Alert.alert("Sucesso", "Viagem salva com sucesso!");
                navigation.goBack();
            } else {
                Alert.alert("Erro", "Usuário não autenticado!");
            }
        } catch (error) {
            Alert.alert("Erro", error.message);
        }
    };

    const handleGoBack = () => {
        navigation.navigate('Perfil');
    };

    const handleLogout = async () => {
        logout();
    }

    return (
        <>
       <View style={styles.container}>
            <View style={styles.topSection}>
                <Ionicons
                    name="return-up-back-outline"
                    size={35}
                    color="#fff"
                    style={styles.returnIcon}
                    onPress={handleGoBack}
                />
            <View style={styles.roundComponent}>
            <Text style={styles.overlayText}>
                <Icon source="camera" size={40} />
            </Text>
        </View>
        <View style={styles.logout}>
            <InputButton
                text="Logout"
                mode="text"
                onPress={handleLogout}
          />
        </View>
      </View>

            <View style={styles.bottomSection}>
                <InputDados label="Destino" value={destino} onChangeText={setDestino} /> 
                <InputDados label="Data de Partida" value={dataPartida} onChangeText={setDataPartida} /> 
                <InputDados label="Data de Retorno" value={dataRetorno} onChangeText={setDataRetorno} />
                <BotaoSalvar text="Salvar" onPress={salvarViagem} />
            </View>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C0CBD4',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      topSection: {
        flex: 1,
        width: '100%',
        backgroundColor: '#012B53',
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      roundComponent: {
        width: 150,
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -40,
      },
      returnIcon: {
        position: 'absolute',
        bottom: 20,
        left: 45,
      },
      settingsIcon: {
        position: 'absolute',
        top: 75,
        left: 45,
      },
      logout: {
        position: 'absolute',
        top: 65,
        right: 20,
      },
      
    bottomSection: {
        flex: 2,
        width: '90%',
        backgroundColor: '#012B53',
        padding: 10,
        marginTop: '15%',
        marginBottom: '10%',
        marginLeft: '5%',
        marginRight: '5%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    overlayText: { 
        color: "#999" 
    },

});

export default CadastroViagem; 