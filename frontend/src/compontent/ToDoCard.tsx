import {ToDo} from "../type/ToDo.tsx";


type TodoCardProps = {
    todo: ToDo
}

export default function ToDoCard(props: TodoCardProps) {


    return(
        <>
            <div>
                <h3>{props.todo.description}</h3>
            </div>
        </>
    )
}