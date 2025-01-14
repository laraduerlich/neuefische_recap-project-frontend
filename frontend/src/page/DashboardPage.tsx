import ToDoDashboard from "../compontent/ToDoDashboard.tsx";
import CreateToDo from "../compontent/CreateToDo.tsx";

export default function DashboardPage() {

    return(
        <>
            <h1>Meine ToDo's</h1>
            <CreateToDo />
            <ToDoDashboard />
        </>
    )
}