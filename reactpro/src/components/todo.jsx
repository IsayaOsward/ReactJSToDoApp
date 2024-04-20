import { useState } from "react";
import ToDoItem from "./toDoitem";

export default function Todo()
{
    const [todo,setTodo]= useState("")
    const [todos,setTodos]= useState([])
    function handleSubmit(e) {
        e.preventDefault()
        setTodos([...todos, todo]);
        setTodo("");
    }
    return (
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input onChange={(e)=>setTodo(e.target.value)} type="text" value={todo}/>
                <button type="submit">Add</button>
            </form>
                {todos.map((item)=>(
                    <ToDoItem key={item} item={item} />
                ))}
        </div>
    );
}