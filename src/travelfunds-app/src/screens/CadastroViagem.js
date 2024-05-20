import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import InputDados from "../components/InputDados";
import BotaoSalvar from "../components/BotaoSalvar";
import Header from "../components/Header";
import { Icon, Appbar } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { FIRESTORE_DB, FIREBASE_AUTH } from '../../FirebaseConfig';
import { doc, setDoc } from "firebase/firestore";

const CadastroViagem = () => {
    const [destino, setDestino] = useState('');
    const [dataPartida, setDataPartida] = useState('');
    const [dataRetorno, setDataRetorno] = useState('');
    const [orcamento, setOrcamento] = useState('');
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
                    orcamentoViagem: orcamento
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

    return (
        <>
        <Header 
        title={'Cadastrar Viagem'} goBack={() => navigation.goBack()}>
        <Appbar.Action icon="dots-vertical" color="white" onPress={() => {}} />
        </Header>

        <View style={styles.container}>
            <View style={styles.topSection}>
                <View style={styles.roundComponent}>
                    <Text style={styles.overlayText}>
                        <Icon source="camera" size={40} />
                    </Text>
                </View>
            </View>

            <View style={styles.bottomSection}>
                <InputDados label="Destino" value={destino} onChangeText={setDestino} /> 
                <InputDados label="Data de Partida" value={dataPartida} onChangeText={setDataPartida} /> 
                <InputDados label="Data de Retorno" value={dataRetorno} onChangeText={setDataRetorno} />
                <InputDados label="Orçamento para a viagem" value={orcamento} onChangeText={setOrcamento} />
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