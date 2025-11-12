import { Link } from "react-router-dom"

export function AccomodationGalleryCard({title, cover, id}){
    return (
        <Link to={`/logements/${id}`}>
            <div className="accomodationGalleryCard">
                <img className="cardImage" src={cover} alt={title} />
                <p className="photoSubTitle"> {title}</p>
            </div>
        </Link>
    )
}