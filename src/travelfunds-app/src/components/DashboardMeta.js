import { useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';

import EditarMeta from './EditarMeta';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function DashboardMeta() {
  const [editMode, setEditMode] = useState(false);

  function handleToggleEdit() {
    setEditMode(!editMode);
  }

  function handleSave() {}

  return (
    <View style={styles.container}>
      {editMode ? (
        <EditarMeta onSave={handleSave} onCancel={() => setEditMode(false)} />
      ) : (
        <View style={styles.metaContainer}>
          <Text style={styles.metaValue}>$valormeta</Text>
          <Ionicons
            name="brush-outline"
            size={24}
            color="white"
            onPress={handleToggleEdit}
            style={styles.metaEdit}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    color: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  metaContainer: {
    // backgroundColor: '#EF4444',
    height: 200,
    width: 200,
  },
  metaValue: {
    color: '#22C55E',
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
    padding: 20,
  },
  metaEdit: {
    alignSelf: 'center',
    padding: 20,
  },
});
