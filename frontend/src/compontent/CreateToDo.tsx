import {FormEvent, useState} from "react";
import axios from "axios";
import {ToDo} from "../type/ToDo.tsx";

export default function CreateToDo() {

    const [description, setDescription] = useState("")
    const [id, setId] = useState(2)
    const todo: ToDo = {
        id: id,
        description: description,
        status: "OPEN"
    }

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(description);
        axios.post("/api/todo", todo)
            .then(response => console.log(response.data))
        setId(id + 1)
        setDescription("")
    }

    return (
        <>
            <div>
            <form onSubmit={onSubmit}>
                <label>Beschreibung:
                    <input
                        type={"text"}
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </label>
                <button>Hinzufügen</button>
            </form>
            </div>
        </>
    )
}