import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState } from "react";

const InputSenha = () => {
  const [text, setText] = useState("");

  return (
    <TextInput
      style={styles.input}
      label="Senha"
      value={text}
      onChangeText={(text) => setText(text)}
      right={<TextInput.Icon icon="eye" />}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
  },
});

export default InputSenha;
