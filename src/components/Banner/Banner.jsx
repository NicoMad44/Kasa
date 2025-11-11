export function Banner({bannerImg, bannerText}){
    return(
        <div className="banner">
            <img src={`src/assets/${bannerImg}`} alt={`the image is representing a ${bannerImg}`}/>
            {bannerText==="" ?
                ("") :
                (<div className="banner__text">{bannerText}</div>)
            }
        </div>
    )
}