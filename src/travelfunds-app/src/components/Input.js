import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState } from "react";

const Input = ({ label }) => {
  const [text, setText] = useState("");

  return (
    <TextInput
      style={styles.input}
      label={label}
      value={text}
      onChangeText={(text) => setText(text)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
  },
});

export default Input;
