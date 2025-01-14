import axios from "axios";
import {useEffect, useState} from "react";
import {ToDo} from "../type/ToDo.tsx";
import ToDoCard from "../compontent/ToDoCard.tsx";


export default function DonePage() {

    const[data, setData] = useState([])
    const doneTodos: ToDo[] = data.filter((todo: ToDo) => todo.status === "DONE")

    function fetchOpenToDos() {
        axios.get("/api/todo")
            .then(response => {setData(response.data)})
    }

    useEffect(() => {
        fetchOpenToDos()
    }, []);

    return(
        <>
            <h1>Erledigte ToDo's:</h1>
            {doneTodos.length !== 0 ?
                doneTodos.map((todo: ToDo) => (<div key={todo.id}><ToDoCard todo={todo} /> </div>))
             :
                <p>Noch keine erledigten ToDo's :(</p>
            }
        </>
    )
}