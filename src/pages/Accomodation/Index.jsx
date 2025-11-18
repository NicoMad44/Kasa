import { useParams } from 'react-router-dom'
import { accomodationList } from '../../data/accomodationList'
import { Error } from '../../components/Error/Error';
import { Slideshow } from '../../components/Slideshow/Slideshow';
import { AccomodationTitle } from '../../components/AccomodationTitle/AccomodationTitle';
import { HostInfo } from '../../components/HostInfo/HostInfo'; 
import { AccomodationTags } from '../../components/AccomodationTags/AccomodationTags'; 
import { AccomodationRating } from '../../components/AccomodationRating/AccomodationRating';
import { CollapseBox } from '../../components/CollapseBox/CollapseBox';

export function Accomodation(){
    const {accomodationId} = useParams()
    const accomodationToDisplay = accomodationList.find(item => item.id === accomodationId);
    if (typeof accomodationToDisplay === "undefined") {
        return  <Error /> 
    }   else {
        return  <div key={accomodationId} className='accomodationPage'>
                    <Slideshow pictures={accomodationToDisplay.pictures}/>
                    <div className='accomodationInfo'>
                        <AccomodationTitle accomodationTitle={accomodationToDisplay.title} accomodationLocation={accomodationToDisplay.location} />
                        <HostInfo hostName={accomodationToDisplay.host.name} hostPicture={accomodationToDisplay.host.picture}/>
                        <AccomodationTags accomodationTags={accomodationToDisplay.tags} />
                        <AccomodationRating accomodationNbStars={accomodationToDisplay.rating}/>
                    </div>
                    <div className='accomodationDetails'>
                        <CollapseBox title="Description" content={accomodationToDisplay.description} />
                        <CollapseBox title="Équipements" content={accomodationToDisplay.equipments} />
                    </div>

                </div> 
    }
}
