import { useState } from "react";
import styles from "./form.module.css"
export default function Form({ todos, setTodos}) {
    const [todo,setTodo]= useState("")
    function handleSubmit(e) {
        e.preventDefault()
        setTodos([...todos, todo]);
        setTodo("");
    }
    return <form className={styles.form} onSubmit={(e)=>handleSubmit(e)}>
                <div className={styles.flex}>
                    <input placeholder="Enter todo item..." className={styles.modernInput} onChange={(e)=>setTodo(e.target.value)} type="text" value={todo}/>
                <button className={styles.addToDo} type="submit">Add</button>
                </div>
            </form>
}