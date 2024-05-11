import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

import CustomTextInput from './CustomTextInput';
import BotaoMenor from './BotaoMenor';

export default function EditarMeta() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <CustomTextInput label="Meta" style={styles.customTextInput} />

        <View style={styles.inputButtonContainer}>
          <BotaoMenor text="Salvar" additionalStyles={styles.saveButton} />

          <BotaoMenor text="Cancelar" additionalStyles={styles.cancelButton} />
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
