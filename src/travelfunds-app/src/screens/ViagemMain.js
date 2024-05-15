import React, { useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Icon, Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../services/Firebase.Auth.js';

import Ionicons from '@expo/vector-icons/Ionicons';
import BottonSectionButtonMenu from '../components/BottonSectionButtonMenu.js';

import DashboardMeta from '../components/DashboardMeta.js';
import DashboardContribuicao from '../components/DashboardContribuicao.js';
import DashboardGasto from '../components/DashboardGasto.js';

const ViagemMain = () => {
  const navigation = useNavigation();

  const [dashboardState, setDashboardState] = useState({
    meta: false,
    contribuicao: false,
    gastos: false,
  });

  const handlePress = (text) => {
    setDashboardState({
      meta: text === 'Meta',
      contribuicao: text === 'Contribuicao',
      gastos: text === 'Gastos',
    });
  };

  const handleGoBack = () => {
    setDashboardState({
      // ...dashboardState,
      meta: false,
      contribuicao: false,
      gastos: false,
    });
  };

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
            <Text style={styles.overlayText}>
              <Icon source="camera" size={35} />
            </Text>
          </View>

          <Ionicons
            name="settings-outline"
            size={35}
            color="#fff"
            style={styles.settingsIcon}
            onPress={() => navigation.navigate('Perfil')}
          />

          {/* linkar com funcionalidade de logout */}
          <View style={styles.logout}>
            <Text style={styles.logoutText}>Logout</Text>
          </View>
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.bottomSectionButtons}>
            <BottonSectionButtonMenu
              text={'Meta'}
              mode="contained"
              onPress={() => handlePress('Meta')}
              backgroundColor={dashboardState.meta ? '#22C55E' : '#8196AA'}
            />
            <BottonSectionButtonMenu
              text={'Contribuição'}
              mode="contained"
              onPress={() => handlePress('Contribuicao')}
              backgroundColor={
                dashboardState.contribuicao ? '#FBBF24' : '#8196AA'
              }
            />
            <BottonSectionButtonMenu
              text={'Gastos'}
              mode="contained"
              onPress={() => handlePress('Gastos')}
              backgroundColor={dashboardState.gastos ? '#EF4444' : '#8196AA'}
            />
          </View>
          {dashboardState.meta && <DashboardMeta />}
          {dashboardState.contribuicao && <DashboardContribuicao />}
          {dashboardState.gastos && <DashboardGasto />}
          {!dashboardState.meta &&
            !dashboardState.contribuicao &&
            !dashboardState.gastos && (
              <View>
                <Text 
                style={styles.viagemMain}>Viagem Main
                </Text>
              </View>
            )}
          {/* Viagem main text placeholder, criar maindashboard.js?  */}
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
  overlayText: {
    fontSize: 20,
    position: 'absolute',
    color: '#012B53',
  },
  bottomSection: {
    flex: 2,
    width: '90%',
    backgroundColor: '#012B53',
    padding: 10,
    marginTop: '15%',
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
    width: '100%',
  },
  viagemMain: {
    marginTop: 30,
    color: '#fff',
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
    top: 75,
    right: 45,
  },
  logoutText: {
    color: '#fff',
    fontSize: 22,
  },
});

export default ViagemMain;
