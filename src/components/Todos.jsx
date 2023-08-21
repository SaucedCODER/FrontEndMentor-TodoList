import { useState } from 'react';
import TodosItems from './TodosItems';

const Todos = ({handleTodoToggle,handleDelete,todos}) => {
  const [button,setButton] = useState([{
    text:'All',
    isActive:true
  },{
    text:'Active',
    isActive:true
  },
  {
    text:'Completed',
    isActive:true
  }
  ])
return ( <ul className="relative z-1 grid grid-cols-1 divide-y rounded-md overflow-hidden">
        {todos.length < 1 && 'no todos yet'}
        {todos.map((todo)=>{
           return <TodosItems key={todo.id} {...todo} handleTodoToggle={handleTodoToggle} handleDelete={handleDelete}/>
        })}
        <li className="w-full bg-purple-50 text-slate-400 flex justify-between gap-3 p-5 items-center rounded-sm drop-shadow-xl" >
        <span >{todos.filter((obj) => obj.completed === false).length} items left</span>
        <span>Clear Completed</span>
       </li>
        <li className='className="w-full mt-5 text-slate-400 bg-purple-50 flex justify-center gap-3 p-5 items-center rounded-sm drop-shadow-xl'>
         {button.map((items,index)=>{

          return (
            <button key={index} className={`text-slate-400 ${items.isActive?'5:text-sky-300':''}`}>{items.text}</button>
          )
         })} 

        </li>

      </ul> );
}
 
export default Todos;