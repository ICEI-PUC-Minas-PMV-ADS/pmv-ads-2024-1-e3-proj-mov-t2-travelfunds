import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import InputSetPerfil from "../components/InputSetPerfil";
import BotaoMenor from "../components/BotaoMenor";
import TextTop from "../components/TextTop";
import { Icon } from "react-native-paper";




const EditarPerfil = () => {

    return (

        <View style={styles.container}>

            <View style={styles.topSection}>
                <TextTop text="Perfil" />
                <View style={styles.roundComponent}>
                    <Text
                        style={styles.overlayText}>
                        <Icon source="camera" size={40} />
                    </Text>
                </View>
            </View>

            <View style={styles.bottomSection}>
                <InputSetPerfil label="foto do perfil" />
                <InputSetPerfil label="nome do perfil" />
                <InputSetPerfil label="email" />
                <InputSetPerfil label="senha" />

                <BotaoMenor text="Confirmar" />
            </View>

        </View>

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

});

export default EditarPerfil; 