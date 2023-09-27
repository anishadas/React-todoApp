import React, { useContext } from 'react'
import checklist from '../assets/checklist.png';
import doublecheck from '../assets/completeall.png';
import { TodosContext } from './context';

const Input = () => {
    const {
        filter,
        handleFilterClick,
        Input,
        setInput,
        handleAddTodos,
        setShowAddBtn,
        UpdateData,
        filteredTodos,
        handleCompleteAll,
        handleClearCompleted
    } = useContext(TodosContext);

    //updating tasks on left block
    const tasksLeft = filteredTodos.filter(todo => !todo.completed).length;
    
  return (
    <div className="container">
        <div className="input">
              <span><i className="fa-solid fa-clipboard-list"></i></span>
                  <input
                      type="text"
                      value={Input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Enter your todos"
                      onFocus={() => setShowAddBtn(true)}
                      onBlur={() => setShowAddBtn(false)}
                  />
              
              <button className="add-btn" onClick={handleAddTodos}>
                  {UpdateData.showUpdate ? <i className="fa-solid fa-pen-to-square"></i>
                      : <i className="fa-solid fa-circle-plus"></i>}
                  </button>
        </div>
        <div className="task-status">
            <div className="complete-task">
                <img src={doublecheck} className="completeAll" alt='completeall'/>
                <p className="completeAll" onClick={handleCompleteAll}>complete all tasks</p>
            </div>
            <div className="clear-completed">
                <img src={checklist} className="clear" alt='clear'/>
                <p className="clear" onClick={handleClearCompleted}>clear completed</p>
            </div>
        </div>
        
        <div className="task-filters">
              <p className="task-left"><span>{tasksLeft}</span>Tasks left</p>
            <ul className="filters">
                <li onClick={()=>handleFilterClick("all")} className={`${filter.all && 'selected'}`}>All</li>
                <li onClick={()=>handleFilterClick("uncompleted")} className={`${filter.uncompleted && 'selected'}`}>Uncomplete</li>
                <li onClick={()=>handleFilterClick("completed")} className={`${filter.completed && 'selected'}`}>Completed</li>
            </ul>
        </div>
    </div>
  )
}

export default Input
