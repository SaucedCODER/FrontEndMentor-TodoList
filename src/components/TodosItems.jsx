const TodoItems = ({id,title,completed,handleTodoToggle,handleDelete}) => {
    return (   
        <li className="group cursor-pointer dark:bg-VeryDarkDesaturatedBlue dark:text-slate-200 w-full bg-purple-50 flex justify-between gap-3 p-5 items-center drop-shadow-xl" >
          <input className="border-2 group-hover:border-[#7323dc] border-[#d7d7d7] dark:border-slate-500 dark:bg-transparent shrink-0 h-5 w-5 rounded-full outline-none accent-[#7323dc] cursor-pointer" type="checkbox" onChange={(e)=>handleTodoToggle(id,e.target.checked)} checked={completed} />
          <p className={`mr-auto text-sm truncate ${completed?'line-through':''}`}>{title}</p>
          <button className="shrink-0 hidden group-hover:block" onClick={()=>handleDelete(id)}>
            <img src="../src/assets/images/icon-cross.svg" alt="" />
          </button>
        </li>
        
      );
}
 
export default TodoItems;