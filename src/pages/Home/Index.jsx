import { accomodationList } from "../../data/accomodationList"
import { AccomodationGalleryCard } from "../../components/AccomodationGalleryCard/AccomodationGalleryCard"


export function Home(){
    return (
        <div>
            <div className="introBanner">
                <div className="introBanner__text">
                    Chez vous, partout et ailleurs
                </div>
            </div>
            <div className="accomodationGallery">
            {accomodationList.map((accomodation) =>
					 (
						<div key={accomodation.id}>
							<AccomodationGalleryCard
								cover={accomodation.cover}
								title={accomodation.title}
							/>
						</div>
					)
				)}
            </div>
        </div>
    )
}