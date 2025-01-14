import axios from "axios";
import {useEffect, useState} from "react";
import {ToDo} from "../type/ToDo.tsx";
import ToDoCard from "../compontent/ToDoCard.tsx";


export default function DoingPage() {

    const[data, setData] = useState([])
    const inProgressTodos = data.filter((todo: ToDo) => todo.status === "IN_PROGRESS");

    function fetchOpenToDos() {
        axios.get("/api/todo")
            .then(response => {setData(response.data)})
        data.filter((todo: ToDo)  => todo.status === "IN_PROGRESS")
    }

    useEffect(() => {
        fetchOpenToDos()
    }, []);

    return(
        <>
            <h1>in Bearbeitung:</h1>
            {inProgressTodos.length !== 0 ?
                inProgressTodos.map((todo: ToDo) => (<div key={todo.id}><ToDoCard todo={todo} /> </div>))
                :
                <p>Keine ToDo's in Bearbeitung :(</p>
            }
        </>
    )
}