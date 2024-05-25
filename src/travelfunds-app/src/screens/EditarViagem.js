import React from "react";

import { View, Text, StyleSheet } from "react-native";

import InputSetPerfil from "../components/InputSetPerfil";
import InputButton from "../components/InputButton";
import BotaoMenor from "../components/BotaoMenor";
import Ionicons from '@expo/vector-icons/Ionicons';

import { Icon } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { logout } from '../services/Firebase.Auth.js';



const EditarViagem = () => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.navigate('ViagemMain');
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
                        <Text
                            style={styles.overlayText}>
                            <Icon source="camera" size={40} />
                        </Text>
                    </View>

                    <View style={styles.logout}>
                        <InputButton
                            text="Logout"
                            mode="text"
                            onPress={handleLogout} />
                    </View>
                </View>

                <View style={styles.bottomSection}>
                    <InputSetPerfil label="Qual seu destino?" />
                    <InputSetPerfil label="Data de Ida" />
                    <InputSetPerfil label="Data de Volta?" />
                    <BotaoMenor text="Alterar" />
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

});

export default EditarViagem; 