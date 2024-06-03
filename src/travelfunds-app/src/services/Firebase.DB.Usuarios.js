import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
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

export { criarUsuario, recuperarUsuario, atualizarDadosUsuario };
