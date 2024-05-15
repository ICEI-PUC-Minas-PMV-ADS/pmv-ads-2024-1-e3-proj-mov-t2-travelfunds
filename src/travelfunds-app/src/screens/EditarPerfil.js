import React from "react";
import { useState, useEffect} from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import InputSetPerfil from "../components/InputSetPerfil";
import BotaoMenor from "../components/BotaoMenor";
import Header from "../components/Header";
import { Icon, Appbar } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { getAuth, currentUser } from 'firebase/auth';
import { atualizarDadosUsuario } from "../services/UsuarioService";


const EditarPerfil = () => {
    const navigation = useNavigation();
    const [novoNome, setNovoNome] = useState('');
    const [auth, setAuth] = useState(null);
  
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
    
          const novosDados = {
            nome: novoNome, // novoNome é o novo nome que foi alterado no estado do componente
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

            <View style={styles.topSection}>
                <View style={styles.roundComponent}>
                    <Text
                        style={styles.overlayText}>
                        <Icon source="camera" size={40} />
                    </Text>
                </View>
            </View>

            <View style={styles.bottomSection}>
                <InputSetPerfil label="foto do perfil" />
                <InputSetPerfil 
                label="Nome do Perfil" 
                value={novoNome} 
                onChangeText={setNovoNome} 
                />
                <InputSetPerfil 
                label="email"
                 />
                <InputSetPerfil label="senha" />
                <BotaoMenor 
                text="Confirmar"
                onPress={handleUpdateProfile} 
                
                 />
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
    topSection: {
        flex: 1,
        width: '100%',
        backgroundColor: '#012B53',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    roundComponent: {
        width: 150,
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -40,
    },
    bottomSection: {
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