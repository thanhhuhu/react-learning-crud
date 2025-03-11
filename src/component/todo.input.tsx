import {useState} from "react";
import * as React from "react";

interface IProps {
    name?: string
    addNewTodo: (value: ITodo) => void
}
interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}
const TodoInput = (props: IProps) =>{
    //generic
    // const [todo,setTodo] = useState<number>(0);
    const {addNewTodo} = props;
    const [todo,setTodo] = useState<string>("")
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setTodo(event.target.value)
    }
    function randomInteger(min:number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const handleClick =() =>{
        if (!todo) {
            alert("empty todo")
            return;
        }
        addNewTodo({
            id: randomInteger(1,100000),
            title: todo,
            isComplete: false,
        })
    }
    return (
        <div style={{gap:'20px', marginBottom:'20px', textAlign:'center'}}>
            <input type="text"
                    value = {todo}
                   onChange = {handleTextChange}
            />
            <button onClick = {handleClick} >Add</button>
        </div>
    )
}
export default TodoInput