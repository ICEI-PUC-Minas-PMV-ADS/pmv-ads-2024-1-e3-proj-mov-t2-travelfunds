import { doc, getDoc, setDoc, updateDoc, deleteDoc, collection } from 'firebase/firestore';
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
const deletarDocumentoEAninhados = async (docRef) => {
  try {
    // Obtenha todas as sub-coleções do documento
    const subcollectionsSnapshot = await getDoc(collection(docRef.parent, docRef.id));

    // Para cada sub-coleção, delete os documentos nela
    for (const subcollection of subcollectionsSnapshot.docs) {
      const subcollectionRef = collection(docRef, subcollection.id);
      const subcollectionDocsSnapshot = await getDoc(subcollectionRef);

      for (const subDoc of subcollectionDocsSnapshot.docs) {
        await deletarDocumentoEAninhados(subDoc.ref);
      }
    }

    // Delete o próprio documento após deletar suas sub-coleções
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Erro ao deletar sub-coleções e documentos:', error);
  }
};

const deletarUsuario = async (userId) => {
  try {
    const userRef = doc(db, nomeColecao, userId);
    await deletarDocumentoEAninhados(userRef);
    console.log('Sua conta e as viagens associadas a ela foram deletadas com sucesso!');
    return true;
  } catch (error) {
    console.error('Erro ao deletar usuário, tente novamente mais tarde.', error);
    return false;
  }
};

export { criarUsuario, recuperarUsuario, atualizarDadosUsuario, deletarUsuario, deletarDocumentoEAninhados };
