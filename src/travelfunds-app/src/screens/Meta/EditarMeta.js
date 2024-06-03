import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { salvarMeta } from '../../services/Firebase.DB.Meta';
import { Icon } from 'react-native-paper';
import { logout } from '../../services/Firebase.Auth';
import Ionicons from '@expo/vector-icons/Ionicons';
import InputButton from '../../components/InputButton';
import CustomTextInput from '../../components/CustomTextInput';
import BotaoMenor from '../../components/BotaoMenor';

const EditarMeta = ({ route, navigation }) => {
  const { viagemId } = route.params;
  const [meta, setMeta] = useState('');

  const handleSaveMeta = async () => {
    if (meta.trim() !== '') {
      const metaValue = parseFloat(meta.trim());

      if (isNaN(metaValue) || metaValue <= 0) {
        alert('A meta deve ser um número e maior que zero.');
        return;
      }

      const success = await salvarMeta(viagemId, metaValue);
      if (success) {
        navigation.goBack();
      } else {
        // Handle error salvar meta
      }
    } else {
      // Handle value vazio
    }
  };

  const handleGoBack = () => {
    navigation.navigate('Meta', { viagemId });
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
          style={styles.input}
          placeholder="inserir meta"
          onChangeText={(text) => setMeta(text)}
          value={meta}
        />
        <BotaoMenor
          style={styles.button}
          onPress={handleSaveMeta}
          text="Salvar"
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

export default EditarMeta;
