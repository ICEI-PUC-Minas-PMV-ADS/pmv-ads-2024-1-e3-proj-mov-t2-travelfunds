import { doc, getDoc, setDoc, updateDoc, deleteDoc, getFirestore } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../FirebaseConfig';

const db = FIRESTORE_DB;
const nomeColecao = 'usuarios';

const criarUsuario = async (id, email, nome) => {
  try {
    await setDoc(doc(db, nomeColecao, id), {
      email: email,
      nome: nome,
    });
  } catch (error) {
    console.log(error);
  }
};

const recuperarUsuario = async (id) => {
  const docRef = doc(db, nomeColecao, id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }

  return docSnap.data();
};

const atualizarDadosUsuario = async (id, novosDados) => {
  try {
    const usuarioRef = doc(db, nomeColecao, id);
    await updateDoc(usuarioRef, novosDados);
    console.log('Dados do usuário atualizados com sucesso!');
    return true;
  } catch (error) {
    console.error('Erro ao atualizar dados do usuário:', error);
    return false;
  }
};
const deletarUsuario = async (userId) => {
  try {
    const db = getFirestore();
    const userRef = doc(db, 'usuarios', userId);
    await deleteDoc(userRef);
    console.log('Usuário deletado com sucesso do Firestore');
    return true;
  } catch (error) {
    console.error('Erro ao deletar usuário do Firestore:', error);
    return false;
  }
};
export { criarUsuario, recuperarUsuario, atualizarDadosUsuario, deletarUsuario };
