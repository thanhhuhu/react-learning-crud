import TodoList from "./component/todoList/todo.list.jsx";
import {Outlet} from "react-router-dom";
import Header from "../src/component/layout/header.jsx";
import Footer from "../src/component/layout/footer.jsx";
const App = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default App