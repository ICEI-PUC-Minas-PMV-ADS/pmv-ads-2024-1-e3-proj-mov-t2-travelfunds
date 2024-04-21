import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CustomTextInput from './CustomTextInput';
import InputButton from './InputButton';

const EditarMeta = ({ label }) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <CustomTextInput
        label="Meta"
        value={text}
        onChangeText={(text) => setText(text)}
        style={styles.input}
      />
      <View style={styles.inputButtonContainer}>
        <InputButton text={'Alterar'} />
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
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default EditarMeta;
