import { doc, collection, addDoc } from 'firebase/firestore';
import { FIRESTORE_DB, FIREBASE_AUTH } from '../../FirebaseConfig';
import { Alert } from 'react-native';

const salvarViagem = async (destino, dataPartida, dataRetorno) => {
  try {
    const user = FIREBASE_AUTH.currentUser;

    if (user) {
      const viagensCollectionRef = collection(
        doc(FIRESTORE_DB, 'usuarios', user.uid),
        'viagens'
      );
      await addDoc(viagensCollectionRef, {
        destino,
        dataPartida,
        dataRetorno,
      });

      Alert.alert('Sucesso', 'Viagem salva com sucesso!');
    } else {
      Alert.alert('Erro', 'Usuário não autenticado!');
    }
  } catch (error) {
    Alert.alert('Erro', error.message);
  }
};

export { salvarViagem };
