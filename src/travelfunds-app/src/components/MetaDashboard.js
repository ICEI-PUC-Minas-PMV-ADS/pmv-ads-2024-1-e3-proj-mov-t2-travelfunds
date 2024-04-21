import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import EditarMeta from './EditarMeta';

const Dashboard = () => {
  const [showEditarMeta, setShowEditarMeta] = useState(false);

  const toggleEditarMeta = () => {
    setShowEditarMeta(!showEditarMeta);
  };

  return (
    <View style={styles.container}>
      {showEditarMeta ? (
        <EditarMeta />
      ) : (
        <View style={styles.content}>
          <Text style={styles.circleMeta}>
            <Text style={styles.circleMetaText}>Meta</Text>
          </Text>
          <TouchableOpacity
            onPress={toggleEditarMeta}
            style={styles.editButton}
          >
            <Text style={styles.editButtonText}>Editar</Text>
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
    position: 'relative',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleMeta: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: '#22C55E',
    color: '#fff',
    marginBottom: 20,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  circleMetaText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    transform: [{ translateY: 80 }, { translateX: 65 }],
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

export default Dashboard;
