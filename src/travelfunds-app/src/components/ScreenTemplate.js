import { View, Text, StyleSheet } from 'react-native';

const ScreenTemplate = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.roundComponent}>
          <Text style={styles.overlayText}>foto</Text>
        </View>
      </View>
      <View style={styles.bottomSection}></View>
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
    marginBottom: 20,
  },
  overlayText: {
    fontSize: 20,
    position: 'absolute',
    color: '#012B53',
  },
  bottomSection: {
    flex: 2,
    width: '90%',
    backgroundColor: '#012B53',
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ScreenTemplate;
