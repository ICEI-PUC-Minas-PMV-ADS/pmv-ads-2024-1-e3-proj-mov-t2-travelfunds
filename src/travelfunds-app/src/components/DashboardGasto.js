import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import EditarGasto from './EditarGasto';
import { ProgressBar, List, Text, Icon, FAB } from 'react-native-paper';


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
          <Text style={styles.contriBars}>Futuros Gastos com barras</Text>
          </View>
          <ProgressBar
            theme={{ colors: { primary: '#EF4444' } }}
            progress={0.9}
          />
          <TouchableOpacity
            onPress={toggleEditarGasto}
          >
          <FAB
          style={styles.fab}
          icon="plus"
        />
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
    // borderWidth: 1,
    // borderColor: '#EF4444',
  },
  content: {
    flex: 1,
    alignItems: 'flex-start',
  },
  contriBars: {
    // borderWidth: 2,
    // borderColor: '#EF4444',
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

export default DashboardGasto;
