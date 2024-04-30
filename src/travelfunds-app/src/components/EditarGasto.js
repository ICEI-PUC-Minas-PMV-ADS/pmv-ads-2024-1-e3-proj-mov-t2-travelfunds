import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const EditarGasto = ({ expense, onSave, onCancel }) => {
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
    <View style={styles.container}>
      <TextInput
        placeholder="Nome gasto"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Valor Gasto"
        value={value}
        onChangeText={setValue}
        keyboardType="numeric"
        style={styles.input}
      />
      <View style={styles.inputButtonContainer}>
        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  inputButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    backgroundColor: '#8196AA',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
  },
  cancelButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
  },
});

export default EditarGasto;
