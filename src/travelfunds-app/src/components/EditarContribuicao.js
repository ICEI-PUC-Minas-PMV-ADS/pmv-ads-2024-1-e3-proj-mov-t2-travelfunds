import React, { useState, useEffect } from 'react';

import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';

import CustomTextInput from './CustomTextInput';
import BotaoMenor from './BotaoMenor';

const EditarContribuicao = ({ contribuicao, onSave, onCancel }) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    if (contribuicao) {
      setName(contribuicao.name);
      setValue(contribuicao.value.toString());
    }
  }, [contribuicao]);

  const handleSave = () => {
    const newContribuicao = { name, value: parseFloat(value) };
    onSave(newContribuicao);
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
          onPress={onCancel}
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

export default EditarContribuicao;
