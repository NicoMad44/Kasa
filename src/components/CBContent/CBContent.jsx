export function CBContent({content}){
    let results = []
    if(Array.isArray(content)){
        for(let i=0; i<content.length; i++){
            results.push(
                <li key={i}>{content[i]}</li>
            )
        }
        return (
            <div className="cbContent">
                <ul>
                    {results}
                </ul>
            </div>  
        ) 
    } else {
        return (
            <div className="cbContent">
                <p>{content}</p>
            </div>
        )
    }

}