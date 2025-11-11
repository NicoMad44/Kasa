export function CBContent({isOpenStatus, content}){

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