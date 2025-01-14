import {useEffect, useState} from "react";
import {ToDo} from "../type/ToDo.tsx";
import axios from "axios";
import ToDoCard from "./ToDoCard.tsx";

export default function ToDoDashboard() {

    const [data, setData] = useState<ToDo[]>([]);
    const toDos = data.map(todo => <ToDoCard key={todo.id} todo={todo}/>)

    function fetchData() {
        axios.get("/api/todo")
            .then(response => {setData(response.data)})
        console.log(data)
    }

    useEffect(() => {
        fetchData()
    },[])

    return (
        <>
            {toDos}
        </>
    )
}