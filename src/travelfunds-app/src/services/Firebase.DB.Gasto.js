import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { FIRESTORE_DB, FIREBASE_AUTH } from '../../FirebaseConfig';

const salvarGasto = async (viagemId, newGasto) => {
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
      await updateDoc(viagemDocRef, { gastos: arrayUnion(newGasto) });
      return true;
    }
  } catch (error) {
    console.error('error: ', error);
  }
};

const deletarGasto = async (viagemId, gastoToDelete) => {
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
      await updateDoc(viagemDocRef, { gastos: arrayRemove(gastoToDelete) });
      return true;
    }
  } catch (error) {
    console.error('error: ', error);
  }
};

const updateGasto = () => {};

export { salvarGasto, deletarGasto };
