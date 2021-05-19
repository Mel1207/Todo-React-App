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

  return (
    <div className="container">
      <Header title={'Task Tracker'} ></Header>
      <Tasks tasks={tasks}></Tasks>
    </div>
  );
}

export default App;
