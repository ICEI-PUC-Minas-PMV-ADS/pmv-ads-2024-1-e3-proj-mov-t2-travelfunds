import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CustomTextInput from './CustomTextInput';
import InputButton from './InputButton';
import DashboardGasto from './DashboardGasto';

const EditarGasto = ({ label }) => {
  const [text, setText] = useState('');

  const [hideEditarGasto, setHideEditarGasto] = useState(false);

  const toggleHideEditarGasto = () => {
    setHideEditarGasto(!hideEditarGasto);
  };

  return (
    <View style={styles.container}>
      {hideEditarGasto ? (
        <DashboardGasto />
      ) : (
          <>
          <CustomTextInput
            label="Nome do Gasto"
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
          <TouchableOpacity
            onPress={toggleHideEditarGasto}
            style={styles.editButton}
          >
            <Text style={styles.editButtonText}>Voltar</Text>
          </TouchableOpacity>

          <View style={styles.inputButtonContainer}>
            <InputButton text={'Adicionar'} />
          </View>
          </>
        )}
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
      editButton: {
        position: 'absolute',
      bottom: 0,
      left: 0,
      padding: 10,
      backgroundColor: '#8196AA',
      borderRadius: 20,
  },
      editButtonText: {
        color: '#fff',
  },
});

      export default EditarGasto;
