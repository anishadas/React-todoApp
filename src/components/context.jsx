import { createContext, useEffect, useState } from "react";

export const TodosContext = createContext();

export const TodosContextProvider = ({ children }) => {
    const [AllTodos, setAllTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [filter, setFilter] = useState({ all: true, completed: false, uncompleted: false })
    const [showAddBtn, setShowAddBtn] = useState(false);
    const [Input, setInput] = useState("");
    const [UpdateData, setUpdateData] = useState({showUpdate:false,title:"",id:null,userId:null,completed:false});

    useEffect(() => {
        fetctTodos();
    }, []);

    const fetctTodos = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos');
            let data = await res.json();
            setAllTodos(data);
            setFilteredTodos(data);
        }
    const handleFilterClick = (filter) => {
        if (filter === "all") {
            setFilter({ all: true, completed: false, uncompleted: false });
            setFilteredTodos(AllTodos);
        }
        if (filter === "completed") {
            setFilter({ all: false, completed: true, uncompleted: false });
            const selectedTodos = AllTodos.filter(todo => todo.completed);
            setFilteredTodos(selectedTodos);
        }
        if (filter === "uncompleted") {
            setFilter({ all: false, completed: false, uncompleted: true });
            const selectedTodos = AllTodos.filter(todo => !todo.completed);
            setFilteredTodos(selectedTodos);
        }
    }
   

    const handleAddTodos = async() => {
        if (UpdateData.id) {
            const res=await fetch(`https://jsonplaceholder.typicode.com/todos/${UpdateData.id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    id:UpdateData.id,
                    title: Input,
                    userId: UpdateData.userId,
                    completed:false
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            const data = await res.json();
            // console.log(data)
            const updatedTodos = filteredTodos.map(todo => {
                if (todo.id === data.id) {
                    todo.title=data.title
                }
                return todo
            })
            // console.log(updatedTodos)
            setFilteredTodos(updatedTodos)
        } else {
            
            const todo =
            {
                "userId": 10,
                "id": `${AllTodos.length + 1}`,
                "title": Input,
                "completed": false,
            }
            // console.log(todo);
        
            const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                body: JSON.stringify(todo),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            const data = await res.json();
            setFilteredTodos([
                ...filteredTodos,
                data
            ])
        }
        setInput("")
    }

    const handleDelete = async(id) => {
        const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        });
        if (res.status === 200) {
            const updatedTodos = filteredTodos.filter(todo => todo.id!==id)
            setFilteredTodos(updatedTodos)
        }
        console.log(res)
    }
    const handleChecked = async (id) => {
        console.log(id)
        const todo = filteredTodos.filter(t => t.id === id);
        const remainingTodos=filteredTodos.filter(t => t.id !== id);
        const res=await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    ...todo[0],
                    completed:!todo[0].completed
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        const data = await res.json();
        setFilteredTodos([
            ...remainingTodos,
            data
        ])
    }
    const handleEditBtn = async (id) => {
        const todo = AllTodos.filter(t => t.id === id);
        setInput(todo[0].title)
        setUpdateData({ showUpdate: true, ...todo[0] });
    }

    const handleCompleteAll = () => {
        const complete_all_todos = AllTodos.map(todo => {
            todo.completed = true
            return todo;
        })
        setFilteredTodos(complete_all_todos);
    }
    const handleClearCompleted = () => {
        const clear_complete_todos = AllTodos.filter(todo => !todo.completed)
        setFilteredTodos(clear_complete_todos)
    }
    let values = {
        filteredTodos,
        setFilteredTodos,
        handleFilterClick,
        filter,
        showAddBtn,
        setShowAddBtn,
        setInput,
        Input,
        handleAddTodos,
        handleDelete,
        handleEditBtn,
        UpdateData,
        handleChecked,
        handleClearCompleted,
        handleCompleteAll
    }
    return (
        <TodosContext.Provider value={values}>
            {children}
        </TodosContext.Provider>
    )
}