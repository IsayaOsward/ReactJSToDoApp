import { useState } from "react";
import ToDoItem from "./toDoitem";
import Form from "./form";
import ToDOList from "./ToDoList";

export default function Todo()
{
    const [todos,setTodos]= useState([])
    return (
        <div>
            <Form todos={todos} setTodos={setTodos}/>
            <ToDOList todos={todos} />
        </div>
    );
}