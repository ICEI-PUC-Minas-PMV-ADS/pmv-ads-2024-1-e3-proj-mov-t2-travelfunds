import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import { Icon } from 'react-native-paper';
import { collection, onSnapshot, doc } from 'firebase/firestore';
import { FIRESTORE_DB, FIREBASE_AUTH } from '../../FirebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../services/Firebase.Auth';
import Ionicons from '@expo/vector-icons/Ionicons';
import InputButton from '../components/InputButton';
import { deletarViagem } from '../services/firebase.db.viagens';
import TotalContribuicaoComponent from './Contribuicao/TotalContribuicao';
import TotalGastoComponenent from './Gasto/TotalGasto';
import { launchImageLibrary } from 'react-native-image-picker';
import { storage, firestore } from '../../FirebaseConfig';

const Perfil = () => {
  const navigation = useNavigation();
  const [viagens, setViagens] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState(null);

  const handleDeletarViagem = async (viagemId) => {
    await deletarViagem(viagemId);
  };

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

  const selectProfileImage = () => {
    launchImageLibrary(
      { mediaType: 'photo', includeBase64: true },
      async (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.assets && response.assets.length > 0) {
          const source = { uri: response.assets[0].uri };
          setProfileImage(source);

          const { uri } = response.assets[0];
          const filename = uri.substring(uri.lastIndexOf('/') + 1);
          const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

          const storageRef = storage().ref(`profile_images/${filename}`);
          const task = storageRef.putFile(uploadUri);

          try {
            await task;

            const url = await storageRef.getDownloadURL();
            setProfileImageUrl(url);

            // Salve o URL da imagem no Firestore (assumindo que você tem um documento de perfil para o usuário atual)
            const user = FIREBASE_AUTH.currentUser;
            if (user) {
              const userDocRef = firestore().collection('users').doc(user.uid);
              await userDocRef.set({
                profileImageUrl: url,
              }, { merge: true }); // Use merge: true para mesclar novos dados com dados existentes
            }
          } catch (error) {
            console.error('Error uploading image: ', error);
            // Trate os erros de upload e de escrita no Firestore conforme necessário
          }
        }
      }
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.viagemItem}>
      <Text style={styles.viagemText}>{item.destino}</Text>
      <View>
        <Text style={styles.viagemTextDetail}>partida {item.dataPartida}</Text>
        <Text style={styles.viagemTextDetail}>retorno {item.dataRetorno}</Text>
        <Text style={styles.viagemTextDetail}>
          meta{'                '}
          <Text style={{ color: '#15803d', fontWeight: '900' }}>
            ${item.meta ? item.meta : '0'}
          </Text>
        </Text>
        <TotalContribuicaoComponent viagemId={item.id} />
        <TotalGastoComponenent viagemId={item.id} />
      </View>
      <View style={styles.viagemCard}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <Ionicons
            name="bar-chart-outline"
            size={24}
            color="#012B53"
            onPress={() => navigation.navigate('Meta', { viagemId: item.id })}
          />
          <Ionicons
            name="save-outline"
            size={24}
            color="#012B53"
            onPress={() => {}}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity>
            <Ionicons
              name="brush-outline"
              size={24}
              color="#012B53"
              onPress={() =>
                navigation.navigate('CadastroViagem', {
                  mode: 'edit',
                  viagemId: item.id,
                })
              }
            />
          </TouchableOpacity>
          <Ionicons
            name="trash-outline"
            size={24}
            color="#012B53"
            onPress={() => handleDeletarViagem(item.id)}
          />
        </View>
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
          name="notifications-outline"
          size={30}
          color="#fff"
          style={styles.returnIcon}
          onPress={() => {}}
        />
        
        <TouchableOpacity style={styles.roundComponent} onPress={selectProfileImage}>
    {profileImageUrl ? (
      <Image source={{ uri: profileImageUrl }} style={styles.profileImage} />
    ) : profileImage ? (
      <Image source={profileImage} style={styles.profileImage} />
    ) : (
      <Text style={styles.overlayText}>
        <Icon source="camera" size={40} />
      </Text>
    )}
  </TouchableOpacity>
        
        <Ionicons
          name="brush-outline"
          size={30}
          color="#fff"
          style={styles.settingsIcon}
          onPress={() => navigation.navigate('EditarPerfil')}
        />
        <View style={styles.logout}>
          <InputButton text="Logout" mode="text" onPress={handleLogout} />
        </View>
      </View>
      <View style={styles.middleSection}>
        {/* <Text style={styles.nameText}>Nome</Text> */}
        <Text>Minhas Viagens</Text>
      </View>
      <View style={styles.bottomSection}>
        <FlatList
          data={viagens}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContent}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('CadastroViagem', { mode: 'add' })}
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
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
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
  flatListContent: {
    paddingBottom: 20,
  },
  viagemItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#C0CBD4',
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
  addButton: {
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
    padding: 15,
  },
  addButtonText: { color: '#fff', fontSize: 16 },
  viagemCard: {
    justifyContent: 'space-between',
    height: 75,
    width: 100,
  },
});

export default Perfil;
