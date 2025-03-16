
import './notes.scss'
const NotesInput = () => {
    return (
        <div className="container-notes-input">
            Notes input
            <br/>
            <input type="text" placeholder={"Title"}/>
            <hr/>
            <input type="text" placeholder={"Take a note"}/>
            <hr/>
            <input type="date" placeholder={"Date"}/>
        </div>
    )
}
export default NotesInput;