import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import TodoList from "./component/todoList/todo.list.jsx";
import NotesApp from "./component/todoNote/notes.app.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <TodoList/>
            },
            {
                path: "/note",
                element: <NotesApp/>
            }
        ]
    },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)