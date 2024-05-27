import { doc, collection, addDoc } from 'firebase/firestore';
import { FIRESTORE_DB, FIREBASE_AUTH } from '../../FirebaseConfig';

const salvarViagem = async (
  destino,
  dataPartida,
  dataRetorno
  // meta,
  // gastos,
  // contribuicoes
) => {
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
        // meta,
        // gastos: [],
        // contribuicoes: [],
      });

      return viagemDocRef.id; // documento ID
    }
  } catch (error) {
    console.error('Error: ', error);
    return null;
  }
};

export { salvarViagem };
