import { doc, updateDoc } from 'firebase/firestore';
import { FIRESTORE_DB, FIREBASE_AUTH } from '../../FirebaseConfig';

const salvarMeta = async (viagemId, meta) => {
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

      console.log(`Saving meta: ${meta} for viagemId: ${viagemId}`);
      await updateDoc(viagemDocRef, {
        meta,
      });

      console.log('Meta saved successfully.');
      return true;
    } else {
      console.error('No user is authenticated.');
      return false;
    }
  } catch (error) {
    console.error('Error: ', error);
    return false;
  }
};

const updateMeta = async (viagemId, meta) => {
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

      console.log(`Editing meta: ${meta} for viagemId: ${viagemId}`);
      await updateDoc(viagemDocRef, { meta });

      console.log('Meta updated successfully.');
    } else {
      console.error('No user is authenticated.');
    }
  } catch (error) {
    console.error('Erro ao atualizar meta: ', error);
  }
};

export { salvarMeta, updateMeta };
