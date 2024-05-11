import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoItem = ({ item, onComplete, onDelete }) => {
  return (
    <View style={styles.todoItem}>
      <TouchableOpacity onPress={() => onComplete(item.id)}>
        <Text style={[styles.todoText, item.completed && styles.completed]}>
          {item.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginVertical: 4,
  },
  todoText: {
    fontSize: 16,
    color: '#333',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  deleteText: {
    fontSize: 18,
    color: '#e74c3c',
  },
});

export default TodoItem;