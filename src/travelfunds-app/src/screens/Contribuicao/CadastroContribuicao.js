import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../../services/Firebase.Auth';
import { salvarContribuicao } from '../../services/Firebase.DB.Contribuicao';
import Ionicons from '@expo/vector-icons/Ionicons';
import InputButton from '../../components/InputButton';
import CustomTextInput from '../../components/CustomTextInput';
import BotaoSalvar from '../../components/BotaoSalvar';

function EditarContribuicao({ route }) {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const { viagemId } = route.params;
  const navigation = useNavigation();

  handleSaveContribuicao = async () => {
    if (!nome.trim()) {
      alert('O nome da contribuição não pode estar vazio.');
      return;
    }

    if (!/^[A-Za-z\s]+$/.test(nome.trim())) {
      alert('O nome da contribuição deve conter apenas letras.');
      return;
    }

    const valorNumerico = parseFloat(valor.trim());
    if (isNaN(valorNumerico) || valorNumerico <= 0) {
      alert('O valor da contribuição deve ser um número e maior que zero.');
      return;
    }

    const newContribuicao = { description: nome, quantia: parseFloat(valor) };
    const success = await salvarContribuicao(viagemId, newContribuicao);
    if (success) {
      navigation.goBack();
    } else {
      // handle error salvar contribuicao
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Ionicons
          name="return-up-back-outline"
          size={35}
          color="white"
          style={styles.returnIcon}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.logout}>
          <InputButton text="logout" mode="text" onPress={() => logout()} />
        </View>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.nameText}>Nome da Viagem - Contribuição</Text>
      </View>
      <View style={styles.bottomSection}>
        <CustomTextInput
          placeholder="contribuição"
          value={nome}
          onChangeText={setNome}
        />
        <CustomTextInput
          placeholder="valor"
          value={valor}
          onChangeText={setValor}
        />
        <BotaoSalvar text="Salvar" onPress={handleSaveContribuicao} />
      </View>
    </View>
  );
}
export default EditarContribuicao;

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
  returnIcon: {
    position: 'absolute',
    bottom: 20,
    left: 45,
  },
  logout: {
    position: 'absolute',
    top: 75,
    right: 30,
  },
  middleSection: {
    marginTop: '13%',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 16,
    marginBottom: '2%',
  },
  bottomSection: {
    flex: 2,
    width: '90%',
    backgroundColor: '#012B53',
    padding: 10,
    marginTop: '5%',
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
