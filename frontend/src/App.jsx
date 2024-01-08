import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    callServer();
  },[todos.length]);
  function callServer() {
    fetch("http://localhost:3000/todos").then(async function(res){
    const json=await res.json();
    setTodos(json.todos);
    })
  }
  return (
   <div>
    <CreateTodo onChange={callServer}></CreateTodo>
    {/* <Todos todos={todos}></Todos> */}
    <Todos todos={todos}></Todos>
   </div>
      
  )
}

export default App
