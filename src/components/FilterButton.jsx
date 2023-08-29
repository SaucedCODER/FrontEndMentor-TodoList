
const FilterButtons = ({handleActiveButton,items}) => {
  return (
    <button onClick={()=>handleActiveButton(items.text)} className={`${items.isActive?'text-sky-300':'text-slate-400'} hover:text-sky-300`}>{items.text}</button>
  )
}

export default FilterButtons