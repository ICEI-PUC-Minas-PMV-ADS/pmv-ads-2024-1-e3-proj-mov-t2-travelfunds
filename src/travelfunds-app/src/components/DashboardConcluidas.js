import React from 'react';
import { StyleSheet, View, Text} from 'react-native';


const DashboardConcluidas = () => {

 return (
    <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.content}>
            <Text style={styles.contribBars}>
              Viagens Concluídas
            </Text>
          </View>
       </View>
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

});

export default DashboardConcluidas;