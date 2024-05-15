import React, { useState, useEffect } from 'react';

import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';

import CustomTextInput from './CustomTextInput';
import BotaoMenor from './BotaoMenor';


const EditarViagensPlanejadas = ({ viagem, onSave, onCancel }) => {
    const [name, setName] = useState('');
    const [initialDate, setinitialDate] = useState('');
    const [finalDate, setfinalDate] = useState('');

    useEffect(() => {
        if (viagem) {
            setName(viagem.name);
            setinitialDate(viagem.initialDate.toString());
            setfinalDate(viagem.finalDate.toString());
        }
    }, [viagem]);

    const handleSave = () => {
        if (typeof name !== 'string' || name.trim() === '' || /^\d+$/.test(name)) {
            alert('Por favor, insira uma viagem válida.');
            return;
        }

        const numericValue = parseFloat(initialDate, finalDate);
        if (isNaN(numericValue) || numericValue <= 0) {
            alert('Por favor, insira uma viagem válida.');
            return;
        }

        const newViagem = { name, initialDate: numericValue, finalDate: numericValue };
        onSave(newViagem);
        setName('');
        setinitialDate('');
        setfinalDate('');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.innerContainer}>
                <CustomTextInput
                    label="Destino"
                    value={name}
                    onChangeText={setName}
                    style={styles.customTextInput}
                />
                <CustomTextInput
                    label="Data de ida"
                    value={initialDate}
                    onChangeText={setinitialDate}
                    keyboardType="numeric"
                    style={styles.customTextInput}
                />
                <CustomTextInput
                    label="Data de volta"
                    value={finalDate}
                    onChangeText={setfinalDate}
                    keyboardType="numeric"
                    style={styles.customTextInput}
                />
            </View>

            <View style={styles.inputButtonContainer}>
                <BotaoMenor text="Salvar" onPress={handleSave} />

                <BotaoMenor text="Cancelar" onPress={onCancel} />
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      innerContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
      },
      customTextInput: {
        marginBottom: 16,
      },
      inputButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 20,
      },
});

export default EditarViagensPlanejadas;