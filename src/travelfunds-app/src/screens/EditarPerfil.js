import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import InputSetPerfil from '../components/InputSetPerfil';
import BotaoMenor from '../components/BotaoMenor';
import BotaoDelete from '../components/BotaoDelete.js';
import { Icon, Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import { getAuth } from 'firebase/auth';
import { atualizarDadosUsuario, deletarUsuario } from '../services/Firebase.DB.Usuarios';
import { logout } from '../services/Firebase.Auth.js';
import InputButton from '../components/InputButton.js';

const EditarPerfil = () => {
  const navigation = useNavigation();
  const [novoNome, setNovoNome] = useState('');
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    setAuth(auth);
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

      if (!novoNome) {
        Alert.alert('Erro', 'O campo de nome não pode estar vazio');
        return;
      }

      const novosDados = {
        nome: novoNome,
      };

      const resultado = await atualizarDadosUsuario(idDoUsuario, novosDados);
      if (resultado) {
        Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
      } else {
        Alert.alert('Erro', 'Erro ao atualizar perfil');
      }
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      Alert.alert('Erro', 'Erro ao atualizar perfil');
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

      // Deletar usuário do Firestore
      const deletarUsuarioResultado = await deletarUsuario(idDoUsuario);
      if (!deletarUsuarioResultado) {
        Alert.alert('Erro', 'Erro ao deletar usuário no Firestore');
        return;
      }

      // Deletar usuário autenticado
      await user.delete();

      // Realizar o logout após deletar
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
            placeholder="Novo nome do perfil"
            value={novoNome}
            onChangeText={setNovoNome}
          />
          <InputSetPerfil placeholder="email" />
          <InputSetPerfil placeholder="senha" />
          <View style={styles.botoes}>
            <BotaoDelete text="Deletar Perfil" onPress={confirmarExclusaoPerfil} />
            <BotaoMenor text="Confirmar" onPress={handleUpdateProfile} />
          </View>
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
  
  returnIcon: {
    position: 'absolute',
    bottom: 120,
    left: 45,
  },
  logout: {
    position: 'absolute',
    top: -30,
    right: 30, 
  },
  logoutText: {
    color: '#fff',
    fontSize: 17,
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
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textoBoasVindas: {
    fontSize: 30, 
    color: '#fff',
    marginBottom: '12%',
  },
  botoes: { 
    flexDirection: 'row',
  }
});
export default EditarPerfil;
