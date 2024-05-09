import React, { useState, useEffect } from 'react';

import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';

import CustomTextInput from './CustomTextInput';
import BotaoMenor from './BotaoMenor';

const EditarGasto = ({ expense, onSave }) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    if (expense) {
      setName(expense.name);
      setValue(expense.value.toString());
    }
  }, [expense]);

  const handleSave = () => {
    const newExpense = { name, value: parseFloat(value) };
    onSave(newExpense);
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
        <BotaoMenor
          text="Salvar"
          onPress={handleSave}
          style={styles.saveButton}
        />

        <BotaoMenor
          text="Cancelar"
          onPress={handleSave}
          style={styles.saveButton}
        />
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
