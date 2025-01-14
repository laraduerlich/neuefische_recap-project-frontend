import {useEffect, useState} from "react";
import {ToDo} from "../type/ToDo.tsx";
import axios from "axios";
import ToDoCard from "./ToDoCard.tsx";

export default function ToDoDashboard() {

    const [data, setData] = useState<ToDo[]>([]);

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
            {data.map(todo =>{
                switch (todo.status){
                    case "OPEN":
                        return <>
                            <h2>Offen</h2>
                            <ToDoCard key={todo.id} todo={todo} />
                        </>
                    case "IN_PROGRESS":
                        return <>
                            <h2>In Bearbeitung</h2>
                            <ToDoCard key={todo.id} todo={todo} />
                        </>
                    case "DONE":
                        return <>
                            <h2>Erledigt</h2>
                            <ToDoCard key={todo.id} todo={todo} />
                        </>
                    default:
                        return <p>Keine Todos</p>
                }
            })}

        </>
    )
}