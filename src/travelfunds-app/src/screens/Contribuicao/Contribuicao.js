import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { getViagemById } from '../../services/Firebase.DB.Viagens';
import { logout } from '../../services/Firebase.Auth';
import Ionicons from '@expo/vector-icons/Ionicons';
import InputButton from '../../components/InputButton';

const Contribuicao = ({ route }) => {
  const { viagemId } = route.params;
  const navigation = useNavigation();

  useEffect(() => {}, []);

  const handleGoBack = () => {
    navigation.navigate('Perfil', { viagemId });
  };

  const handleLogout = async () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Ionicons
          name="return-up-back-outline"
          size={35}
          color="white"
          style={styles.returnIcon}
          onPress={handleGoBack}
        />
        <View style={styles.roundComponent}>
          <Text style={styles.overlayText}>
            <Ionicons name="camera-outline" size={40} />
          </Text>
        </View>
        <View style={styles.logout}>
          <InputButton text="Logout" mode="text" onPress={handleLogout} />
        </View>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.nameText}>Nome da Viagem - Contribuição</Text>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.bottomSectionButtons}></View>
        <View style={styles.contribuicaoContainer}>
          <FlatList />
          <Ionicons
            // style={styles.addIcon}
            name="add-circle-outline"
            size={40}
            color="white"
            onPress={() => {}}
          />
        </View>
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
  returnIcon: {
    position: 'absolute',
    bottom: 20,
    left: 45,
  },
  roundComponent: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -40,
  },
  logout: {
    position: 'absolute',
    top: 75,
    right: 30,
  },
  middleSection: {
    marginTop: '13%',
    alignItems: 'center',
  },
  nameText: {},
  bottomSection: {
    flex: 2,
    width: '98%',
    backgroundColor: '#012B53',
    padding: 10,
    marginTop: '5%',
    marginBottom: '10%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bottomSectionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  contribuicaoContainer: {},
  // addIcon: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: 30,
  // },
});
export default Contribuicao;
