import {Input, Modal} from "antd";
import {useEffect, useState} from "react";
import TodoData from "./todo.data.jsx";

const TodoChange = ({selectedTodo, isModalOpen, setIsModalOpen, handleSave}) =>{
    const [editedTodo, setEditedTodo] = useState("")

    useEffect(()=>{
        setEditedTodo(selectedTodo?.title || "")
    },[selectedTodo])

    const handleOk = () => {
        if (!editedTodo.trim ())
        {
            alert("No such data")
            return ;
        }
        handleSave({...selectedTodo,title: editedTodo})
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <Modal title="Change data of todo"
                   open={isModalOpen}
                   onOk={handleOk}
                   onCancel={handleCancel}>
             <Input
                value ={editedTodo}
                onChange = {event => setEditedTodo(event.target.value)}
             />
            </Modal>
        </div>
    )
}
export default TodoChange
