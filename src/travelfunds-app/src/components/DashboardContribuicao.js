import { useState } from 'react';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import EditarContribuicao from './EditarContribuicao';
import { ProgressBar, FAB } from 'react-native-paper';

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
            <Text style={styles.contribBars}>
              Futuras Contribuicoes com barras
            </Text>
          </View>
          <ProgressBar
            theme={{ colors: { primary: '#FBBF24' } }}
            progress={0.9}
          />
          <View>
          <TouchableOpacity
            onPress={toggleEditarContribuicao}
          >
          <FAB
          style={styles.fab}
          icon="plus"
        />
          </TouchableOpacity>
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
    // borderWidth: 1,
    // borderColor: '#FBBF24',
  },
  content: {
    flex: 1,
    alignItems: 'flex-start',
  },
  contribBars: {
    // borderWidth: 2,
    // borderColor: '#FBBF24',
    marginTop: 30,
    color: '#fff',
  },
  fab: {
    backgroundColor: '#8196AA',
    borderRadius: 50,
    position: 'absolute',
    margin: 16,
    alignItems: 'center',
    bottom: 0,
    left: 98,
  },
});

export default MetaDashboard;
