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
      className='py-5 w-full pl-12 rounded-md text-sm'
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <div className='w-5 h-5 rounded-full border border-zinc-800 absolute top-[34%] left-5 opacity-25'></div>
    </form>
  );
  
};

export default NewTodo;
