import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import InputButton from './InputButton';

const MetaDashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.circleMeta}>Futuro Progress Bar Circulo Meta</Text>
      </View>
      <View style={styles.inputButtonContainer}>
        <InputButton text={'Editar'} />
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
    borderWidth: 1,
    borderColor: '#22C55E',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleMeta: {
    borderWidth: 2,
    borderColor: '#22C55E',
    color: '#fff',
  },
  inputButtonContainer: {
    alignItems: 'flex-start',
  },
});

export default MetaDashboard;
