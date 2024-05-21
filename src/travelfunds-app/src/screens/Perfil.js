import React, { useState } from "react";

import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { logout } from '../services/Firebase.Auth.js';

import Ionicons from '@expo/vector-icons/Ionicons';
import InputButton from "../components/InputButton";
import BottonSectionButtonMenu from '../components/BottonSectionButtonMenu.js';

import DashboardPlanejadas from '../components/DashboardPlanejadas.js';
import DashboardConcluidas from '../components/DashboardConcluidas.js';




const Perfil = () => {
  const navigation = useNavigation();

  const [PerfilState, setPerfilState] = useState({
    planejadas: false,
    concluidas: false,
  });

  const handlePress = (text) => {
    setPerfilState({
      planejadas: text === 'Planejadas',
      concluidas: text === 'Concluidas',
    });
  };

  const handleGoBack = () => {
    setPerfilState({
      planejadas: false,
      concluidas: false,
    });
  };

  const handleLogout = async () => {
    logout();
  }


  return (
    <>

      <View style={styles.container}>

        <View style={styles.topSection}>
          <Ionicons
            name="return-up-back-outline"
            size={35}
            color="#fff"
            style={styles.returnIcon}
            onPress={handleGoBack}
          />

          <View style={styles.roundComponent}>
            <Text
              style={styles.overlayText}>
              <Icon source="camera" size={40} />
            </Text>
          </View>

          <Ionicons
            name="brush-outline"
            size={25}
            color="#fff"
            style={styles.settingsIcon}
            onPress={() => navigation.navigate('EditarPerfil')}
          />

          <View style={styles.logout}>
            <InputButton
              text="Logout"
              mode="text"
              onPress={handleLogout} />
          </View>
        </View>

        <View style={styles.middleSection}>
          <Text style={styles.nameText}>Nome</Text>
          <Text>Minhas Viagens</Text>
        </View>

        <View style={styles.bottomSection}>
          <View style={styles.bottomSectionButtons}>
            <BottonSectionButtonMenu
              text={'Planejadas'}
              mode="contained"
              onPress={() => handlePress('Planejadas')}
              backgroundColor={PerfilState.planejadas ? '#FBBF24' : '#8196AA'}
            />
            <BottonSectionButtonMenu
              text={'Concluídas'}
              mode="contained"
              onPress={() => handlePress('Concluidas')}
              backgroundColor={
                PerfilState.concluidas ? '#22C55E' : '#8196AA'
              }
            />
          </View>
          {PerfilState.planejadas && <DashboardPlanejadas />}
          {PerfilState.concluidas && <DashboardConcluidas />}
          {!PerfilState.planejadas &&
            !PerfilState.concluidas && (
              <View>
                <Text
                  style={{ color: '#fff', fontSize: 18, padding: 22 }}
                  onPress={() => navigation.navigate('ViagemMain')}
                >
                  Paris
                </Text>
              </View>
            )}
        </View>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0CBD4',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topSection: {
    flex: 1,
    width: '100%',
    backgroundColor: '#012B53',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  roundComponent: {
    width: 150,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -40,
  },
  returnIcon: {
    position: 'absolute',
    bottom: 20,
    left: 45,
  },
  settingsIcon: {
    position: 'absolute',
    top: 75,
    left: 45,
  },
  logout: {
    position: 'absolute',
    top: 65,
    right: 20,
  },
  middleSection: {
    marginTop: '13%',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 30,
    marginBottom: '2%',
  },
  bottomSection: {
    flex: 2,
    width: '90%',
    backgroundColor: '#012B53',
    padding: 10,
    marginTop: '5%',
    marginBottom: '10%',
    marginLeft: '5%',
    marginRight: '5%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bottomSectionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

});



export default Perfil;