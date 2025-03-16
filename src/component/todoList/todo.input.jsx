import { Button, Input } from "antd";
import { useState } from "react";

const TodoInput = ({addNewTodo, listTodo}) => {
    const [todo, setTodo] = useState("")
    const handleClick = () => {
        if ( !todo.trim())
        {
            alert ("No data in input")
            return;
        }
        const isDuplicate = listTodo.some(item => item.title.toLowerCase() === todo.trim().toLowerCase());
        if (isDuplicate) {
            alert("This field already exists!");
            return;
        }
        addNewTodo({
            title: todo.trim(),
            isComplete: false
        })
        setTodo("")
    }
    // Thay chữ đầu tiên mỗi lần nhập vào là uppercase
    const handleChange = (event) => {
        let value = event.target.value;
        if (value.length > 0){
            value = value.charAt(0).toUpperCase() + value.slice(1);
        }
        setTodo(value)
    }
    return (
        <div className="todo-input">
           <Input
                placeholder={"Enter todo"}
                value={todo}
               // Thay chữ đầu tiên mỗi lần nhập vào là uppercase
                onChange = {handleChange}
                onKeyDown = {(event) => {
                    if ( event.key === "Enter" ) {
                        handleClick();
                    }
                }}
           />
            <Button
                type="primary"
                onClick={handleClick}

            >Add</Button>
        </div>
    );
};

export default TodoInput;
