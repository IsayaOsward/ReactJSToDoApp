import ToDoItem from "./toDoitem";
export default function ToDOList({todos}) {
    return (
        todos.map((item)=>(
                    <ToDoItem key={item} item={item} />
                ))
    )
}