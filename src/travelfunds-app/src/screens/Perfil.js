import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Icon, Appbar } from "react-native-paper";
import { collection, getDocs } from "firebase/firestore";
import { FIRESTORE_DB } from '../../FirebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../services/Firebase.Auth';
import Ionicons from '@expo/vector-icons/Ionicons';
import InputButton from "../components/InputButton";

const Perfil = () => {
  const navigation = useNavigation();
  const [viagens, setViagens] = useState([]);

  useEffect(() => {
    const fetchViagens = async () => {
      const viagensCollection = collection(FIRESTORE_DB, 'viagens');
      const viagemSnapshot = await getDocs(viagensCollection);
      const viagemList = viagemSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setViagens(viagemList);
    };
    fetchViagens();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('DetalhesViagem', { viagemId: item.id })}>
      <View style={styles.viagemItem}>
        <Text style={styles.viagemText}>{item.destino}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleGoBack = () => {
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
            onPress={handleLogout}
          />
        </View>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.nameText}>Nome</Text>
        <Text>Minhas Viagens</Text>
      </View>
      <View style={styles.bottomSection}>
        <FlatList
          data={viagens}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={() => navigation.navigate('CadastroViagem')}
        >
          <Text style={styles.addButtonText}>Adicionar +</Text>
        </TouchableOpacity>
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

    addButton: {
        alignSelf: 'flex-start',
        backgroundColor: 'transparent',
        padding: 15,
    },
    addButtonText: { color: '#fff', fontSize: 16 }
});

export default Perfil;