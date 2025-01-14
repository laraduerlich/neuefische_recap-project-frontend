import {ToDo} from "../type/ToDo.tsx";
import {useNavigate} from "react-router-dom";


type TodoCardProps = {
    todo: ToDo
}

export default function ToDoCard(props: TodoCardProps) {

    const navigate = useNavigate();

    function goToDetailPage() {
        navigate("/todo/" + props.todo.id);
    }

    return(
        <>
            <div>
                <h3>{props.todo.description}</h3>
                <button onClick={goToDetailPage}>Details</button>
                <button>Ändern</button>
                <button>Verschieben</button>
            </div>
        </>
    )
}