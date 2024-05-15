import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../FirebaseConfig';

const TotalGasto = () => {
  const [totalExpense, setTotalExpense] = useState(0);

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

  return (
    <View style={styles.container}>
      <Text style={styles.text}>${totalExpense}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EF4444',
  },
});

export default TotalGasto;
