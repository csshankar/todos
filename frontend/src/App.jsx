
import { useState,useEffect } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'


function App() {
  
const [todos ,setTodos] = useState([]);
useEffect(()=>{
  setInterval(fetchData, 10000);
  }, [])
  const fetchData = async () => {
  const response = await fetch("http://localhost:3000/todos");
  const json = await response.json();
  setTodos(json.todos)
  }
  
  return (
    
      <div className='h-screen flex justify-center flex-col'>
          
        <CreateTodo></CreateTodo>
        <div className='flex justify-center pt-5 snap-y'>
        <Todos todos={todos} /> 
        </div>
       </div>
  )
}

export default App
