export function Banner({bannerImg, bannerText}){
    return(
        <div className="banner">
            <img src={bannerImg} alt="image de fond de la banniere soit montagne soit littoral"/>
            {bannerText==="" ?
                (<div></div>) :
                (<div className="banner__text">{bannerText}</div>)
            }
        </div>
    )
}