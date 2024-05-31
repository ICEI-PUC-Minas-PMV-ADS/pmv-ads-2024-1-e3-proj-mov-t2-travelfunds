import { useState, useEffect } from 'react';
import { FIRESTORE_DB, FIREBASE_AUTH } from '../../../FirebaseConfig';
import { doc, onSnapshot } from 'firebase/firestore';
import { View, Text, StyleSheet } from 'react-native';

const TotalContribuicaoComponent = ({ viagemId }) => {
  const [totalContribuicao, setTotalContribuicao] = useState(0);

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

      const unsubscribe = onSnapshot(
        viagemDocRef,
        (docSnapshot) => {
          if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            const contribuicoesArray = data.contribuicoes || [];

            const totalValue = contribuicoesArray.reduce(
              (sum, item) => sum + (item.quantia || 0),
              0
            );

            console.log(
              `Total contribuição for viagemId ${viagemId}: ${totalValue}`
            );
            setTotalContribuicao(totalValue);
          } else {
            console.log('Documento de viagem não encontrado.');
            setTotalContribuicao(0);
          }
        },
        (error) => {
          console.error('Error fetching total contribuicao: ', error);
          setTotalContribuicao(0);
        }
      );

      // Cleanup subscription on unmount
      return () => unsubscribe();
    } else {
      console.log('Usuário não autenticado.');
      setTotalContribuicao(0);
    }
  }, [viagemId]);

  return (
    <View>
      <Text style={styles.viagemTextDetail}>
        contribuições{' '}
        <Text style={{ color: '#ca8a04', fontWeight: '900' }}>
          {totalContribuicao ? totalContribuicao : '0'}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viagemTextDetail: {
    fontStyle: 'italic',
    color: '#012B53',
  },
});

export default TotalContribuicaoComponent;
