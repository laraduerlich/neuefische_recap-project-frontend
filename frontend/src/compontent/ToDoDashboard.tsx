import {useEffect, useState} from "react";
import {ToDo} from "../type/ToDo.tsx";
import axios from "axios";
import ToDoCard from "./ToDoCard.tsx";

export default function ToDoDashboard() {

    const [data, setData] = useState<ToDo[]>([]);
    const openTodos: ToDo[] = data.filter((todo: ToDo) => todo.status === "OPEN");
    const inProgressTodos: ToDo[] = data.filter((todo: ToDo) => todo.status === "IN_PROGRESS");
    const doneTodos: ToDo[] = data.filter((todo: ToDo) => todo.status === "DONE");

    function fetchAllToDos() {
        axios.get("/api/todo")
            .then(response => {setData(response.data)})
        console.log(data)
    }

    useEffect(() => {
        fetchAllToDos()
    },[])

    return (
        <>
            <div>
                <h2>Offen:</h2>
                {openTodos.map((todo: ToDo) => <ToDoCard key={todo.id} todo={todo}/>)}
            </div>
            <div>
                <h2>In Bearbeitung:</h2>
                {inProgressTodos.map((todo: ToDo) => <ToDoCard key={todo.id} todo={todo}/>)}
            </div>
            <div>
                <h2>Erledigt:</h2>
                {doneTodos.map((todo: ToDo) => <ToDoCard key={todo.id} todo={todo}/>)}
            </div>

        </>
    )
}