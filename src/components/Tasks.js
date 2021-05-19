const tasks = [
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
];

const Tasks = () => {
    return ( 
        <>
            {/* {tasks.map(task => (
                <h3>{task.text}</h3>
            ))} */}

            {/* {tasks.map((task) => (<h3>{task.text}</h3>))} */}

            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </>
     );
}
 
export default Tasks;