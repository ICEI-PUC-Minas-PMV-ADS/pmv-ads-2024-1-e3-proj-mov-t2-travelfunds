import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../FirebaseConfig';

const TotalGasto = () => {
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalContribuicao, setTotalContribuicao] = useState(0);
  const [meta, setMeta] = useState(0);

  useEffect(() => {
    const fetchExpensesData = async () => {
      try {
        const docRef = doc(FIRESTORE_DB, 'gastos', 'SguHhNyRXWRKlXke8jfP');
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          const expensesData = docSnapshot.data().expenses || [];
          const total = expensesData.reduce((acc, expense) => {
            const expenseValue = parseFloat(expense.valor);
            if (!isNaN(expenseValue)) {
              return acc + expenseValue;
            }
            return acc;
          }, 0);
          setTotalExpense(total.toFixed(2));
        }
      } catch (error) {
        console.error('Error fetching expenses: ', error);
      }
    };

    fetchExpensesData();
  }, []);

  useEffect(() => {
    const fetchContribuicoesData = async () => {
      try {
        const docRef = doc(
          FIRESTORE_DB,
          'contribuicoes',
          '1fvzTRRxoWC6asC5Y322'
        );
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          const contribuicoesData = docSnapshot.data().contribuicoes || [];
          const total = contribuicoesData.reduce((acc, contribuicao) => {
            const contribuicaoValue = parseFloat(contribuicao.valor);
            if (!isNaN(contribuicaoValue)) {
              return acc + contribuicaoValue;
            }
            return acc;
          }, 0);
          setTotalContribuicao(total.toFixed(2));
        }
      } catch (error) {
        console.error('error fetching contribuicoes: ', error);
      }
    };
    fetchContribuicoesData();
  }, []);

  useEffect(() => {
    const fetchMetaData = async () => {
      try {
        const docRef = doc(FIRESTORE_DB, 'metas', '8KucKMXcozknzgsFsZw8');
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          const metaData = docSnapshot.data().valor;
          setMeta(parseFloat(metaData).toFixed(2));
        }
      } catch (error) {
        console.error('error fetching meta: ', error);
      }
    };
    fetchMetaData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textMeta}>${meta}</Text>
      <Text style={styles.textContribuicao}>${totalContribuicao}</Text>
      <Text style={styles.textGasto}>${totalExpense}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 48,
  },
  textMeta: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#22C55E',
    marginBottom: 12,
  },
  textContribuicao: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FBBF24',
    marginBottom: 12,
  },
  textGasto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#EF4444',
  },
});

export default TotalGasto;
