import { Link } from "react-router-dom"
import { useState, useEffect } from "react" 
import { useLocation } from "react-router-dom"

export function Navigation(){
    const location = useLocation()
    const [activePath, setActivePath] = useState(location.pathname)
    const [linkStyleHome, setLinkStyleHome] = useState("underline")
    const [linkStyleAPropos, setLinkStyleAPropos] = useState("none")
    useEffect(() => {
        setActivePath(location.pathname)
        switch (activePath) {
            case "/":
                setLinkStyleHome("underline");
                setLinkStyleAPropos("none");
                break;
            case "/APropos":
                setLinkStyleHome("none");
                setLinkStyleAPropos("underline");
                break;
            default:
                setLinkStyleHome("none");
                setLinkStyleAPropos("none");;
        }
    }, [activePath, location.pathname])
    
    
    return(
       <nav className="navbar"> 
            <ul>
                <li> <Link 
                    to="/"
                    style={{
                        textDecoration: linkStyleHome
                    }}
                    >
                        Accueil 
                </Link> </li>

                <li> <Link
                    to="/APropos"
                    style={{
                        textDecoration: linkStyleAPropos
                    }}
                    >
                        A Propos 
                </Link> </li>
            </ul>
       </nav>
    )

}
