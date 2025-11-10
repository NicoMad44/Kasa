export function AccomodationGalleryCard({title, cover}){
    return (
        <div className="accomodationGalleryCard">
            <img className="cardImage" src={cover} alt={title} />
            <p> {title}</p>
        </div>
    )
}