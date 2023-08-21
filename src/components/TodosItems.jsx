const TodoItems = ({id,title,completed,handleTodoToggle,handleDelete}) => {
    return (   
        <li className="w-full bg-purple-50 flex justify-between gap-3 p-5 items-center drop-shadow-xl" >
          <input className="shrink-0 h-5 w-5 rounded-full outline-none accent-[#7323dc] cursor-pointer" type="checkbox" onChange={(e)=>handleTodoToggle(id,e.target.checked)} checked={completed} />
          <p className={`mr-auto text-sm truncate ${completed?'line-through':''}`}>{title}</p>
          <button className="shrink-0" onClick={()=>handleDelete(id)}>
            <img src="../src/assets/images/icon-cross.svg" alt="" />
          </button>
        </li>
        
      );
}
 
export default TodoItems;