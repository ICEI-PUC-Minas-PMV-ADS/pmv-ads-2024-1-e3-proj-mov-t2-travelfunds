import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../../services/Firebase.Auth';
import Ionicons from '@expo/vector-icons/Ionicons';
import InputButton from '../../components/InputButton';
import BottonButtonsMenu from '../../components/BottonSectionButtonMenu';
import { onSnapshot, doc } from 'firebase/firestore';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../../FirebaseConfig';
import { deletarGasto } from '../../services/Firebase.DB.Gasto';

function Gasto({ route }) {
  const { viagemId } = route.params;
  const navigation = useNavigation();
  const [destino, setDestino] = useState('');
  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    const user = FIREBASE_AUTH.currentUser;
    if (user) {
      const viagemDocRef = doc(
        FIRESTORE_DB,
        'usuarios',
        user.uid,
        'viagens',
        viagemId
      );
      const unsubscribe = onSnapshot(viagemDocRef, (docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setDestino(data.destino || 'Destino não encontrado');
          setGastos(data.gastos || []);
        }
      });

      return () => unsubscribe();
    }
  }, [viagemId]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.gastoItem}>
        <Text style={styles.gastoDesc}>{item.description}</Text>
        <Text style={styles.gastoVal}>${item.quantia}</Text>
        <View style={styles.gastoIconContainer}>
          {/* <Ionicons
            name="brush-outline"
            size={24}
            color="#012B53"
            onPress={() => {}}
          /> */}
          <Ionicons
            name="trash-outline"
            size={24}
            color="#012B53"
            onPress={() => deletarGasto(viagemId, item)}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Ionicons
          name="return-up-back-outline"
          size={35}
          color="white"
          style={styles.returnIcon}
          onPress={() => navigation.navigate('Perfil', { viagemId })}
        />
        <View style={styles.logout}>
          <InputButton text="Logout" mode="text" onPress={() => logout()} />
        </View>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.nameText}>{destino} - Gasto</Text>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.bottomSectionButtons}>
          <BottonButtonsMenu
            text="Meta"
            mode="container"
            backgroundColor="#8196AA"
            onPress={() => navigation.navigate('Meta', { viagemId })}
          />
          <BottonButtonsMenu
            text="Contribuição"
            mode="container"
            backgroundColor="#8196AA"
            onPress={() => navigation.navigate('Contribuicao', { viagemId })}
          />
          <BottonButtonsMenu
            text="Gasto"
            mode="container"
            backgroundColor="#8196AA"
          />
        </View>
        <FlatList
          data={gastos}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id || index.toString()}
          contentContainerStyle={styles.flatListContent}
        />
        <Ionicons
          style={styles.addIcon}
          name="add-circle-outline"
          size={40}
          color="white"
          onPress={() => navigation.navigate('CadastroGasto', { viagemId })}
        />
      </View>
    </View>
  );
}
export default Gasto;

const styles = StyleSheet.create({
  gastoItem: {
    backgroundColor: '#8196AA',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '95%',
    borderRadius: 50,
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 2,
    borderColor: '#EF4444',
    borderWidth: 2,
  },
  gastoDesc: {
    color: '#EF4444',
    fontWeight: 'bold',
    fontSize: 16,
  },
  gastoVal: {
    color: '#EF4444',
    fontWeight: 'bold',
    fontSize: 16,
  },
  gastoIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 72,
  },
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
  contribuicaoContainer: {
    backgroundColor: 'yellow',
  },
  addIcon: {
    // backgroundColor: 'red',
  },
});
