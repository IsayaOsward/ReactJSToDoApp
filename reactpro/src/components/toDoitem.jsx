import styles from "./toDoItem.module.css"
export default function ToDoItem({item})
{
    return (
            <div className={styles.todoItemContainer}>
                <div className={styles.todoItem}>{item}
                <button className={styles.deleteToDo}>X</button>
                </div>
                <hr className={styles.hr}/>
            </div>
    )
}