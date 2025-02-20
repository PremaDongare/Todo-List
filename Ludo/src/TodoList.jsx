import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';
export default function TodoList() {
    let [todos, setTodos] = useState([{task:"sample-task",id:uuidv4(), isDone:false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) =>{
        return [...prevTodos,{task:newTodo,id:uuidv4(), isDone:false}];
    });
    setNewTodo(""); // Clear input after adding
   };
    let  updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };
      let deleteTodo=(id) =>{
       setTodos((prevTodos)=> todos.filter((prevTodos) => prevTodos.id != id));
      };
      let MarkAllAsDone =()=>{
        setTodos( (prevTodos) => 
            prevTodos.map((todo) =>{
            return{
                ...todo,
               isDone:true,
            };
        })
    );
      };
      let MarkAsDone= (id) =>{
        setTodos( (prevTodos) => 
            prevTodos.map((todo) =>{
                if(todo.id == id){
                    return{
                        ...todo,
                        isDone:true,
                    };
                }else{
                    return todo;
                }
               
            })
        );
          };
      
    return (
        <div>
            <input 
                placeholder="add a task"
                value={newTodo}
                onChange={updateTodoValue}
            />
            <br /><br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br />
            <hr />
            <h1>Task to do</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? {textDecorationLine:"line-through"} :{}}>
                           {todo.task}</span>
                        &nbsp; &nbsp; &nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => MarkAsDone(todo.id)}> MarkAsDone</button>
                      </li>
                ))}
            </ul>
            <button onClick={MarkAllAsDone }> MarkAllAsDone </button>
        </div>
    );
}