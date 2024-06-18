import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import { collection, onSnapshot, doc } from 'firebase/firestore';
import { FIRESTORE_DB, FIREBASE_AUTH } from '../../FirebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../services/Firebase.Auth';
import Ionicons from '@expo/vector-icons/Ionicons';
import InputButton from '../components/InputButton';
import Totais from '../components/Totais';

const Relatorio = () => {
  const navigation = useNavigation();
  const [viagens, setViagens] = useState([]);

  useEffect(() => {
    const user = FIREBASE_AUTH.currentUser;
    if (user) {
      const viagensCollection = collection(
        doc(FIRESTORE_DB, 'usuarios', user.uid),
        'viagens'
      );
      const unsubscribe = onSnapshot(viagensCollection, (viagemSnapshot) => {
        const viagemList = viagemSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setViagens(viagemList);
      });

      return () => unsubscribe();
    }
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.viagemItem}>
      <Text style={styles.viagemText}>{item.destino}</Text>
      <View>
        <Text style={styles.viagemTextDetail}>Partida: {item.dataPartida}</Text>
        <Text style={styles.viagemTextDetail}>Retorno: {item.dataRetorno}</Text>
        <Totais viagemId={item.id} />
      </View>
    </View>
  );


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
        <View style={styles.logout}>
          <InputButton text="Logout" mode="text" onPress={handleLogout} />
        </View>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.nameText}>Relatório de Viagem</Text>
      </View>
      <View style={styles.bottomSection}>
        <FlatList
          data={viagens}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContent}
        />
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
    flex: 0.5,
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
  logout: {
    position: 'absolute',
    top: 85,
    right: 20,
  },
  middleSection: {
    marginTop: '7%',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#012B53',
  },
  bottomSection: {
    flex: 2,
    width: '90%',
    padding: 10,
    marginTop: '3%',
    marginBottom: '10%',
    marginLeft: '5%',
    marginRight: '5%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  flatListContent: {
    paddingBottom: 20,
  },
  viagemItem: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 20,
    paddingRight: 90,
    paddingLeft: 90,
    marginVertical: 8,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  viagemText: {
    textAlign: 'center',
    maxWidth: 80,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#012B53',
    paddingBottom: 15, 
  },
  viagemTextDetail: {
    fontStyle: 'italic',
    color: '#012B53',
    paddingBottom: 5, 
  },
});

export default Relatorio;
