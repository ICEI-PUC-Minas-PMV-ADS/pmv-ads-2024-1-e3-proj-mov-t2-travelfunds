import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import InputSetPerfil from '../components/InputSetPerfil';
import BotaoMenor from '../components/BotaoMenor';
import BotaoDelete from '../components/BotaoDelete.js';
import { Icon, Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { atualizarDadosUsuario, deletarUsuario } from '../services/Firebase.DB.Usuarios';
import { logout } from '../services/Firebase.Auth.js';
import InputButton from '../components/InputButton.js';
import BotaoRedefinir from '../components/BotaoRedefinir.js';


const EditarPerfil = () => {
  const navigation = useNavigation();
  const [novoNome, setNovoNome] = useState('');
  const [emailRedefinicao, setEmailRedefinicao] = useState('');
  const [mostrarRedefinicaoSenha, setMostrarRedefinicaoSenha] = useState(false); // Estado para controlar a visibilidade da seção de redefinição de senha
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const authInstance = getAuth();
    setAuth(authInstance);
  }, []);

  const handleLogout = async () => {
    logout();
  };

  const handleUpdateProfile = async () => {
    try {
      if (!auth) {
        Alert.alert('Erro', 'Instância de autenticação não encontrada');
        return;
      }

      const user = auth.currentUser;
      if (!user) {
        Alert.alert('Erro', 'Usuário não autenticado');
        return;
      }

      const idDoUsuario = user.uid;

      const novosDados = {};
      if (novoNome) {
        novosDados.nome = novoNome;
      }

      if (Object.keys(novosDados).length > 0) {
        const resultado = await atualizarDadosUsuario(idDoUsuario, novosDados);
        if (!resultado) {
          Alert.alert('Erro', 'Erro ao atualizar dados no Firestore');
          return;
        }
      }

      Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
      navigation.navigate('Perfil');
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      Alert.alert('Erro', 'Erro ao atualizar perfil');
    }
  };

  const handlePasswordReset = async () => {
    try {
      if (!emailRedefinicao) {
        Alert.alert('Erro', 'O campo de email não pode estar vazio');
        return;
      }

      await sendPasswordResetEmail(auth, emailRedefinicao);
      Alert.alert('Sucesso', 'Email para redefinição de senha enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar email de redefinição de senha:', error);
      Alert.alert('Erro', 'Erro ao enviar email de redefinição de senha');
    }

    navigation.navigate('Perfil');
  };

  const confirmarExclusaoPerfil = () => {
    Alert.alert(
      'Confirmação',
      'Tem certeza que deseja deletar o perfil?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        { text: 'Deletar', onPress: () => handleDeleteProfile() },
      ],
      { cancelable: false }
    );
  };

  const handleDeleteProfile = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        Alert.alert('Erro', 'Usuário não autenticado');
        return;
      }

      const idDoUsuario = user.uid;

      const deletarUsuarioResultado = await deletarUsuario(idDoUsuario);
      if (!deletarUsuarioResultado) {
        Alert.alert('Erro', 'Erro ao deletar usuário no Firestore');
        return;
      }
      await user.delete();

      logout();
    } catch (error) {
      console.error('Erro ao deletar perfil:', error);
      Alert.alert('Erro', 'Erro ao deletar perfil');
    }
  };

  return (
    <>
      <Header title={'Editar Perfil'} goBack={() => navigation.goBack()}>
        <Appbar.Action icon="dots-vertical" color="white" onPress={() => {}} />
      </Header>

      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <Text style={styles.textoBoasVindas}>
            Olá!
          </Text>
          <View style={styles.logout}>
            <InputButton text="Logout" mode="text" onPress={handleLogout} />
          </View>
        </View>

        <View style={styles.zonaInput}>
          <InputSetPerfil
            placeholder="Novo nome de perfil"
            value={novoNome}
            onChangeText={setNovoNome}
          />
          <BotaoMenor 
            style={styles.botoes}
            text="Confirmar" 
            onPress={handleUpdateProfile} 
          />
          {!mostrarRedefinicaoSenha && (
            <BotaoRedefinir 
              text="Redefinir Senha" 
              onPress={() => setMostrarRedefinicaoSenha(true)} 
            />
          )}
          
          {mostrarRedefinicaoSenha && (
            <>
              <InputSetPerfil 
                placeholder="Email para redefinição de senha"
                value={emailRedefinicao}
                onChangeText={setEmailRedefinicao}
              />
              <Text style={styles.textoInfo}>*O email para redefinição de senha deverá ser o mesmo email de cadastro.</Text>
              <View style={styles.botoes}>
                <BotaoMenor text="Redefinir Senha" onPress={handlePasswordReset} /> 
              </View>
            </>
            
          )}

        <BotaoDelete text="Deletar Perfil" onPress={confirmarExclusaoPerfil} />

          
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0CBD4',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cabecalho: {
    flex: 0.5,
    width: '100%',
    backgroundColor: '#012B53',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logout: {
    position: 'absolute',
    top: -30,
    right: 30, 
  },
  zonaInput: {
    flex: 2,
    width: '90%',
    backgroundColor: '#012B53',
    padding: 10,
    marginTop: '10%',
    marginBottom: '40%',
    marginLeft: '5%',
    marginRight: '5%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
  },
  textoBoasVindas: {
    fontSize: 30, 
    color: '#fff',
    marginBottom: '12%',
  },
  botoes: { 
    flexDirection: 'row',
    marginTop: 10,
  },
  textoInfo: {
    color: '#fff',
    marginLeft: 5,
    fontSize:10,
  }
});

export default EditarPerfil;
