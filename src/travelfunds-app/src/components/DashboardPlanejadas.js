import { useState } from 'react';
 import React from 'react';
 import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
 import EditarPlanejadas from './EditarPlanejadas';
 import { ProgressBar, FAB } from 'react-native-paper';

 const DashboardPlanejadas = () => {
   const [showEditarPlanejadas, setShowEditarPlanejadas] = useState(false);

   function toggleEditarPlanejadas() {
     setShowEditarPlanejadas(!showEditarPlanejadas);
   }

  return (
     <View style={styles.container}>
      {showEditarPlanejadas ? (
         <EditarPlanejadas />
       ) : (
         <View style={styles.content}>
           <View style={styles.content}>
             <Text style={styles.contribBars}>
               Viagens Planejadas
             </Text>
           </View>
           <ProgressBar
             theme={{ colors: { primary: '#FBBF24' } }}
             progress={0.9}
           />
           <View>
           <TouchableOpacity
             onPress={toggleEditarPlanejadas}
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
   },
   content: {
     flex: 1,
     alignItems: 'flex-start',
   },
   contribBars: {
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

 export default DashboardPlanejadas;