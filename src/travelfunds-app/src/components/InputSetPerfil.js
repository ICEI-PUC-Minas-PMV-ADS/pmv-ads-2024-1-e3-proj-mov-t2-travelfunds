import React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from "react-native";

const InputSetPerfil = ({ label, placeholder }) => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      style={styles.input}
      mode="outlined"
      placeholder= {placeholder}
      label= {label} 
      right={<TextInput.Affix text="/100" />}
      outlineColor="#FFF"
      color="#FFF"
    />
  );
};


const styles = StyleSheet.create({
    input: {
        margin: 10, 
        backgroundColor: 'transparent',
        width: "100%",
    },
  });

export default InputSetPerfil;