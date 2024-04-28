import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState } from "react";

const InputSenha = ({ value, onChangeText }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <TextInput
      style={styles.input}
      label="Senha"
      value={value}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      right={
        <TextInput.Icon
          icon="eye"
          onPress={() => {
            setSecureTextEntry(!secureTextEntry);
            return false;
          }}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
  },
});

export default InputSenha;
