import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CustomTextInput from './CustomTextInput';
import InputButton from './InputButton';
import DashboardPlanejadas from './DashboardPlanejadas';

const EditarViagensPlanejadas = ({ label }) => {
    const [text, setText] = useState('');

    const [hideEditarViagensPlanejadas, setHideEditarViagensPlanejadas] = useState(false);

    const toggleHideEditarViagensPlanejadas = () => {
        setHideEditarViagensPlanejadas(!hideEditarViagensPlanejadas);
    };

    return (
        <View style={styles.container}>
            {hideEditarViagensPlanejadas? (
                <DashboardPlanejadas />
            ) : (
                <>
                    <CustomTextInput
                        label="Nome da Viagem"
                        value={text}
                        onChangeText={(text) => setText(text)}
                        style={styles.input}
                    />
                    <TouchableOpacity
                        onPress={toggleHideEditarViagensPlanejadas}
                        style={styles.editButton}
                    >
                        <Text style={styles.editButtonText}>Voltar</Text>
                    </TouchableOpacity>
                    <View style={styles.inputButtonContainer}>
                        <InputButton text={'Adicionar'} />
                    </View>
                </>
            )
            }
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        color: '#fff',
        padding: 20,
        position: 'relative',
    },
    input: {
        marginBottom: 16,
    },
    inputButtonContainer: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    editButton: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: 10,
        backgroundColor: '#8196AA',
        borderRadius: 20,
    },
    editButtonText: {
        color: '#fff',
    },
});

export default EditarViagensPlanejadas;