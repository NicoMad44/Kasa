import { Link } from "react-router-dom"
export function Navigation(){

    return(
       <nav className="navbar"> 
            <ul>
                <li> <Link to="/"> Acceuil </Link> </li>
                <li> <Link to="/APropos"> A Propos </Link> </li>
            </ul>

       </nav>
    )

}
