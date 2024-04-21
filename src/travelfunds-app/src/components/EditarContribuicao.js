import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CustomTextInput from './CustomTextInput';
import InputButton from './InputButton';

const EditarContribuicao = ({ label }) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <CustomTextInput
        label="Nome da Contribuição"
        value={text}
        onChangeText={(text) => setText(text)}
        style={styles.input}
      />
      <CustomTextInput
        label="Valor"
        value={text}
        onChangeText={(text) => setText(text)}
        style={styles.input}
      />
      <CustomTextInput
        label="Adicionar valor"
        value={text}
        onChangeText={(text) => setText(text)}
        style={styles.input}
      />
      <View style={styles.inputButtonContainer}>
        <InputButton text={'Excluir Contribuição'} />
      </View>

      <View style={styles.inputButtonContainer}>
        <InputButton text={'Adicionar'} />
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
});

export default EditarContribuicao;
