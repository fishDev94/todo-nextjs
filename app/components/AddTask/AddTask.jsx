import { useContext } from "react"
import { globalContext } from "@/context/globalContext"
import { nanoid } from "nanoid";

export default function AddTask() {
    const { setInputValue, inputValue, setTask } = useContext(globalContext);

    const handleAddTask = () => {
        setTask({
            id: nanoid(2),
            text: inputValue
        })
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div>
            <input onChange={handleChange} type="text" placeholder="insert a task" />
            <button onClick={handleAddTask}>Add</button>
        </div>
    )
}