import { Link } from "react-router-dom"
import { useState } from "react"

export function Navigation(){
    const [activePath, setActivePath] = useState('/');
    
    return(
       <nav className="navbar"> 
            <ul>
                <li> <Link 
                    to="/"
                    onClick={()=> setActivePath("/")}
                    style={{
                        textDecoration: activePath === "/" ? "underline" : "none"
                    }}
                    >
                        Accueil 
                </Link> </li>

                <li> <Link
                    to="/APropos"
                    onClick={()=> setActivePath("/APropos")}
                    style={{
                        textDecoration: activePath === "/APropos" ? "underline" : "none"
                    }}
                    >
                        A Propos 
                </Link> </li>
            </ul>
       </nav>
    )

}
