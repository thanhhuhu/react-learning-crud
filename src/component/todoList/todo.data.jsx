import './todo.css';
import { DeleteOutlined } from "@ant-design/icons";
import { MdOutlineAutoFixHigh } from "react-icons/md";

const TodoData = ({todo , handleDelete, showModal}) => {
    return (
        <div>
            <div>
                {todo.length > 0 ? (
                    todo.map ((item) => (
                        <div  className={"data-container"} key={item.id}>
                            <div className={"data"} style={{ padding: "10px" }}>
                                {item.id} . {item.title}
                                <div className = "button-group">
                                    <button
                                        onClick={ ()=> showModal(item)}
                                        className={"button-setting"}
                                    ><MdOutlineAutoFixHigh/></button>
                                    <button
                                        className={"button-setting"}
                                        onClick={() => handleDelete(item.id)}
                                    ><DeleteOutlined/></button>
                                </div>
                            </div>
                        </div>
                    ))
                ) :(
                    <p className={"no-data"}>
                        NO DATA
                    </p>
                )
                }
            </div>
        </div>

    );
};

export default TodoData;
