import { useState } from 'react';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import EditarContribuicao from './EditarContribuicao';

const MetaDashboard = () => {
  const [showEditarContribuicao, setShowEditarContribuicao] = useState(false);

  function toggleEditarContribuicao() {
    setShowEditarContribuicao(!showEditarContribuicao);
  }

  return (
    <View style={styles.container}>
      {showEditarContribuicao ? (
        <EditarContribuicao />
      ) : (
        <View style={styles.content}>
          <View style={styles.content}>
            <Text style={styles.circleMeta}>Futuras Contribuicoes</Text>
          </View>
          <TouchableOpacity
            onPress={toggleEditarContribuicao}
            style={styles.editButton}
          >
            <Text style={styles.editButtonText}>+</Text>
          </TouchableOpacity>
        </View>
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

export default MetaDashboard;
