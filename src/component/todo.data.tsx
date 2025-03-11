
//[1,2,3]
interface IProps {
    todos: {
        id: number;
        title: string;
        isComplete: boolean;
    }[];
    owner?: string;
    age?: number;
    isDeveloper?: boolean;

    handleDeleteTodo: (value :number) => void
}
// type TProps = {
//     todos: {
//         id: number;
//         title: string;
//         isComplete: boolean;
//     }[];
//     owner: string;
//     age: number;
//     isDeveloper: boolean;
// }


const TodoData = (props:IProps) =>{

    const { todos, handleDeleteTodo } = props;
    return (
        <div>
            <div style={{padding:"10px"}}>
                {todos.map(item => (
                    <div key={item.id} >
                        <div style={{padding:"10px"}}>
                            {item.id} - {item.title}
                            &nbsp;
                            <button
                            onClick={()=> handleDeleteTodo(item.id)}
                            >
                            Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default TodoData