import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CustomTextInput from './CustomTextInput';
import InputButton from './InputButton';
import MetaDashboard from './DashboardContribuicao';

const EditarContribuicao = ({ label }) => {
  const [text, setText] = useState('');

  const [hideEditarContribuicao, setHideEditarContribuicao] = useState(false);

  const toggleHideEditarContribuicao = () => {
    setHideEditarContribuicao(!hideEditarContribuicao);
  };

  return (
    <View style={styles.container}>
      {hideEditarContribuicao ? (
        <MetaDashboard />
      ) : (
      <>
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
      <TouchableOpacity
            onPress={toggleHideEditarContribuicao}
            style={styles.editButton}
          >
            <Text style={styles.editButtonText}>Voltar</Text>
          </TouchableOpacity>
      <View style={styles.inputButtonContainer}>
        <InputButton text={'Adicionar'} />
      </View>
      </>
  )
}
    </View >
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

export default EditarContribuicao;
