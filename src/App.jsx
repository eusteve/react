import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"

export default function App(){

const [todos, setToDOs] = useState([])

        

        function toggleTodo(id, completed){
          setToDOs(currentTodos =>{
            return currentTodos.map(todo =>{
              if(todo.id === id){
                return {...todo,completed}
              }

              return todo
            })
          })

        }

          function addTodo(title){
            setToDOs( currentTodos =>{
              return [
                  ...currentTodos,{
                      id: crypto.randomUUID(), title, completed:false
                    },
                 ]
               })
          }
        function deleteTodo(id){
          setToDOs(currentTodos =>{
            return currentTodos.filter(todo => todo.id !==id )
          })
        }

  return (
    <>
    <NewTodoForm/>
  <h1 className="header">Todo List</h1>
  <ul className="list">
    {todos.length === 0 &&   "~ No todos"}
    {todos.map(todo =>{
      return (
        <li key={todo.id}>
          <label>
              <input type="checkbox" checked = {todo.completed} 
              onChange = {e => toggleTodo(todo.id, e.target.checked)}
              /> 
            {todo.title}
          </label>
        <button onClick={() => deleteTodo(todo.id)}  
        className="btn btn-danger">Delete</button>
      </li>
    )
    })}
  </ul> 
  </>
  )
}
