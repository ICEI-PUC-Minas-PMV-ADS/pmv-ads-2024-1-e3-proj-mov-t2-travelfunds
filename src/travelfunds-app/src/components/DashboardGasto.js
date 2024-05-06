import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import EditarGasto from './EditarGasto';
import Ionicons from '@expo/vector-icons/Ionicons';

const DashboardGasto = () => {
  const [editMode, setEditMode] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

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

  const handleDelete = (index) => {
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
  };

  const calculateTotalExpense = () => {
    return expenses
      .reduce((total, expense) => total + expense.value, 0)
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
                {expense.name} ${expense.value}
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => handleToggleEdit(index)}
                  style={styles.editButton}
                >
                  <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleDelete(index)}
                  style={styles.deleteButton}
                >
                  <Text style={styles.buttonText}>Deletar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
          <Text style={styles.totalExpense}>
            ${calculateTotalExpense()} Total
          </Text>
          <TouchableOpacity
            onPress={() => handleToggleEdit(null)}
            style={styles.addButton}
          >
            {/* <Text style={styles.addButtonText}>+</Text> */}
            <Ionicons
              name="add-circle-outline"
              size={40}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
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
    padding: 20,
  },
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  gastoText: {
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginTop: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  addButton: {
    // position: 'absolute',
    // bottom: 0,
    // left: '50%',
    // padding: 10,
    // // backgroundColor: '#8196AA',
    // borderRadius: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 30,
  },
  addButtonText: {
    color: '#fff',
  },
});

export default DashboardGasto;
