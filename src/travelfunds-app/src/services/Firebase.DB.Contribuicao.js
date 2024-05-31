import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { FIRESTORE_DB, FIREBASE_AUTH } from '../../FirebaseConfig';

const salvarContribuicao = async (viagemId, newContribuicao) => {
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

      console.log(
        `Saving contribuicao: ${JSON.stringify(
          newContribuicao
        )} in viagemId: ${viagemId}`
      );
      await updateDoc(viagemDocRef, {
        contribuicoes: arrayUnion(newContribuicao),
      });

      console.log('contribuicao salva');
      return true;
    } else {
      console.log('erro ao salvar contribuicao');
      return false;
    }
  } catch (error) {
    console.error('error: ', error);
  }
};

const deletarContribuicao = async (viagemId, contribuicaoToDelete) => {
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

      console.log(
        `Deleting contribuicao: ${JSON.stringify(
          contribuicaoToDelete
        )} from viagemId: ${viagemId}`
      );
      await updateDoc(viagemDocRef, {
        contribuicoes: arrayRemove(contribuicaoToDelete),
      });

      console.log('Contribuição deletada');
      return true;
    } else {
      console.log('Erro ao deletar contribuição: Usuário não autenticado');
      return false;
    }
  } catch (error) {
    console.error('error: ', error);
    return false;
  }
};

const updateContribuicao = async () => {
  try {
  } catch (error) {}
};

// getviagembyid function ? acho que nao

export { salvarContribuicao, deletarContribuicao };
