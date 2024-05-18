import { useState } from 'react';

import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

import CustomTextInput from './CustomTextInput';
import BotaoMenor from './BotaoMenor';

import { doc, updateDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../FirebaseConfig';

export default function EditarMeta({ onSave, onCancel }) {
  const [value, setValue] = useState('');

  async function handleSave() {
    //guard clause

    // fire base logic
    const newMeta = { valor: parseFloat(value) };

    try {
      const docRef = doc(FIRESTORE_DB, 'metas', '8KucKMXcozknzgsFsZw8');
      await updateDoc(docRef, newMeta);
      onSave(newMeta);
    } catch (error) {
      console.error('error adding meta: ', error);
    }
    setValue('');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <CustomTextInput
          label="Meta"
          value={value}
          onChangeText={setValue}
          keyboardType="numeric"
          style={styles.customTextInput}
        />

        <View style={styles.inputButtonContainer}>
          <BotaoMenor
            text="Salvar"
            additionalStyles={styles.saveButton}
            onPress={handleSave}
          />

          <BotaoMenor
            text="Cancelar"
            additionalStyles={styles.cancelButton}
            onPress={onCancel}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  customTextInput: {
    marginBottom: 16,
  },
  inputButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginHorizontal: 40,
  },
  saveButton: {
    marginHorizontal: 5,
  },
  cancelButton: {
    marginHorizontal: 5,
  },
});
