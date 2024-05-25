import React, { useState } from 'react';

import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';

import CustomTextInput from './CustomTextInput';
import BotaoMenor from './BotaoMenor';

import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../FirebaseConfig';

const EditarGasto = ({ expense, onSave, onCancel }) => {
  const [name, setName] = useState(expense ? expense.nome : '');
  const [value, setValue] = useState(expense ? expense.valor.toString() : '');

  const handleSave = async () => {
    if (
      !name.trim() ||
      name.length > 20 ||
      !/^[A-Za-z]+$/.test(name) ||
      isNaN(parseFloat(value))
    ) {
      alert('Por favor, insira um gasto valido');
      return;
    }

    const newExpense = { nome: name, valor: parseFloat(value) };

    try {
      const docRef = doc(FIRESTORE_DB, 'gastos', 'SguHhNyRXWRKlXke8jfP');
      await updateDoc(docRef, {
        expenses: arrayUnion(newExpense),
      });
      onSave(newExpense);
    } catch (error) {
      console.error('Error adding expense: ', error);
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
      alert('Por favor, insira um gasto valido');
      return;
    }

    const updatedExpense = { nome: name, valor: parseFloat(value) };

    try {
      const docRef = doc(FIRESTORE_DB, 'gastos', 'SguHhNyRXWRKlXke8jfP');
      await updateDoc(docRef, {
        expenses: arrayRemove(expense),
      });
      await updateDoc(docRef, {
        expenses: arrayUnion(updatedExpense),
      });
      onSave(updatedExpense);
    } catch (error) {
      console.error('Error updating expense: ', error);
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
        {expense ? (
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

export default EditarGasto;
