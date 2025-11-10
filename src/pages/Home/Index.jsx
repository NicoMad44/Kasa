import { accomodationList } from "../../data/accomodationList"
import { AccomodationGalleryCard } from "../../components/AccomodationGalleryCard/AccomodationGalleryCard"
import { Banner } from "../../components/Banner/Banner" 


export function Home(){
    return (
        <div>
            <Banner bannerImg="src/assets/coast.png" bannerText="Chez vous, partout et ailleurs" />
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