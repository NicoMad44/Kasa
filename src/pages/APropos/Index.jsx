import { Banner } from "../../components/Banner/Banner"
import { CollapseBox } from "../../components/CollapseBox/CollapseBox"
import { aProposContent } from "../../data/aProposContent"



export function APropos(){

    const contentBoxes = aProposContent.map((cBox)=>
        <CollapseBox key={cBox.title} title={cBox.title} content={cBox.content} />
    )

    return (
        <div>
            <Banner bannerImg="montaines.png" bannerText="" />
            <div className="aProposMain">
                {contentBoxes}
            </div>
        </div>
    )
}