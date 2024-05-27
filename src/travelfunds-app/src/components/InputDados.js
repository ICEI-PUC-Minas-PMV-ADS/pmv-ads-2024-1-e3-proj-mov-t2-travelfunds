import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const InputDados = ({ label, value, onChangeText }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      mode="outlined"
      label={label}
      value={value}
      onChangeText={onChangeText}
      right={<TextInput.Affix text="/100" />}
      outlineColor="#FFF"
      theme={{ colors: { text: '#FFF', primary: '#FFF', placeholder: '#FFF' } }}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
    backgroundColor: 'transparent',
    width: '100%',
  },
  input: {
    backgroundColor: 'transparent',
  },
});

export default InputDados;
