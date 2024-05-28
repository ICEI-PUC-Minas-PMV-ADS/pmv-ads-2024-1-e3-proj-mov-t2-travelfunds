import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputDados from '../components/InputDados';
import CustomTextInput from '../components/CustomTextInput';
import BotaoSalvar from '../components/BotaoSalvar';
import { Icon } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { salvarViagem } from '../services/firebase.db.viagens';
import { editarViagem } from '../services/firebase.db.viagens';
import { getViagemById } from '../services/firebase.db.viagens';
import Ionicons from '@expo/vector-icons/Ionicons';
import InputButton from '../components/InputButton';

const CadastroViagem = () => {
  const [destino, setDestino] = useState('');
  const [dataPartida, setDataPartida] = useState('');
  const [dataRetorno, setDataRetorno] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { mode, viagemId } = route.params;

  useEffect(() => {
    if (mode === 'edit') {
      const loadViagemData = async () => {
        const viagemData = await getViagemById(viagemId);
        setDestino(viagemData.destino);
        setDataPartida(viagemData.dataPartida);
        setDataRetorno(viagemData.dataRetorno);
      };
      loadViagemData();
    }
  }, [mode, viagemId]);

  const handleSalvarViagem = async () => {
    if (mode === 'add') {
      await salvarViagem(destino, dataPartida, dataRetorno);
    } else if (mode === 'edit') {
      await editarViagem(viagemId, destino, dataPartida, dataRetorno);
    }
    navigation.goBack();
  };

  const handleGoBack = () => {
    navigation.navigate('Perfil');
  };

  const handleLogout = async () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Ionicons
          name="return-up-back-outline"
          size={35}
          color="#fff"
          style={styles.returnIcon}
          onPress={handleGoBack}
        />
        <View style={styles.roundComponent}>
          <Text style={styles.overlayText}>
            <Icon source="camera" size={40} />
          </Text>
        </View>
        <View style={styles.logout}>
          <InputButton text="Logout" mode="text" onPress={handleLogout} />
        </View>
      </View>

      <View style={styles.bottomSection}>
        <CustomTextInput
          label="Destino"
          value={destino}
          onChangeText={setDestino}
        />
        <CustomTextInput
          label="Data de Partida"
          value={dataPartida}
          onChangeText={setDataPartida}
        />
        <CustomTextInput
          label="Data de Retorno"
          value={dataRetorno}
          onChangeText={setDataRetorno}
        />
        <BotaoSalvar
          text={mode === 'add' ? 'Salvar' : 'Alterar'}
          onPress={handleSalvarViagem}
        />
      </View>
    </View>
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
  returnIcon: {
    position: 'absolute',
    bottom: 20,
    left: 45,
  },
  settingsIcon: {
    position: 'absolute',
    top: 75,
    left: 45,
  },
  logout: {
    position: 'absolute',
    top: 65,
    right: 20,
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
  overlayText: {
    color: '#999',
  },
});

export default CadastroViagem;
