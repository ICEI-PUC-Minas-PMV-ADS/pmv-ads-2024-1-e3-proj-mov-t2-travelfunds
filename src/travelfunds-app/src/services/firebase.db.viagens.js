import {
  doc,
  getDoc,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { FIRESTORE_DB, FIREBASE_AUTH } from '../../FirebaseConfig';

const salvarViagem = async (destino, dataPartida, dataRetorno) => {
  try {
    const user = FIREBASE_AUTH.currentUser;

    if (user) {
      const viagensCollectionRef = collection(
        doc(FIRESTORE_DB, 'usuarios', user.uid),
        'viagens'
      );
      const viagemDocRef = await addDoc(viagensCollectionRef, {
        destino,
        dataPartida,
        dataRetorno,
      });

      return viagemDocRef.id;
    }
  } catch (error) {
    console.error('Error: ', error);
    return null;
  }
};

const deletarViagem = async (viagemId) => {
  try {
    const user = FIREBASE_AUTH.currentUser;

    if (user) {
      const viagemDocRef = doc(
        FIRESTORE_DB,
        'usuarios',
        user.uid,
        'viagens',
        viagemId
      );
      await deleteDoc(viagemDocRef);
    }
  } catch (error) {
    console.error('erro deletando viagem: ', error);
  }
};

const editarViagem = async (viagemId, destino, dataPartida, dataRetorno) => {
  try {
    const user = FIREBASE_AUTH.currentUser;
    if (user) {
      const viagemDocRef = doc(
        FIRESTORE_DB,
        'usuarios',
        user.uid,
        'viagens',
        viagemId
      );
      await updateDoc(viagemDocRef, { destino, dataPartida, dataRetorno });
    }
  } catch (error) {
    console.error('erro editando viagem: ', error);
  }
};

const getViagemById = async (viagemId) => {
  try {
    const user = FIREBASE_AUTH.currentUser;
    if (user) {
      const viagemDocRef = doc(
        FIRESTORE_DB,
        'usuarios',
        user.uid,
        'viagens',
        viagemId
      );
      const viagemSnapshot = await getDoc(viagemDocRef);
      if (viagemSnapshot.exists()) {
        return viagemSnapshot.data();
      } else {
        console.error('No such document!');
        return null;
      }
    }
  } catch (error) {
    console.error('Error getting viagem by ID: ', error);
    return null;
  }
};

export { salvarViagem, deletarViagem, editarViagem, getViagemById };
