import { Alert } from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = FIREBASE_AUTH;

const cadastro = async (email, senha) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email.toLowerCase(),
      senha
    );
    console.log(response);
  } catch (error) {
    console.log(error);
    Alert.alert("Erro", `Erro ao cadastrar usuário! (${error.message})`);
  }
};

const login = async (email, senha) => {
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      email.toLowerCase(),
      senha
    );
    console.log(response);
  } catch (error) {
    console.log(error);
    Alert.alert("Erro", `Erro ao logar usuário! (${error.message})`);
  }
};

const logout = () => {
  auth.signOut();
};

export { cadastro, login, logout };
