import { useState, useEffect } from 'react';
import { FIRESTORE_DB, FIREBASE_AUTH } from '../../../FirebaseConfig';
import { doc, onSnapshot } from 'firebase/firestore';
import { View, Text, StyleSheet } from 'react-native';

const TotalGastoComponenent = ({ viagemId }) => {
  const [totalGasto, setTotalGasto] = useState(0);

  useEffect(() => {
    const user = FIREBASE_AUTH.currentUser;
    if (user) {
      const viagemDocRef = doc(
        FIRESTORE_DB,
        'usuarios',
        user.uid,
        'viagens',
        viagemId
      );

      const unsubscribe = onSnapshot(viagemDocRef, (docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          const gastosArray = data.gastos || [];

          const totalValue = gastosArray.reduce(
            (sum, item) => sum + (item.quantia || 0),
            0
          );
          setTotalGasto(totalValue);
        } else {
          setTotalGasto(0);
        }

        return () => unsubscribe();
      });
    }
  }, [viagemId]);

  return (
    <View>
      <Text style={styles.viagemTextDetail}>
        gastos{'             '}
        <Text style={{ color: '#EF4444', fontWeight: '900' }}>
          ${totalGasto ? totalGasto : '0'}
        </Text>
      </Text>
    </View>
  );
};
export default TotalGastoComponenent;

const styles = StyleSheet.create({
  viagemTextDetail: {
    fontStyle: 'italic',
    color: '#012B53',
  },
});
