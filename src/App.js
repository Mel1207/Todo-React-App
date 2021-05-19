import { useState } from 'react'
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
    // console.log('delete', id)

    setTasks(tasks.filter((task) => task.id !== id))
    // setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header title={'Task Tracker'} ></Header>

      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} ></Tasks> : 'No task as of the moment'}
    </div>
  );
}

export default App;
