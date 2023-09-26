import React, { useContext } from 'react'
import { TodosContext } from './context'

const Todo = ({ todo }) => {
    const { handleEditBtn, handleDelete,handleChecked } = useContext(TodosContext);
    return (
        <>
            <li className='todo'>
                <input type="checkbox" id={todo.id} checked={todo.completed ? true : false} className="check-box" onChange={()=>handleChecked(todo.id)} />
                <label htmlFor={todo.id} >
                    <span>
                        {todo.title}
                    </span>
                </label>
                <div className="edit" onClick={()=>handleEditBtn(todo.id)}><img src="https://cdn-icons-png.flaticon.com/128/1827/1827933.png"  alt="edit" className="edit-img" /> </div>
                <div className="delete" onClick={()=>handleDelete(todo.id)}><img src="https://cdn-icons-png.flaticon.com/128/484/484611.png" alt="delete" className="delete-img" /></div>
            </li>
            <hr/>
        </>
    
  )
}

export default Todo
