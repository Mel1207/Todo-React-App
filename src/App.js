import { useState } from 'react'
import AddTask from './components/AddTask';
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Coding Session',
      day: 'everyday',
      reminder: 'true'
    },
    {
      id: 2,
      text: 'CSS Session',
      day: 'Monday',
      reminder: 'true'
    },
    {
      id: 3,
      text: 'relaxing',
      day: 'sunday',
      reminder: 'false'
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder 
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {
      ...task, reminder: !task.reminder
    }: task))
  }

  return (
    <div className="container">
      <Header title={'Task Tracker'} ></Header>
      <AddTask />
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />: 'No task as of the moment'}
    </div>
  );
}

export default App;
