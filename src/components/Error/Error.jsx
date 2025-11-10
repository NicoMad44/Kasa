import { Link } from "react-router-dom"

export function Error() {
    return (
      <div className="errorPage">
        <p className="error404">404</p>
        <h2 className="">Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/"> Retourner sur la page d’accueil </Link>
      </div>
    )
  }
