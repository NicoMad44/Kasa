import KasaLOGO from "../../assets/KasaLOGO.png"
import { Navigation } from "../Navigation/Navigation"

export function Header(){
    return(
        <header>
            <h1><img src={KasaLOGO} alt="logo de Kasa" /></h1>
            <Navigation />
        </header>
    )
}

