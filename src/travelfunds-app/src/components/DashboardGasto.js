import React, { useState, useEffect } from 'react';

import { StyleSheet, View, Text } from 'react-native';

import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../FirebaseConfig';

import EditarGasto from './EditarGasto';
import Ionicons from '@expo/vector-icons/Ionicons';

const DashboardGasto = () => {
  const [editMode, setEditMode] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const docRef = doc(FIRESTORE_DB, 'gastos', 'SguHhNyRXWRKlXke8jfP');
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          const expensesData = docSnapshot.data().expenses || [];
          setExpenses(expensesData);
        }
      } catch (error) {
        console.error('Error fetching expenses: ', error);
      }
    };

    fetchExpenses();
  }, []);

  const handleToggleEdit = (index) => {
    setEditIndex(index);
    setEditMode(!editMode);
  };

  const handleSave = (newExpense) => {
    if (editIndex !== null) {
      const newExpenses = [...expenses];
      newExpenses[editIndex] = newExpense;
      setExpenses(newExpenses);
    } else {
      setExpenses([...expenses, newExpense]);
    }
    setEditIndex(null);
    setEditMode(false);
  };

  const handleDelete = async (index) => {
    try {
      const docRef = doc(FIRESTORE_DB, 'gastos', 'SguHhNyRXWRKlXke8jfP');
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        const expenses = snapshot.data().expenses || [];
        const newExpenses = [...expenses];
        newExpenses.splice(index, 1);
        await updateDoc(docRef, { expenses: newExpenses });
        setExpenses(newExpenses);
      }
    } catch (error) {
      console.error('Error deleting expense: ', error);
    }
  };

  const calculateTotalExpense = () => {
    return expenses
      .reduce((total, expense) => total + expense.valor, 0)
      .toFixed(2);
  };

  return (
    <View style={styles.container}>
      {editMode ? (
        <EditarGasto
          expense={editIndex !== null ? expenses[editIndex] : null}
          onSave={handleSave}
          onCancel={() => setEditMode(false)}
        />
      ) : (
        <View style={styles.content}>
          {expenses.map((expense, index) => (
            <View key={index} style={styles.expenseItem}>
              <Text style={styles.gastoText}>
                {expense.nome} ${expense.valor}
              </Text>
              <View style={styles.buttonContainer}>
                <Ionicons
                  name="brush-outline"
                  size={24}
                  color="white"
                  onPress={() => handleToggleEdit(index)}
                />
                <Ionicons
                  name="trash-outline"
                  size={24}
                  color="white"
                  onPress={() => handleDelete(index)}
                  style={{ marginLeft: 30 }}
                />
              </View>
            </View>
          ))}

          <Text style={styles.totalExpense}>
            Total ${calculateTotalExpense()}
          </Text>

          <View style={styles.addButton}>
            <Ionicons
              onPress={() => handleToggleEdit(null)}
              name="add-circle-outline"
              size={40}
              color="#fff"
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    color: '#fff',
    padding: 20,
  },
  content: {
    flex: 1,
    width: '100%',
    color: '#fff',
  },
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  gastoText: {
    color: '#fff',
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: '#8196AA',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: '#FF6347',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
  totalExpense: {
    marginTop: 24,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EF4444',
    alignSelf: 'center',
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  addButtonText: {
    color: '#fff',
  },
});

export default DashboardGasto;
