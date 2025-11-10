import { useParams } from 'react-router-dom'


export function Logement(){
const accomodationId = useParams()
console.log(accomodationId)
    return (
        <p>Fiche Logement numero: {accomodationId}</p>
    )
}
