import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottonButtonsMenu from '../components/BottonButtonsMenu.js';
import MetaDashboard from '../components/MetaDashboard.js';
import ContribuicaoDashboard from '../components/ContribuicaoDashboard.js';
import GastosDashboard from '../components/GastosDashboard.js';

const ViagemMain = () => {
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

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.roundComponent}>
          <Text style={styles.overlayText}>foto</Text>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.bottomSectionButtons}>
          <BottonButtonsMenu
            text={'Meta'}
            mode="contained"
            onPress={() => handlePress('Meta')}
            backgroundColor={dashboardState.meta ? '#22C55E' : '#8196AA'}
          />
          <BottonButtonsMenu
            text={'Contribuicao'}
            mode="contained"
            onPress={() => handlePress('Contribuicao')}
            backgroundColor={
              dashboardState.contribuicao ? '#FBBF24' : '#8196AA'
            }
          />
          <BottonButtonsMenu
            text={'Gastos'}
            mode="contained"
            onPress={() => handlePress('Gastos')}
            backgroundColor={dashboardState.gastos ? '#EF4444' : '#8196AA'}
          />
        </View>
        {dashboardState.meta && <MetaDashboard />}
        {dashboardState.contribuicao && <ContribuicaoDashboard />}
        {dashboardState.gastos && <GastosDashboard />}
      </View>
    </View>
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
    marginBottom: 20,
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
    marginTop: '5%',
    marginBottom: '5%',
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
});

export default ViagemMain;
