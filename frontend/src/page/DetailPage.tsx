import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {ToDo} from "../type/ToDo.tsx";

export default function DetailPage() {

    const params = useParams();
    const [data, setData] = useState();
    const todo: ToDo | undefined = data as unknown as ToDo
    const navigate = useNavigate();

    function fetchTodo() {
        axios.get("/api/todo/" + params.id)
            .then((response) => {setData(response.data)})
    }

    function goBack() {
        navigate("/")
    }

    useEffect(() => {
        fetchTodo()
    }, [])

    if (!todo) {
        return <div>Todo existiert nicht</div>
    }

    return (
        <>
            <h1>Details:</h1>
            <h3>{todo.description}</h3>
            <p>Status: {todo.status}</p>
            <button onClick={goBack}>Zurück</button>
        </>
    )
}