import { Button, Input } from "antd";
import { useState } from "react";

const TodoInput = ({addNewTodo, listTodo}) => {
    const [todo, setTodo] = useState("")
    const handleClick = () => {
        if ( !todo.trim())
        {
            alert ("no field in input")
            return;
        }
        const isDuplicate = listTodo.some(item => item.title.toLowerCase() === todo.trim().toLowerCase());
        if (isDuplicate) {
            alert("This task already exists!");
            return;
        }
        addNewTodo({
            title: todo.trim(),
            isComplete: false
        })
        setTodo("")
    }
    return (
        <div className="todo-input">
           <Input
                placeholder={"Enter todo"}
                value={todo}
                onChange = {event => setTodo(event.target.value)}
           />
            <Button
                type="primary"
                onClick={handleClick}
            >Add</Button>
        </div>
    );
};

export default TodoInput;
