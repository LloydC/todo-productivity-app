import React, {useState, useEffect} from 'react';
import firebase from '../firebase';

function useTasks(){
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
      const unsuscribe = firebase
        .firestore()
        .collection('todos')
        .onSnapshot(snapshot =>{
            const newTasks = snapshot.docs.map(doc=>({
                id: doc.id,
                ...doc.data()
            }))
            setTasks(newTasks)
        })
        return () => unsuscribe()
    }, [])
    return tasks;
}
export default function TaskList(){
    const tasks = useTasks()
    return (
        <div>
            <h3>Task List</h3>
            <ul>
                {tasks.map(task =>
                    <li key={task.id}>
                        Date: {task.date} 
                        Tasks: {task.tasks.map((task, i)=> <span key={i}>{task.name},</span>)}
                    </li>
                )}
            </ul>
        </div>
    )
}