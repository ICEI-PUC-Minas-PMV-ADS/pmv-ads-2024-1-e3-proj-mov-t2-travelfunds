import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { getViagemById } from '../../services/firebase.db.viagens.js';
import { logout } from '../../services/Firebase.Auth.js';
import { Icon } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import InputButton from '../../components/InputButton.js';
import BottonSectionButtonMenu from '../../components/BottonSectionButtonMenu.js';

const Meta = ({ route }) => {
  const { viagemId } = route.params;
  const navigation = useNavigation();
  const [meta, setMeta] = useState('');
  const [destino, setDestino] = useState('');
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchMeta = async () => {
      const viagem = await getViagemById(viagemId);
      if (viagem) {
        setMeta(viagem.meta || 'Sem meta definida');
        setDestino(viagem.destino || 'Destino não encontrado');
      } else {
        // Handle error fetch meta
      }
    };
    if (isFocused) {
      fetchMeta();
    }
  }, [isFocused, viagemId]);

  const handleEditarMeta = () => {
    navigation.navigate('EditarMeta', { viagemId });
  };

  const handleGoBack = () => {
    navigation.goBack();
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
          color="#fff"
          style={styles.returnIcon}
          onPress={handleGoBack}
        />
        <View style={styles.roundComponent}>
          <Text style={styles.overlayText}>
            <Icon source="camera" size={40} />
          </Text>
        </View>
        <View style={styles.logout}>
          <InputButton text="Logout" mode="text" onPress={handleLogout} />
        </View>
      </View>
      <View style={styles.middleSection}>
      <Text style={styles.nameText}>{destino} - Meta</Text>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.bottomSectionButtons}>
          <BottonSectionButtonMenu
            text="Meta"
            mode="contained"
            backgroundColor="#8196AA"
          />
          <BottonSectionButtonMenu
            text="Contribuição"
            mode="contained"
            backgroundColor="#8196AA"
            onPress={() => navigation.navigate('Contribuicao', { viagemId })}
          />
          <BottonSectionButtonMenu
            text="Gasto"
            mode="contained"
            backgroundColor="#8196AA"
            onPress={() => navigation.navigate('Gasto', { viagemId })}
          />
        </View>
        <View style={styles.metaContainer}>
          <Text style={styles.metaValue}>{meta}</Text>
          <Ionicons
            name="brush-outline"
            size={24}
            color="white"
            onPress={handleEditarMeta}
            style={styles.metaEdit}
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
  logout: {
    position: 'absolute',
    top: 75,
    right: 30,
  },
  middleSection: {
    marginTop: '13%',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 16,
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
    width: '100%',
  },
  flatListContent: {
    paddingBottom: 20,
  },
  viagemItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  viagemText: {
    textAlign: 'left',
    maxWidth: 80,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#012B53',
  },
  viagemTextDetail: {
    fontStyle: 'italic',
    color: '#012B53',
  },
  viagemDate: {
    fontSize: 14,
    color: '#666',
  },
  addButton: {
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
    padding: 15,
  },
  addButtonText: { color: '#fff', fontSize: 16 },
  viagemCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  metaContainer: {
    // backgroundColor: '#EF4444',
    flex: 1,
    justifyContent: 'center',
  },
  metaValue: {
    color: '#22C55E',
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
    padding: 20,
  },
  metaEdit: {
    alignSelf: 'center',
    padding: 20,
  },
});

export default Meta;
