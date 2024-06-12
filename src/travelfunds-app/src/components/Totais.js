import React, { useState, useEffect } from 'react';
import { FIRESTORE_DB, FIREBASE_AUTH } from '../../FirebaseConfig';
import { doc, onSnapshot } from 'firebase/firestore';
import { View, Text, StyleSheet, ToastAndroid } from 'react-native';
import {
  toastGastosContribuicoes,
  toastMeta,
  toastContribuicao,
} from './ToastNotificacoes';

const Totais = ({ viagemId }) => {
  const [totalGasto, setTotalGasto] = useState(0);
  const [totalContribuicao, setTotalContribuicao] = useState(0);
  const [viagemDestino, setViagemDestino] = useState('');
  const [meta, setMeta] = useState('');

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
            const gastosArray = data.gastos || [];
            const contribuicoesArray = data.contribuicoes || [];

            const totalGastoValue = gastosArray.reduce(
              (sum, item) => sum + (item.quantia || 0),
              0
            );

            const totalContribuicaoValue = contribuicoesArray.reduce(
              (sum, item) => sum + (item.quantia || 0),
              0
            );

            setTotalGasto(totalGastoValue);
            setTotalContribuicao(totalContribuicaoValue);
            setViagemDestino(data.destino);

            const metaValue = data.meta || '';
            setMeta(metaValue);

            toastGastosContribuicoes(
              totalGastoValue,
              totalContribuicaoValue,
              data.destino
            );
            toastMeta(metaValue, data.destino);
            toastContribuicao(totalContribuicaoValue, metaValue, data.destino);
          } else {
            setTotalGasto(0);
            setTotalContribuicao(0);
            setViagemDestino('');
            setMeta('');
          }
        },
        (error) => {
          console.error('Error fetching data: ', error);
          setTotalGasto(0);
          setTotalContribuicao(0);
          setViagemDestino('');
          setMeta('');
        }
      );

      return () => unsubscribe();
    } else {
      console.log('Usuário não autenticado.');
      setTotalGasto(0);
      setTotalContribuicao(0);
      setViagemDestino('');
      setMeta('');
    }
  }, [viagemId]);

  return (
    <View>
      <Text style={styles.viagemTextDetail}>
        Gastos{'             '}
        <Text style={{ color: '#EF4444', fontWeight: '900' }}>
          ${totalGasto ? totalGasto : '0'}
        </Text>
      </Text>
      <Text style={styles.viagemTextDetail}>
        Contribuições{' '}
        <Text style={{ color: '#ca8a04', fontWeight: '900' }}>
          ${totalContribuicao ? totalContribuicao : '0'}
        </Text>
      </Text>
      <Text style={styles.viagemTextDetail}>
        Meta{'                 '}
        <Text style={{ color: '#15803d', fontWeight: '900' }}>
          {meta ? `$${meta}` : 'definir'}
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

export default Totais;
