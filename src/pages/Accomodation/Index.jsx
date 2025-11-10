import { useParams } from 'react-router-dom'



export function Accomodation(){
const accomodationId = useParams()
console.log(accomodationId)
    return (
        <div>
            <p>Fiche Logement numero:</p>
        </div>
    )
}
