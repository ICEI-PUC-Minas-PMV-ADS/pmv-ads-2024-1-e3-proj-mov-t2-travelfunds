import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BottonSectionButtonMenu from '../components/BottonSectionButtonMenu.js';
import Header from "../components/Header";
import { Icon, Appbar } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import InputButton from '../components/InputButton';




const Perfil = () => {
    const navigation = useNavigation();

    const [PerfilState, setPerfilState] = useState({
        planejadas: false,
        concluidas: false,
    });

    const handlePress = (text) => {
        setPerfilState({
            planejadas: text === 'Planejadas',
            concluidas: text === 'Concluidas',
        });
    };



    return (
        <>
            <Header
                title={'Perfil'}>
                <Appbar.Action icon="dots-vertical" onPress={() => { }} />
            </Header>

            <View style={styles.container}>

                <View style={styles.topSection}>
                    <View style={styles.roundComponent}>
                        <Text
                            style={styles.overlayText}>
                            <Icon source="camera" size={40} />
                        </Text>
                    </View>
                    <View style={styles.editarPerfil}>
                        <InputButton
                            onPress={() => navigation.navigate('EditarPerfil')}
                            text="Editar"
                        />
                    </View>
                </View>

                <View style={styles.middleSection}>
                    <Text style={styles.nameText}>Nome</Text>
                    <Text>Minhas Viagens</Text>
                    <View style={styles.middleSectionButtons}>
                        <BottonSectionButtonMenu
                            text={'Planejadas'}
                            mode="contained"
                            onPress={() => handlePress('Planejadas')}
                            backgroundColor={PerfilState.planejadas ? '#22C55E' : '#8196AA'}
                        />
                        <BottonSectionButtonMenu
                            text={'Concluídas'}
                            mode="contained"
                            onPress={() => handlePress('Concluidas')}
                            backgroundColor={
                                PerfilState.concluidas ? '#FBBF24' : '#8196AA'
                            }
                        />
                    </View>
                    {PerfilState.planejadas && <DashboardViagensPlanejadas />}
                    {PerfilState.concluidas && <DashboardViagensConcluidas />}
                </View>

                <View style={styles.bottomSection}>
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
    editarPerfil: {
        position: 'absolute',
        left: 20,
        top: -60,
    },
    middleSection: {
        marginTop: '13%',
        alignItems: 'center',
    },
    nameText: {
        fontSize: 30,
        marginBottom: '2%',
    },
    middleSectionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '4%',
    },
    bottomSection: {
        flex: 2,
        width: '90%',
        backgroundColor: '#012B53',
        padding: 10,
        marginTop: '5%',
        marginBottom: '10%',
        marginLeft: '5%',
        marginRight: '5%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

});



export default Perfil; 