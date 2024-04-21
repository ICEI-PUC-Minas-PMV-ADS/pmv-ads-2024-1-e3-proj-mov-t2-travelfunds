import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import EditarGasto from './EditarGasto';

function DashboardGasto() {
  const [showEditarGasto, setShowEditarGasto] = useState(false);

  function toggleEditarGasto() {
    setShowEditarGasto(!showEditarGasto);
  }

  return (
    <View style={styles.container}>
      {showEditarGasto ? (
        <EditarGasto />
      ) : (
        <View style={styles.content}>
          <View style={styles.content}>
            <Text style={styles.circleMeta}>Futuros Gastos</Text>
          </View>
          <TouchableOpacity
            onPress={toggleEditarGasto}
            style={styles.editButton}
          >
            <Text style={styles.editButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    color: '#fff',
    padding: 20,
    borderWidth: 1,
    borderColor: '#EF4444',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleMeta: {
    borderWidth: 2,
    borderColor: '#EF4444',
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

export default DashboardGasto;
