import React, { useContext } from 'react'
import Todo from './Todo';
import { TodosContext } from './context';

const Todos = () => {
    const { filteredTodos } = useContext(TodosContext);
    return (
        <div className='todos-head'>
            <p className='head'>Todo List</p>
            <hr/>
            <div className='todos'>
              {
              filteredTodos?.sort((a,b)=>b.id-a.id).map(todo => (
                <Todo todo={todo} key={todo.id}/>
              ))
               }
            </div>
        </div>
     
  )
}

export default Todos
