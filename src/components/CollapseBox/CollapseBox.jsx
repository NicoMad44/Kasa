import { useState } from "react"
import { CBHeader } from "../CBHeader/CBHeader";
import { CBContent } from "../CBContent/CBContent";

export function CollapseBox({title, content}){

    const [isOpenStatus, SetIsOpenStatus] = useState(false);

    return (
        <div className="cbContainer">
            <CBHeader title={title} isOpenStatus={isOpenStatus} SetIsOpenStatus={SetIsOpenStatus}/>
            <div 
            style={{
                display:'inline-block',
                transition: 'max-height 0.5s ease',  
                maxHeight: isOpenStatus ? '500px' : '0px',
                overflow: 'hidden',
            }} 
            >
                <CBContent content={content}/>
            </div>
        </div>
    )
}