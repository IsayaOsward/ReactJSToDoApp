import ToDoItem from "./toDoitem";
import styles from "./toDoList.module.css"
export default function ToDOList({todos}) {
    return (
        <div className={styles.todoListContainer}>
            <div className={styles.toDoName}>{todos.map((item)=>(
                    <ToDoItem key={item} item={item} />
                ))}</div>
        </div>
    )
}