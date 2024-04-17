import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';

const CriarViagem = () => {
  
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text style={styles.title}> Criar Viagem </Text>
        <Button style={styles.photoInput} icon="camera" mode="contained" title="Adicionar foto" onPress={() => {}} color="#C0CBD4" />
      </View>
      <View style={styles.containerBottom}>
        <TextInput style={styles.containerText} label="Qual o destino?" type="outlined" color="#012B53" />
        <Button style={styles.buttonCriar} title="Criar" mode="contained" onPress={() => {}} color="#C0CBD4" labelStyle={{fontSize: 18}} label="Criar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
      backgroundColor: "#C0CBD4",
      flex: 1,
  },
  
  containerTop : {
    flex: 1,
    backgroundColor: "#012B53",
    height: "245",
    alignItems: 'center',
  },

  title :{
    color: "#fff",
    fontWeight: "semi bold",
    fontSize: "30",
    marginTop: "25%",
  },
  
   containerBottom : {
     flex:2,
     backgroundColor: "#012B53",
     width: "90%",
     borderRadius: "10",
     color:"#C0CBD4",
     marginHorizontal: '5%',
     marginTop: "10%",
     marginBottom: "5%",
  },

  containerText : {
    backgroundColor: "#012B53",
    color: "#fff",
  },

  photoInput : {
    borderRadius: "100",
    marginTop: "30%",
    width: "500",
    height: "500",
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonCriar : {
    color: "#000",
    height: "51" ,
    width: '30%',
    borderRadius: "100%",
    marginTop: "110%",
  },

});

export default CriarViagem;