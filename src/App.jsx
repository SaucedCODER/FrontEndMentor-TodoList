import {useState, useEffect } from 'react'
import {FormAddNewTodo,Todos} from './components'
function App() {
  
  const [todos,setTodos] = useState(()=>{
    const todoListString = localStorage.getItem('todoList');
    return todoListString ? JSON.parse(todoListString) : [];
  })
  const AddingTodo = (title) =>{
    setTodos((currTodo)=>{
      if(currTodo.find(e=>e.title === title)) return [...currTodo]
  
      return [...currTodo, {id:Date.now()+'z',title,completed:false}]
  
    })
  }
  const handleTodoToggle = (id,completed) =>{
   setTodos(
    (currTodos)=>{
    return currTodos.map((todo)=>{
        return todo.id === id ? {...todo,completed} : todo
      })
    }
   ) 
  }
  const handleDelete= (id)=>{
    setTodos((currTodos)=>{
     return currTodos.filter((todo)=>{
        return todo.id !== id 
      })
    })
  }

  useEffect(()=>{
    localStorage.setItem('todoList', JSON.stringify(todos));
  },[todos])
  return (
    <>
   
      <img className="absolute -z-5 w-full max-h-[100%] h-[250px] md:hidden" src="../src/assets/images/bg-mobile-light.jpg" alt="header_IMG" />
      <img className="absolute -z-5 w-full max-h-[100%] h-[250px] hidden md:block" src="../src/assets/images/bg-desktop-light.jpg" alt="header_IMG" />
      <div className='mx-auto px-8 pt-10 max-w-[550px]'>
        <div className='flex justify-between mb-10'>
          <h1 className="relative z-1 font-bold text-slate-100 text-3xl tracking-[.5em]">TODO</h1>
          <img className="relative z-1 w-auto h-7" src="../src/assets/images/icon-moon.svg" alt="moon" />
        </div>
        <FormAddNewTodo AddingTodoFunc={AddingTodo} />
        <Todos handleTodoToggle={handleTodoToggle}handleDelete={handleDelete} todos={todos}/>
      </div>
    </>
   
  )
}

export default App
