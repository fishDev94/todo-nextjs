"use client";

import { useEffect, useState } from "react";
import ToDoList from "./components/TodoList/TodoList";
import AddTask from "./components/AddTask/AddTask";
import { globalContext } from "@/context/globalContext";

export default function Home() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState({});
  const [inputValue, setInputValue] = useState("");

  const contextValue = {
    todoList,
    inputValue,
    setInputValue,
    setTask
  }

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('todoList')))
    if (JSON.parse(localStorage.getItem('todoList')) !== null) {

      setTodoList(JSON.parse(localStorage.getItem('todoList')))
    }
  }, [])

  useEffect(() => {
    if (task.text !== "" && task.text) {
      setTodoList([...todoList, task]);
      localStorage.setItem("todoList", JSON.stringify([...todoList, task]))
    }
  }, [task])

  return (
    <globalContext.Provider value={contextValue}>
      <main>
        <AddTask />
        <ToDoList list={todoList} />
      </main>
    </globalContext.Provider>
  );
}
