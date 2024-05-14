import React, { useState, useEffect } from 'react';

import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';

import CustomTextInput from './CustomTextInput';
import BotaoMenor from './BotaoMenor';

import { doc, setDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../FirebaseConfig';

const EditarGasto = ({ expense, onSave, onCancel }) => {
  // const [name, setName] = useState('');
  // const [value, setValue] = useState('');

  // useEffect(() => {
  //   if (expense) {
  //     setName(expense.name);
  //     setValue(expense.value.toString());
  //   }
  // }, [expense]);

  // const handleSave = () => {
  //   if (typeof name !== 'string' || name.trim() === '' || /^\d+$/.test(name)) {
  //     alert('Por favor inserir um gasto válido.');
  //     return;
  //   }

  //   const numericValue = parseFloat(value);
  //   if (isNaN(numericValue) || numericValue <= 0) {
  //     alert('Por favor inserir um gasto válido.');
  //     return;
  //   }

  //   const newExpense = { name, value: numericValue };
  //   onSave(newExpense);
  //   setName('');
  //   setValue('');
  // };
  const [name, setName] = useState(expense ? expense.nome : '');
  const [value, setValue] = useState(expense ? expense.valor.toString() : '');

  const handleSave = async () => {
    if (!name.trim() || isNaN(parseFloat(value))) {
      alert('Por favor, insira um gasto válido.');
      return;
    }

    const newExpense = { nome: name, valor: parseFloat(value) };

    try {
      const docRef = doc(FIRESTORE_DB, 'gastos', 'SguHhNyRXWRKlXke8jfP');
      await setDoc(docRef, newExpense, { merge: true });
      onSave(newExpense);
    } catch (error) {
      console.error('Error adding expense: ', error);
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

export default EditarGasto;
