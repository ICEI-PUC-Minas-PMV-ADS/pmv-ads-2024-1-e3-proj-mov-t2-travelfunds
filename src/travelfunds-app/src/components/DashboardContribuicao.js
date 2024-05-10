import React, { useState } from 'react';

import { StyleSheet, View, Text } from 'react-native';

import EditarContribuicao from './EditarContribuicao';
import Ionicons from '@expo/vector-icons/Ionicons';

function DashboardContribuicao() {
  const [editMode, setEditMode] = useState(false);
  const [contribuicoes, setContribuicoes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleToggleEdit(index) {
    setEditIndex(index);
    setEditMode(!editMode);
  }

  function handleSave(newContribuicao) {
    if (editIndex !== null) {
      const newContribuicoes = [...contribuicoes];
      newContribuicoes[editIndex] = newContribuicao;
      setContribuicoes(newContribuicoes);
    } else {
      setContribuicoes([...contribuicoes, newContribuicao]);
    }
    setEditIndex(null);
    setEditMode(false);
  }

  function handleDelete(index) {
    const newContribuicoes = [...contribuicoes];
    newContribuicoes.splice(index, 1);
    setContribuicoes(newContribuicoes);
  }

  function calculateTotalContribuicao() {
    return contribuicoes
      .reduce((total, contribuicao) => total + contribuicao.value, 0)
      .toFixed(2);
  }

  return (
    <View style={styles.container}>
      {editMode ? (
        <EditarContribuicao
          contribuicao={editIndex !== null ? contribuicoes[editIndex] : null}
          onSave={handleSave}
          onCancel={() => setEditMode(false)}
        />
      ) : (
        <View style={styles.content}>
          {contribuicoes.map((contribuicao, index) => (
            <View key={index} style={styles.contribuicaoItem}>
              <Text style={styles.contribuicaoText}>
                {contribuicao.name} ${contribuicao.value}
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

          <Text style={styles.totalContribuicao}>
            Total ${calculateTotalContribuicao()}
          </Text>

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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    color: '#fff',
    padding: 20,
  },
  content: {
    flex: 1,
    width: '100%',
    color: '#fff',
  },
  contribuicaoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  contribuicaoText: {
    color: '#fff',
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: '#8196AA',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: '#FBBF24',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
  totalContribuicao: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FBBF24',
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  addButtonText: {
    color: '#fff',
  },
});
export default DashboardContribuicao;
