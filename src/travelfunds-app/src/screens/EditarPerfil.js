import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState, useEffect} from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import InputSetPerfil from "../components/InputSetPerfil";
import BotaoMenor from "../components/BotaoMenor";
import { Icon, Appbar } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import Header from "../components/Header";
import { getAuth} from 'firebase/auth';
import { atualizarDadosUsuario } from "../services/Firebase.DB.Usuarios";
import { logout } from '../services/Firebase.Auth.js';
import InputButton from "../components/InputButton.js";



const EditarPerfil = () => {
    const navigation = useNavigation();
    const [novoNome, setNovoNome] = useState('');
    const [auth, setAuth] = useState(null);

    const handleGoBack = () => {
        navigation.navigate('Perfil');
    };

    const handleLogout = async () => {
      logout();
  }
  
    useEffect(() => {
      const auth = getAuth();
      setAuth(auth);
    }, []);


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
      };

      return (
        <>
        <Header
        title={'Editar Perfil'} goBack={() => navigation.goBack()}>
        <Appbar.Action icon="dots-vertical" color="white" onPress={() => {}} />
        </Header>

            <View style={styles.container}>

                <View style={styles.cabecalho}>
                    <Ionicons
                        name="return-up-back-outline"
                        size={35}
                        color="#fff"
                        style={styles.returnIcon}
                        onPress={handleGoBack}
                    />

                    <View style={styles.fotoUsuario}>
                        <Text
                            style={styles.overlayText}>
                            <Icon source="camera" size={40} />
                        </Text>
                    </View>

                    <View style={styles.logout}>
                        <InputButton
                            text="Logout"
                            mode="text"
                            onPress={handleLogout} 
                            />
                    </View>
                </View>


                <View style={styles.zonaInput}>
                    <InputSetPerfil placeholder="foto do perfil" />
                    <InputSetPerfil 
                    placeholder="Nome do Perfil" 
                    value={novoNome} 
                    onChangeText={setNovoNome}
                     />
                    <InputSetPerfil placeholder="email" />
                    <InputSetPerfil placeholder="senha" />
                    <BotaoMenor 
                    text="Confirmar"
                    onPress={handleUpdateProfile} />
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
        width: '100%',
        backgroundColor: '#012B53',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    fotoUsuario: {
        width: 150,
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -40,
    },
    returnIcon: {
        position: 'absolute',
        bottom: 20,
        left: 45,
    },
    logout: {
        position: 'absolute',
        top: -20,
        right: 40,
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
        marginTop: '15%',
        marginBottom: '10%',
        marginLeft: '5%',
        marginRight: '5%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

});
export default EditarPerfil; 