import React from 'react'
import '../Styles.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Todo = () => {
const [task, setTask] = useState('');
const [addTask, setAddTask] = useState([]);
const [doneTask, setDoneTask] = useState(false);

let ind = 0;
const localSt = JSON.parse(localStorage.getItem('task'))

useEffect(() => {
  if(localSt !== null){
    setAddTask(localSt);
    }
    
},[])

const handleClick = (ind) => {
    
    setTask('');
    if(task != ''){
      localStorage.setItem('task', JSON.stringify([...addTask, {task: task}]));
       setAddTask([...addTask, { task: task }]);
    }else{
        alert('Type your task!')
    }
}

const deleteTask = (task) => {
  const newItem = addTask.filter(a => a.task !== task);
     setAddTask(newItem);
     localStorage.setItem('task', JSON.stringify(newItem));
}

const clearAll = () => {
     setAddTask([]);
     localStorage.clear()
}

  return (
    <div className='outer'>
        <div className='inner'>
           <div className='input'>
              <div className='typeInput'>
                <input value={task} onChange={(e) => {setTask(e.target.value)}} className='task' type='text' placeholder='write your task' autoFocus/>
              </div>
              <div className='addBtn'>
                <button onClick={() => {handleClick(ind)}} className='add'>Add</button>
              </div>
           </div>
           <div className='taskarea'>
              <ul>
               {addTask.map((list, index) => {
                return(
               <div className='allTasks' key={index}>
                <li className='parti-task'>{list.task}</li>
                <div>
                <button className='do-btn' onClick={() => {setDoneTask(!doneTask)}}>Done</button>
                <button className='dl-btn' onClick={() => {deleteTask(list.task)}}>Delete</button>
                </div>
                </div>
                )
              })}
              </ul>
              {addTask == '' ? <span className='spn'>Add Some Tasks</span> : <button className='deleteAll' onClick={() =>{clearAll()}}>delete all</button>}
           </div>
        </div>
    </div>
  )
}

export default Todo