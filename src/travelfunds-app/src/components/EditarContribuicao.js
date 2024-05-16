import React, { useState } from 'react';

import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';

import CustomTextInput from './CustomTextInput';
import BotaoMenor from './BotaoMenor';

import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../FirebaseConfig';

const EditarContribuicao = ({ contribuicao, onSave, onCancel }) => {
  const [name, setName] = useState(contribuicao ? contribuicao.nome : '');
  const [value, setValue] = useState(
    contribuicao ? contribuicao.valor.toString() : ''
  );

  const handleSave = async () => {
    if (
      !name.trim() ||
      name.length > 20 ||
      !/^[A-Za-z]+$/.test(name) ||
      isNaN(parseFloat(value))
    ) {
      alert('Por favor, insira uma contribuição válida');
      return;
    }

    const newContribuicao = { nome: name, valor: parseFloat(value) };

    try {
      const docRef = doc(FIRESTORE_DB, 'contribuicoes', '1fvzTRRxoWC6asC5Y322');
      await updateDoc(docRef, {
        contribuicoes: arrayUnion(newContribuicao),
      });
      onSave(newContribuicao);
    } catch (error) {
      console.log('error adding contribuicao: ', error);
    }

    setName('');
    setValue('');
  };

  const handleUpdate = async () => {
    if (
      !name.trim() ||
      name.length > 20 ||
      !/^[A-Za-z]+$/.test(name) ||
      isNaN(parseFloat(value))
    ) {
      alert('Por favor, insira uma contribuição válida');
      return;
    }

    const updateContribuicao = { nome: name, valor: parseFloat(value) };

    try {
      const docRef = doc(FIRESTORE_DB, 'contribuicoes', '1fvzTRRxoWC6asC5Y322');

      await updateDoc(docRef, { contribuicoes: arrayRemove(contribuicao) });
      await updateDoc(docRef, {
        contribuicoes: arrayUnion(updateContribuicao),
      });
      onSave(updateContribuicao);
    } catch (error) {
      console.error('error updating contribuicao: ', error);
    }

    setName('');
    setValue('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <CustomTextInput
          label="Nome"
          value={name}
          onChangeText={setName}
          style={styles.customTextInput}
        />
        <CustomTextInput
          label="Valor"
          value={value}
          onChangeText={setValue}
          keyboardType="numeric"
          style={styles.customTextInput}
        />
      </View>

      <View style={styles.inputButtonContainer}>
        {contribuicao ? (
          <>
            <BotaoMenor text="Atualizar" onPress={handleUpdate} />
            <BotaoMenor text="Cancelar" onPress={onCancel} />
          </>
        ) : (
          <>
            <BotaoMenor text="Salvar" onPress={handleSave} />
            <BotaoMenor text="Cancelar" onPress={onCancel} />
          </>
        )}
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

export default EditarContribuicao;
