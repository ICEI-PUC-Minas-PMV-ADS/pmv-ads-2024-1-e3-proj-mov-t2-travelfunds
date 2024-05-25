import { doc, getDoc, setDoc } from 'firebase/firestore';
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

export { criarUsuario, recuperarUsuario };

// const gastosCollection = collection(db, `${nomeColecao}/${id}/gastos`);
//     await setDoc(doc(gastosCollection), {
//       nome: '',
//       valor: '',
//     });
