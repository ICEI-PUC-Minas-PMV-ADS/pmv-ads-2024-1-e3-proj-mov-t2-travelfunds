import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../FirebaseConfig';

const TotalGasto = () => {
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalContribuicao, setTotalContribuicao] = useState(0);

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

  return (
    <View style={styles.container}>
      <Text style={styles.textGasto}>${totalExpense}</Text>
      <Text style={styles.textContribuicao}>${totalContribuicao}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  textGasto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EF4444',
  },
  textContribuicao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FBBF24',
  },
});

export default TotalGasto;
