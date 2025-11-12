export function CBContent({isOpenStatus, content}){
    let results = []
    if(Array.isArray(content)){
        for(let i=0; i<content.length; i++){
            results.push(
                <li key={i}>{content[i]}</li>
            )
        }
        return (
            isOpenStatus ? 
        <div className="cbContent">
            <ul>
                {results}
            </ul>
        </div>
        :
        <div className="cbContent">
            <ul>
                {results}
            </ul>
        </div>  
        ) 
    } else {
        return (
            isOpenStatus ? 
        <div className="cbContent">
            <p>{content}</p>
        </div>
        :
        <div className="cbContent">
            <p>{content}</p>
        </div>
        )
    }

}