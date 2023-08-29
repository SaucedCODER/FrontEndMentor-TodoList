import TodosItems from './TodosItems';
import FilterButtons from './FilterButton';

const Todos = ({handleTodoToggle,handleDelete,todos,buttons,handleActiveButton,handleDeleteAll}) => {
  
return ( <ul className="relative z-1 grid grid-cols-1 divide-y-[.5px] rounded-md ">
        {todos.length < 1 && <li className="dark:bg-VeryDarkDesaturatedBlue w-full bg-purple-50 text-slate-400 flex justify-between gap-3 p-5 items-center rounded-sm drop-shadow-xl">Empty..</li>}
       
        {todos.map((todo)=>{
           return <TodosItems key={todo.id} {...todo} handleTodoToggle={handleTodoToggle} handleDelete={handleDelete}/>
        })}
        <li className="dark:bg-VeryDarkDesaturatedBlue w-full bg-purple-50 text-slate-400 flex justify-between gap-3 p-5 items-center rounded-sm drop-shadow-xl" >
        <span >{todos.filter((obj) => obj.completed === false).length} items left</span>
        <span><button className='hover:text-sky-300' onClick={handleDeleteAll}>Clear Completed</button></span>
       </li>
        <li className='dark:bg-VeryDarkDesaturatedBlue w-full mt-5 text-slate-400 bg-purple-50 flex justify-center gap-3 p-5 items-center rounded-sm drop-shadow-xl'>
         {buttons.map((items)=>{
          return <FilterButtons key = {items.text} items = {items} handleActiveButton = {handleActiveButton}/>
         })} 

        </li>

      </ul> );
}
 
export default Todos;