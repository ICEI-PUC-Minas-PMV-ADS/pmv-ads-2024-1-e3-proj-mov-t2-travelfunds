import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import InputButton from './InputButton';

const EditableItem = ({
  name,
  value,
  onChangeName,
  onChangeValue,
  onSave,
  onCancel,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={onChangeName}
        style={styles.input}
      />
      <TextInput
        placeholder="Value"
        value={value}
        onChangeText={onChangeValue}
        keyboardType="numeric"
        style={styles.input}
      />
      <View style={styles.inputButtonContainer}>
        <InputButton text={'Save'} onPress={onSave} />
        <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
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
    marginTop: 10,
  },
  cancelButton: {
    padding: 10,
    backgroundColor: '#8196AA',
    borderRadius: 20,
  },
  cancelButtonText: {
    color: '#fff',
  },
});

export default EditableItem;
