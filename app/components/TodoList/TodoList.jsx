import Task from "../Task/Task";

export default function ToDoList({ list }) {

    return (
        <div>
            <ul>
                {list.map((todo, index) => (
                    <Task key={index} task={todo}/>
                ))}
            </ul>
        </div>
    )
}