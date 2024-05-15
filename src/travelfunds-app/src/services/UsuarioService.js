import { doc,updateDoc} from "firebase/firestore";
import { FIRESTORE_DB } from "../../FirebaseConfig";


const db = FIRESTORE_DB;
const nomeColecao = "usuarios";

const atualizarDadosUsuario = async (id, novosDados) => {
    try {
      const usuarioRef = doc(db, nomeColecao, id);
      await updateDoc(usuarioRef, novosDados);
      console.log("Dados do usuário atualizados com sucesso!");
      return true; 
    } catch (error) {
      console.error("Erro ao atualizar dados do usuário:", error);
      return false;
    }
  };

  export {atualizarDadosUsuario};