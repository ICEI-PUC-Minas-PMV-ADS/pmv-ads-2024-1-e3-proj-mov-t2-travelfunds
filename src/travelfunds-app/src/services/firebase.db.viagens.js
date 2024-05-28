import { doc, collection, addDoc, deleteDoc } from 'firebase/firestore';
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

      return viagemDocRef.id; // documento ID
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

const editarViagem = async () => {};

export { salvarViagem };
export { deletarViagem };
export { editarViagem };
