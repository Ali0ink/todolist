import { useEffect, useState } from 'react';
import './App.css';
import Task from './Task';
import TaskForm from './TaskForm';

function App() {
  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   if (tasks.length=== 0) return;
  //   localStorage.setItem('tasks', JSON.stringify(tasks))
  // }, [tasks]);

  // useEffect(() => {
  //   const tasks = JSON.parse(localStorage.getItem('tasks'));
  //   setTasks(tasks);
  // }, []);

  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    return storedTasks !== null ? storedTasks : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },[tasks]);


  function addTask(taskName1) {
    setTasks(prev => {
      return [...prev, {name: taskName1, done: false}];
    });
  }

  function removeTask(indexToRemove) {
    setTasks(prev => {
      return prev.filter((taskObject, index) => index !== indexToRemove);
    });
  }

  function updateTaskDone(index, newdone) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[index].done = newdone;
      return newTasks;
    });
  }

  const numberComplete = tasks.filter(t => t.done).length;
  const numberTotal = tasks.length;

  function getMessage() {
    const percentage = numberComplete/numberTotal * 100;
    if (percentage === 0) {
      return 'Try to do at least one task';
    }
    if (percentage === 100) {
      return 'Nice job for Today';
    }

    return 'Keep it going ';
  }

  function renameTask(index, newName) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    });
  }
  
  return (
    <main>
      <h1>Personal Todo List</h1>
      <h2>{numberComplete}/{numberTotal} Completed</h2>
      <h4>{getMessage()}</h4>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => (
        <Task {...task}
        onRename={newName => renameTask(index, newName)}
        onTrash={() => removeTask(index)} 
        onToggle={done => updateTaskDone(index, done)} />
      ))}
    </main>
  );
}

export default App;
