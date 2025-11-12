
export function AccomodationTags({accomodationTags}){

    return (
        <div className="accomodationTags">
            {accomodationTags.map((tag)=>
            <div key={tag} className="tag">
                {tag}
            </div>    
            )}
        </div>
    )

}