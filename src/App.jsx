import {useState, useEffect } from 'react'
import {FormAddNewTodo,Todos} from './components'
import {useTheme} from './ThemeContext'
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
  const handleDeleteAll= ()=>{
    setTodos((currTodos)=>{
     return currTodos.filter((todo)=>{
        return todo.completed !== true 
      })
    })
  }
  const [buttons,setButtons] = useState([{
    text:'All',
    isActive:true
  },{
    text:'Active',
    isActive:false
  },
  {
    text:'Completed',
    isActive:false
  }
  ])

  const handleActiveButton = (btn) =>{
   const newStateBtn = buttons.map(e=>{
       e.text === btn ? e.isActive = true: e.isActive = false
       return e
    })
    
    setButtons(newStateBtn)
  }
  const {theme,toggleTheme} = useTheme()
 
  useEffect(()=>{
    localStorage.setItem('todoList', JSON.stringify(todos));
  },[todos])
  return (
    <>
   
      <img className="absolute -z-5 w-full max-h-[100%] h-[250px] md:hidden" src={`./assets/images/${theme == 'light'?"bg-mobile-light":"bg-mobile-dark"}.jpg`} alt="header_IMG" />
      <img className="absolute -z-5 w-full max-h-[100%] h-[250px] hidden md:block" src={`./assets/images/${theme == 'light'?"bg-desktop-light":"bg-desktop-dark"}.jpg`} alt="header_IMG" />

      <div className='mx-auto px-8 pt-10 max-w-[550px]'>
        <div className='flex justify-between mb-10'>
          <h1 className="relative z-1 font-bold text-slate-100 text-3xl tracking-[.5em]">TODO</h1>
          <img className="relative z-1 w-auto h-7" onClick={toggleTheme} src={`./assets/images/icon-${theme == 'light'?'moon':'sun'}.svg` } alt={theme+"icon"} />
        </div>

        <FormAddNewTodo AddingTodoFunc={AddingTodo} />
        <Todos handleDeleteAll={handleDeleteAll} handleTodoToggle={handleTodoToggle}handleDelete={handleDelete} buttons={buttons} handleActiveButton= {handleActiveButton} todos={ todos.filter(todo=>{
      const activeBtn = buttons.filter((e)=>e.isActive)
        if(activeBtn[0].text == 'Completed'){
          return todo.completed == true
        }
       else if(activeBtn[0].text == 'Active'){
        return todo.completed == false
       }else{
        return true
       }
  
     })}/>
      </div>
    </>
   
  )
}

export default App
