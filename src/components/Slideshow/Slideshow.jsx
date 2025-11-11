import arrowLeft from "src/assets/arrowLeft.png";
import arrowRight from "src/assets/arrowRight.png";
export function Slideshow(){
    

    return (
    <div className="slideshow">
        
        <img className="displayedImage" src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="photo du logement"/>
        <div className="slideshowNav">
            <img src={arrowLeft} alt="button to see the previous picture" /> 
            <img src={arrowRight} alt="button to see the next picture"/>
        </div>
    </div>
    )
}