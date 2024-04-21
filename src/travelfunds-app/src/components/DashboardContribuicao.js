import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import InputButton from './InputButton';

const MetaDashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.circleMeta}>Futuras Contribuicoes</Text>
      </View>
      <View style={styles.inputButtonContainer}>
        <InputButton text={'+'} />
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
    borderColor: '#FBBF24',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleMeta: {
    borderWidth: 2,
    borderColor: '#FBBF24',
    color: '#fff',
  },
  inputButtonContainer: {
    alignItems: 'center',
  },
});

export default MetaDashboard;
