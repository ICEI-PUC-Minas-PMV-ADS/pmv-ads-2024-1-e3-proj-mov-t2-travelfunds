// import React, { useState } from 'react';
// import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// import CustomTextInput from './CustomTextInput';
// import InputButton from './InputButton';
// import Dashboard from './DashboardMeta';

// const EditarMeta = ({ }) => {
//   const [text, setText] = useState('');

//   const [hideEditarMeta, setHideEditarMeta] = useState(false);

//   const toggleHideEditarMeta = () => {
//     setHideEditarMeta(!hideEditarMeta);
//   };

//   return (
//     <View style={styles.container}>
//        {hideEditarMeta ? (
//       <Dashboard />
//     ) : (
//       <>
//       <CustomTextInput
//         label="Meta"
//         value={text}
//         onChangeText={(text) => setText(text)}
//         style={styles.input}
//       />
//       <View style={styles.inputButtonContainer}>
//         <InputButton text={'Alterar'} />
//       </View>
//       <TouchableOpacity
//             onPress={toggleHideEditarMeta}
//             style={styles.editButton}
//           >
//             <Text style={styles.editButtonText}>Voltar</Text>
//           </TouchableOpacity>
//           </>
//           )}
//     </View>
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

// export default EditarMeta;

import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import EditableItem from './EditableItem';

const EditarMeta = () => {
  const [editMode, setEditMode] = useState(false);
  const [meta, setMeta] = useState('');

  const handleToggleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    // Save meta value
    setEditMode(false);
  };

  return (
    <View style={styles.container}>
      {editMode ? (
        <EditableItem
          label="Meta"
          value={meta}
          onChangeText={setMeta}
          onSave={handleSave}
          onCancel={handleToggleEdit}
        />
      ) : (
        <TouchableOpacity onPress={handleToggleEdit} style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Meta</Text>
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

export default EditarMeta;
