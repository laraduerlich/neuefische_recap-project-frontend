import {Link} from "react-router-dom";

export default function NavBar() {

    return(
        <>
            <Link to={"/"}> Dashboard </Link>
            <Link to={"/open"}> Offen </Link>
            <Link to={"/doing"}> In Bearbeitung </Link>
            <Link to={"/done"}> Erledigt </Link>
        </>
    )
}