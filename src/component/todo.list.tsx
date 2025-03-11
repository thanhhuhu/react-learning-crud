
//jsx
import TodoData from "./todo.data.tsx";
import TodoInput from "./todo.input.tsx";
import {useState} from "react";
interface ITodo {
        id: number;
        title: string;
        isComplete: boolean;
}
const TodoList = () =>{
    // const todos = [
    //     {
    //         id: 1,
    //         title: "Learn React TypeScript",
    //         isComplete: false
    //     },
    //     {
    //         id: 2,
    //         title: "Subscribe Youtube HoiDanIT",
    //         isComplete: true
    //     },
    //     {
    //         id: 3,
    //         title: "Learn English",
    //         isComplete: true
    //     },
    // ]
    const [listTodo,setListTodo] = useState<ITodo[]>([])

    const addNewTodo = (todo:ITodo) =>{
         setListTodo([...listTodo,todo])
    }
    const handleDeleteTodo = (id: number) =>{
        const newTodo = listTodo.filter(item => item.id != id)
        setListTodo(newTodo)
    }
    return (
        <div
            style={{textAlign: "center",
                border:"1px solid red",
                width:"400px",
                margin:"50px auto",
                borderRadius:"10px"
            }}>
            <div> My todo list:</div>
            <hr/>
            <br/>
            <TodoInput
                // name ="please type your todo"
                addNewTodo = {addNewTodo}
            />
            <TodoData
            todos = {listTodo}
            // owner ={"thanh"}
            age = {25}
            isDeveloper={true}
            handleDeleteTodo = {handleDeleteTodo}
            />
        </div>
    )
}
export default TodoList

// tsx
// import * as React from "react";
//
// const TodoList:React.FunctionComponent = ()=>(
//     <div>TodoList Function component</div>
// )
// export default TodoList


// export default function TodoList () {
//     return (
//         <div>Todo list</div>
//     )
// }