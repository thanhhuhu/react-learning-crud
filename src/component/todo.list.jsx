import './todo.css'
import TodoInput from "./todo.input.jsx";
import TodoData from "./todo.data.jsx";
import {useEffect, useState} from "react";
import TodoChange from "./todo.change.jsx";

const TodoList = () =>{
    const [listTodo, setListTodo] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [idCounter, setIdCounter] = useState(() => {
        const savedId = localStorage.getItem("idCounter");
        return savedId ? JSON.parse(savedId) : 1;
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null)

    // Lưu vào storage để refresh trang ko bị mất dữ liệu
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(listTodo));
        localStorage.setItem("idCounter", JSON.stringify(idCounter));
    }, [listTodo, idCounter]);

    // để lưu lại khi sửa xong
    const handleSave = (updatedTodo) =>{
        setListTodo(listTodo.map(todo =>
            todo.id === updatedTodo.id ? updatedTodo : todo
        ));
    }
    // thêm mới todo
    const addNewTodo =(todo) =>{
        const newTodo = {...todo, id:idCounter}
        setListTodo([...listTodo, newTodo])
        setIdCounter(idCounter + 1)
    }
    // xóa todo
    const handleDelete = (id) => {
        setListTodo(listTodo.filter(todo => todo.id !== id))
    }
    // mở modal
    const showModal = (todo) => {
        setSelectedTodo(todo);
        setIsModalOpen(true);
    };
    return (

        <div className={"todo-container"}>
            <TodoChange
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                selectedTodo={selectedTodo}
                handleSave={handleSave}
            />
            <div className={"todo-title"}> Todo list</div>
             <TodoInput
                 listTodo={listTodo}
                 addNewTodo = {addNewTodo}
             />
            <TodoData
                todo={listTodo}
                handleDelete={handleDelete}
                showModal={showModal}
            />
        </div>
    )
}
export default TodoList
