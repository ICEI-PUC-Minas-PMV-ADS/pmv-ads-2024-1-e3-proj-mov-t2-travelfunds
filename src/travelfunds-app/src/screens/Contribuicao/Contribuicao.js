import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../../services/Firebase.Auth';
import Ionicons from '@expo/vector-icons/Ionicons';
import InputButton from '../../components/InputButton';
import BottonSectionButtonMenu from '../../components/BottonSectionButtonMenu';
import { onSnapshot, doc } from 'firebase/firestore';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../../FirebaseConfig';
import { deletarContribuicao } from '../../services/Firebase.DB.Contribuicao';

const Contribuicao = ({ route }) => {
  const { viagemId } = route.params;
  const navigation = useNavigation();
  const [destino, setDestino] = useState('');
  const [contribuicoes, setContribuicoes] = useState([]);

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
          setContribuicoes(data.contribuicoes || []);
        }
      });

      return () => unsubscribe();
    }
  }, [viagemId]);

  const renderItem = ({ item }) => (
    <View style={styles.contribuicaoItem}>
      <Text style={styles.contribuicaoDesc}>{item.description}</Text>
      <Text style={styles.contribuicaoVal}>${item.quantia}</Text>
      <View style={styles.contribuicaoIconContainer}>
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
          onPress={() => deletarContribuicao(viagemId, item)}
        />
      </View>
    </View>
  );

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
        <View style={styles.roundComponent}>
          <Text style={styles.overlayText}>
            <Ionicons name="camera-outline" size={40} />
          </Text>
        </View>
        <View style={styles.logout}>
          <InputButton text="Logout" mode="text" onPress={() => logout()} />
        </View>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.nameText}>{destino} - Contribuição</Text>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.bottomSectionButtons}>
          <BottonSectionButtonMenu
            text="Meta"
            mode="contained"
            backgroundColor="#8196AA"
            onPress={() => navigation.navigate('Meta', { viagemId })}
          />
          <BottonSectionButtonMenu
            text="Contribuição"
            mode="contained"
            backgroundColor="#8196AA"
          />
          <BottonSectionButtonMenu
            text="Gasto"
            mode="contained"
            backgroundColor="#8196AA"
            onPress={() => navigation.navigate('Gasto', { viagemId })}
          />
        </View>
        <FlatList
          data={contribuicoes}
          renderItem={renderItem}
          // keyExtractor={(item) => item.description}
          keyExtractor={(item, index) => item.id || index.toString()}
          contentContainerStyle={styles.flatListContent}
        />
        <Ionicons
          style={styles.addIcon}
          name="add-circle-outline"
          size={40}
          color="white"
          onPress={() =>
            navigation.navigate('CadastroContribuicao', { viagemId })
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contribuicaoItem: {
    backgroundColor: '#8196AA',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '95%',
    borderRadius: 50,
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 2,
    borderColor: '#FBBF24',
    borderWidth: 2,
  },
  contribuicaoDesc: {
    color: '#FBBF24',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contribuicaoVal: {
    color: '#FBBF24',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contribuicaoIconContainer: {
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
    // marginBottom: 100,
  },
});
export default Contribuicao;
