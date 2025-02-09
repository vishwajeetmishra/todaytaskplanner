import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import InputComponent from './components/InputComponent';
import ListTasksComponent from './components/ListTasksComponent';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleTaskAddition = (enteredTask) => {
    let date = new Date();
    setTasks(currTasks => [...currTasks, { title: enteredTask, id: Math.round(date.getTime()) }])
    alert('Task added successfully!');
  }

  const handleTaskDeletion = (id) => {
    setTasks(currTasks => {
      return currTasks.filter(task => task.id !== id)
    });
    alert('Task deleted successfully!');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ marginTop: 100 }}>
        <Text style={{ color: '#ffffff', fontSize: 30, fontWeight: 800, marginBottom: 50 }}>My daily task tracker</Text>
        {!tasks.length ? <Text style={{ color: 'white', textAlign: 'center', marginTop: 10, marginBottom: 16, fontSize: 16 }}>No tasks for the day...</Text> : ''}
        <Button title='Add task' onPress={() => { setModalVisible(true) }} />
      </View>
      <InputComponent
        modalVisible={modalVisible}
        modalClose={() => { setModalVisible(false) }}
        onAddTask={handleTaskAddition}
      />
      <ListTasksComponent tasks={tasks} handleTaskDeletion={handleTaskDeletion} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1D1D1D'
  },
});
