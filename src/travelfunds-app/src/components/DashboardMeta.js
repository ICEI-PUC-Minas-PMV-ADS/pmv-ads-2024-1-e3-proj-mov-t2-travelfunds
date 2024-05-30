// DELETAR ARQUIVO ? METADASHBOARD NO LONGER AGORA USANDO META.JS EM SCREENS

// import { useEffect, useState } from 'react';

// import { View, Text, StyleSheet } from 'react-native';

// import { doc, getDoc } from 'firebase/firestore';
// import { FIRESTORE_DB } from '../../FirebaseConfig';

// import EditarMeta from './EditarMeta';
// import Ionicons from '@expo/vector-icons/Ionicons';

// export default function DashboardMeta() {
//   const [editMode, setEditMode] = useState(false);
//   const [meta, setMeta] = useState('');

//   useEffect(() => {
//     async function fetchMeta() {
//       try {
//         const docRef = doc(FIRESTORE_DB, 'metas', '8KucKMXcozknzgsFsZw8');
//         const docSnapshot = await getDoc(docRef);
//         if (docSnapshot.exists()) {
//           const metaData = docSnapshot.data();
//           setMeta(metaData);
//         }
//       } catch (error) {
//         console.error('error fetching meta: ', error);
//       }
//     }
//     fetchMeta();
//   }, []);

//   function handleToggleEdit() {
//     setEditMode(!editMode);
//   }

//   function handleSave(newMeta) {
//     setMeta(newMeta);
//     setEditMode(false);
//   }

//   return (
//     <View style={styles.container}>
//       {editMode ? (
//         <EditarMeta onSave={handleSave} onCancel={() => setEditMode(false)} />
//       ) : (
//         <View style={styles.metaContainer}>
//           <Text style={styles.metaValue}>$ {meta.valor}</Text>

//           <Ionicons
//             name="brush-outline"
//             size={24}
//             color="white"
//             onPress={handleToggleEdit}
//             style={styles.metaEdit}
//           />
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//     color: '#fff',
//     padding: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   metaContainer: {
//     // backgroundColor: '#EF4444',
//     height: 200,
//     width: 200,
//   },
//   metaValue: {
//     color: '#22C55E',
//     fontWeight: 'bold',
//     fontSize: 30,
//     alignSelf: 'center',
//     padding: 20,
//   },
//   metaEdit: {
//     alignSelf: 'center',
//     padding: 20,
//   },
// });
