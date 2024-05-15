import { useState } from 'react';
import React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import EditarPlanejadas from './EditarPlanejadas';
import Ionicons from '@expo/vector-icons/Ionicons';


const DashboardPlanejadas = () => {
  const [editMode, setEditMode] = useState(false);
  const [viagens, setViagens] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleToggleEdit = (index) => {
    setEditIndex(index);
    setEditMode(!editMode);
  };

  const handleSave = (newViagem) => {
    if (editIndex !== null) {
      const newViagens = [...viagens];
      newViagens[editIndex] = newViagem;
      setViagens(newViagens);
    } else {
      setViagens([...viagens, newViagem]);
    }
    setEditIndex(null);
    setEditMode(false);
  };

  const handleDelete = (index) => {
    const newViagens = [...viagens];
    newViagens.splice(index, 1);
    setViagens(newViagens);
  };

  return (
    <View style={styles.container}>
      {editMode ? (
        <EditarPlanejadas
          viagem={editIndex !== null ? viagens[editIndex] : null}
          onSave={handleSave}
          onCancel={() => setEditMode(false)}
        />
      ) : (
        <View style={styles.content}>
          {viagens.map((viagem, index) => (
            <View key={index} style={styles.viagemItem}>
              <Text style={styles.viagemText}>
                {viagem.name} (Ida: {viagem.initialDate})
              </Text>
              <View style={styles.buttonContainer}>
                <Ionicons
                  name="brush-outline"
                  size={24}
                  color="white"
                  onPress={() => handleToggleEdit(index)}
                />
                <Ionicons
                  name="trash-outline"
                  size={24}
                  color="white"
                  onPress={() => handleDelete(index)}
                  style={{ marginLeft: 30 }}
                />
              </View>
            </View>
          ))}

          <View style={styles.addButton}>
            <Ionicons
              onPress={() => handleToggleEdit(null)}
              name="add-circle-outline"
              size={40}
              color="#fff"
            />
          </View>
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
  },
  content: {
    flex: 1,
    alignItems: 'flex-start',
  },
  viagemItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  viagemText: {
    color: '#fff',
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'relative',
    left: 70,
  },
  editButton: {
    backgroundColor: '#8196AA',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: '#FF6347',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
  addButton: {
    justifyContent: 'center',
    position: 'relative',
    left: 125,
    marginTop: 30,
  },
  addButtonText: {
    color: '#fff',
  },
});

export default DashboardPlanejadas;