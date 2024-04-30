import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CustomTextInput from './CustomTextInput';
import InputButton from './InputButton';

const EditableItem = ({ label, value, onChangeText, onSave, onCancel }) => {
  return (
    <View style={styles.container}>
      <CustomTextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
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
  },
  inputButtonContainer: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
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
