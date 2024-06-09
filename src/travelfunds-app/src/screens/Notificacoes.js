import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import InputButton from '../components/InputButton';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../services/Firebase.Auth';

function Notificacoes() {
  const navigation = useNavigation();
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
        <View style={styles.roundComponent}>
          <Text style={styles.overlayText}>
            <Ionicons name="camera-outline" size={40} />
          </Text>
        </View>
        <View style={styles.logout}>
          <InputButton text="Logout" mode="text" onPress={logout} />
        </View>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.nameText}>Notificações</Text>
      </View>
      <View style={styles.bottomSection}></View>
    </View>
  );
}
export default Notificacoes;

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
});
