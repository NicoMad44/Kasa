import { useParams } from 'react-router-dom'
import { accomodationList } from '../../data/accomodationList'
import { Error } from '../../components/Error/Error';
import { Slideshow } from '../../components/Slideshow/Slideshow';

export function Accomodation(){
    const {accomodationId} = useParams()
    const accomodationToDisplay = accomodationList.find(item => item.id === accomodationId);
    if (typeof accomodationToDisplay === "undefined") {
        return  <Error /> 
    }   else {
        return  <div key={accomodationId} className='accomodationPage'>
                    {/* <img src={accomodationToDisplay.cover} alr={accomodationToDisplay.title} /> */}
                    <Slideshow pictures={accomodationToDisplay.pictures}/>
                </div> 
    }
}
