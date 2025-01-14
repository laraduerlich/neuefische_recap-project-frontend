import axios from "axios";
import {useEffect, useState} from "react";
import {ToDo} from "../type/ToDo.tsx";
import ToDoCard from "../compontent/ToDoCard.tsx";


export default function OpenPage() {

    const[data, setData] = useState([])
    const openTodos: ToDo[] = data.filter((todo: ToDo) => todo.status === "OPEN");


    function fetchOpenToDos() {
        axios.get("/api/todo")
            .then(response => {setData(response.data)})
    }

    useEffect(() => {
        fetchOpenToDos()
    }, []);

    return(
        <>
            <h1>Offene ToDo's</h1>
            {openTodos.length !== 0 ?
                openTodos.map((todo: ToDo) => (<div key={todo.id}><ToDoCard todo={todo} /> </div>))
                :
                <p>Keine offenen ToDo's</p>
            }
        </>
    )
}