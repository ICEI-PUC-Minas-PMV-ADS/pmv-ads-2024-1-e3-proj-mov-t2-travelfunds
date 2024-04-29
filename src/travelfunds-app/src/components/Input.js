import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState } from "react";

const Input = ({ label, value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      label={label}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
  },
});

export default Input;
