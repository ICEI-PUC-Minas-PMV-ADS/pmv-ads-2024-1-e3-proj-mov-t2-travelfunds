import { atualizarDadosUsuario } from "../services/UsuarioService";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



const auth = getAuth ();


test('Atualização de dados do usuário', async () => {
  // Autentica o usuário antes de continuar com o teste
  try {
    // Autenticação do usuário usando email e senha
    await signInWithEmailAndPassword(auth, "naianna@email.com.br", "123456");
    console.log("Usuário autenticado com sucesso!");
  } catch (error) {
    console.error("Erro ao autenticar usuário:", error);
  }

  // Verifique se o usuário está autenticado antes de acessar currentUser
  const usuarioAtual = auth.currentUser;
  if (!usuarioAtual) {
    throw new Error('Nenhum usuário logado');
  }

  // Obtém o ID do usuário autenticado
  const idDoUsuario = usuarioAtual.uid;

  // Dados de teste
  const novosDados = {
    nome: "Naianna Duarte",
    email: "naianna@email.com"
  };

  // Chama a função de atualização de dados do usuário
  const resultado = await atualizarDadosUsuario(idDoUsuario, novosDados);

  // Verifica se a função retornou verdadeiro, indicando que a atualização foi bem-sucedida
  expect(resultado).toBe(true);
});
