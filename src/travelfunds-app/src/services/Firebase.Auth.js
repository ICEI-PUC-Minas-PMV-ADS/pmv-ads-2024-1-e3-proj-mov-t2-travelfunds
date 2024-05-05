import { Alert } from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { criarUsuario } from "./Firebase.DB.Usuario";

const auth = FIREBASE_AUTH;

const cadastro = async (nome, email, senha) => {
  const emailFormatado = email.toLowerCase();

  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      emailFormatado,
      senha
    );
    criarUsuario(response.user.uid, emailFormatado, nome);
  } catch (error) {
    console.log(error);
    Alert.alert("Erro", `Erro ao cadastrar usuário! (${error.message})`);
  }
};

const login = async (email, senha) => {
  const emailFormatado = email.toLowerCase();

  try {
    await signInWithEmailAndPassword(
      auth,
      emailFormatado,
      senha
    );
  } catch (error) {
    console.log(error);
    Alert.alert("Erro", `Erro ao logar usuário! (${error.message})`);
  }
};

const logout = () => {
  auth.signOut();
};

export { cadastro, login, logout };
