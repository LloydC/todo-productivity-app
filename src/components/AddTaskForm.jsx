import React, {useState} from 'react';
import firebase from '../firebase'

export default function AddTaskForm(){
    const [date, setDate] = useState('')
    const [task, setTask] = useState('')
    
    function onSubmit(e){
        e.preventDefault();  
        firebase
        .firestore()
        .collection('todos')
        .add({
        date,
        tasks: [{name: task, status: false}]    
        })
        .then(()=>{
            setDate('');
            setTask('')
        })
        .catch(e =>{
            console.error(e)
        })
    } 
    return(
        <form onSubmit={onSubmit}>
            <h4>Create New Task</h4>
            <label htmlFor="">Date</label>
            <input type="text" name="date" onChange={e => setDate(e.currentTarget.value)}/>
            <br/>
            <label htmlFor="">Task</label>
            <input type="text" name="task" onChange={e => setTask(e.currentTarget.value)}/>
            <br/>
            <button type="submit">Add New Task</button>
        </form>
    )
}