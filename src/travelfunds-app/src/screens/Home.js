import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import InputButton from '../components/InputButton';

const Home = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View>
        <View style={style.logo}>
          <Image source={require('../../assets/travelfunds-modified 2.png')} />
        </View>
        <InputButton
          text="Log In"
          mode="contained"
          onPress={() => navigation.navigate('Login')}
          // onPress={() => navigation.navigate('ViagemMain')} // ONLY FOR TESTING FEATURES , REVERTER PARA LOGIN
        />
      </View>
      <InputButton
        text="Cadastre-se"
        mode="text"
        onPress={() => navigation.navigate('Cadastro')}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
    marginTop: 250,
  },
  logo: {
    alignItems: 'center',
    marginBottom: 25,
  },
});

export default Home;
