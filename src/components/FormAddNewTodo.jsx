import { useState} from 'react'

const NewTodo = ({AddingTodoFunc}) => {
    const [todo,setTodo] = useState("")
    const handleSubmitTodo = (e) => {
        e.preventDefault();
        if(todo === '') return 
        AddingTodoFunc(todo.trim())
        setTodo('')
      }
  return (
    <form className="relative z-1 mb-5" onSubmit={handleSubmitTodo}>
      <input
      className='dark:bg-VeryDarkDesaturatedBlue dark:text-slate-200 text-black py-5 w-full pl-12 rounded-md text-sm'
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <div className='w-5 h-5 rounded-full border-2 border-[#d7d7d7] dark:border-slate-200  absolute top-[34%] left-5'></div>
    </form>
  );
  
};

export default NewTodo;
