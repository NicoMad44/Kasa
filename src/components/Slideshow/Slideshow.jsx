import { useState } from "react";

export function Slideshow({pictures}){
    const [index, setIndex] = useState(0)

    function clickNext(){
        if (index<pictures.length-1) {
            setIndex(index+1)
        } else {
            setIndex(0)
        }
    }

    function clickPrev(){
        if (index>0) {
            setIndex(index-1)
        } else {
            setIndex(pictures.length-1)
        }
    }


    return (
        pictures.length>1 ? 
    <div className="slideshow">
        <img className="displayedImage" src={pictures[index]} alt="photo du logement"/>
        <div className="slideshowNav">
            <img src={"/src/assets/arrowLeft.png"} alt="button to see the previous picture" onClick={clickPrev}/> 
            <span className="slideShowCounter">{index+1}/{pictures.length}</span>
            <img src={"/src/assets/arrowRight.png"} alt="button to see the next picture" onClick={clickNext}/>
        </div>
    </div>
    :
    <div className="slideshow">
        <img className="displayedImage" src={pictures[index]} alt="photo du logement"/>
    </div>
    )
}