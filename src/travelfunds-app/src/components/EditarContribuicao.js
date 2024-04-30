// import React, { useState } from 'react';
// import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// import CustomTextInput from './CustomTextInput';
// import InputButton from './InputButton';
// import MetaDashboard from './DashboardContribuicao';

// const EditarContribuicao = ({ label }) => {
//   const [text, setText] = useState('');

//   const [hideEditarContribuicao, setHideEditarContribuicao] = useState(false);

//   const toggleHideEditarContribuicao = () => {
//     setHideEditarContribuicao(!hideEditarContribuicao);
//   };

//   return (
//     <View style={styles.container}>
//       {hideEditarContribuicao ? (
//         <MetaDashboard />
//       ) : (
//       <>
//       <CustomTextInput
//         label="Nome da Contribuição"
//         value={text}
//         onChangeText={(text) => setText(text)}
//         style={styles.input}
//       />
//       <CustomTextInput
//         label="Valor"
//         value={text}
//         onChangeText={(text) => setText(text)}
//         style={styles.input}
//       />
//       <CustomTextInput
//         label="Adicionar valor"
//         value={text}
//         onChangeText={(text) => setText(text)}
//         style={styles.input}
//       />
//       <TouchableOpacity
//             onPress={toggleHideEditarContribuicao}
//             style={styles.editButton}
//           >
//             <Text style={styles.editButtonText}>Voltar</Text>
//           </TouchableOpacity>
//       <View style={styles.inputButtonContainer}>
//         <InputButton text={'Adicionar'} />
//       </View>
//       </>
//   )
// }
//     </View >
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: '100%',
//     color: '#fff',
//     padding: 20,
//     position: 'relative',
//   },
//   input: {
//     marginBottom: 16,
//   },
//   inputButtonContainer: {
//     margin: 20,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//   },
//   editButton: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     padding: 10,
//     backgroundColor: '#8196AA',
//     borderRadius: 20,
//   },
//   editButtonText: {
//     color: '#fff',
//   },
// });

// export default EditarContribuicao;

import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import EditableItem from './EditableItem';

const EditarContribuicao = () => {
  const [editMode, setEditMode] = useState(false);
  const [contribuicao, setContribuicao] = useState('');

  const handleToggleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    // Save contribution value
    setEditMode(false);
  };

  return (
    <View style={styles.container}>
      {editMode ? (
        <EditableItem
          label="Contribuicao"
          value={contribuicao}
          onChangeText={setContribuicao}
          onSave={handleSave}
          onCancel={handleToggleEdit}
        />
      ) : (
        <TouchableOpacity onPress={handleToggleEdit} style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Contribution</Text>
        </TouchableOpacity>
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
  editButton: {
    padding: 10,
    backgroundColor: '#8196AA',
    borderRadius: 20,
  },
  editButtonText: {
    color: '#fff',
  },
});

export default EditarContribuicao;
