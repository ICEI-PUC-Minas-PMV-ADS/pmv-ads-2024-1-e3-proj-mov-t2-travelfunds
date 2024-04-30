// import React from 'react';
// import { useState } from 'react';
// import { StyleSheet, View, TouchableOpacity } from 'react-native';
// import EditarGasto from './EditarGasto';
// import { ProgressBar, List, Text, Icon, FAB } from 'react-native-paper';

// function DashboardGasto() {
//   const [showEditarGasto, setShowEditarGasto] = useState(false);

//   function toggleEditarGasto() {
//     setShowEditarGasto(!showEditarGasto);
//   }

//   return (
//     <View style={styles.container}>
//       {showEditarGasto ? (
//         <EditarGasto />
//       ) : (
//         <View style={styles.content}>
//           <View style={styles.content}>
//           <Text style={styles.contriBars}>Futuros Gastos com barras</Text>
//           </View>
//           <ProgressBar
//             theme={{ colors: { primary: '#EF4444' } }}
//             progress={0.9}
//           />
//           <TouchableOpacity
//             onPress={toggleEditarGasto}
//           >
//           <FAB
//           style={styles.fab}
//           icon="plus"
//         />
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: '100%',
//     color: '#fff',
//     padding: 20,
//     // borderWidth: 1,
//     // borderColor: '#EF4444',
//   },
//   content: {
//     flex: 1,
//     alignItems: 'flex-start',
//   },
//   contriBars: {
//     // borderWidth: 2,
//     // borderColor: '#EF4444',
//     marginTop: 30,
//     color: '#fff',
//   },
//   fab: {
//     backgroundColor: '#8196AA',
//     borderRadius: 50,
//     position: 'absolute',
//     margin: 16,
//     alignItems: 'center',
//     bottom: 0,
//     left: 98,
//   },
// });

// export default DashboardGasto;

import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import EditableItem from './EditableItem';

const DashboardGasto = () => {
  const [editMode, setEditMode] = useState(false);
  const [gasto, setGasto] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handleToggleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    // Save expense value
    // setEditMode(false);
    setExpenses([...expenses, gasto]);
    setEditMode(false);
  };

  return (
    <View style={styles.container}>
      {editMode ? (
        <EditableItem
          label="Gasto"
          value={gasto}
          onChangeText={setGasto}
          onSave={handleSave}
          onCancel={handleToggleEdit}
        />
      ) : (
        <View style={styles.content}>
          {expenses.map((expense, index) => (
            <Text key={index} style={styles.gastoText}>
              {expense}
            </Text>
          ))}
          <TouchableOpacity onPress={handleToggleEdit} style={styles.addButton}>
            <Text style={styles.addButtonText}>Add</Text>
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
  },
  content: {
    flex: 1,
    alignItems: 'flex-start',
  },
  gastoText: {
    marginTop: 30,
    color: '#fff',
  },
  addButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 10,
    backgroundColor: '#8196AA',
    borderRadius: 20,
  },
  addButtonText: {
    color: '#fff',
  },
});

export default DashboardGasto;
