import React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";

const InputSetPerfil = ({ label, placeholder, onChangeText, value }) => {
  const [text, setText] = React.useState('');

  return (
   
      <TextInput
        style={styles.input}
        mode="outlined"
        placeholder={placeholder}
        label={label}
        right={<TextInput.Affix text="/100" />}
        outlineColor="#FFF"
        color="#FFF"
        onChangeText={onChangeText}
        value={value}
        textColor='#FFFFFF'
      />
   
  );
};


const styles = StyleSheet.create({
  input: {
    margin: 19,
    backgroundColor: 'transparent',
    width: "90%",
  },
});

export default InputSetPerfil;