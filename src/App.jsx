import React from 'react'

import Header from "./components/header/Header.jsx";
import styles from "./App.module.scss";
import TaskForm from './features/task/taskForm/TaskForm.jsx';
import TaskList from './features/task/taskList/TaskList.jsx';

const App = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header />
        <TaskForm />
        <TaskList />
      </div>
    </div>
  )
}

export default App
