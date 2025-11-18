import starFull from "../../assets/starFull.png"
import starVide from "../../assets/starVide.png"


export function AccomodationRating({accomodationNbStars}){
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      // Si on est dans la limite du rating, étoile pleine sinon vide
      const starImg = i <= accomodationNbStars ? starFull : starVide;
      stars.push(
        <img className="star"
          key={i} 
          src={starImg} 
          alt={i <= accomodationNbStars ? 'Star Full' : 'Star Empty'} 
        />
      );
    }
    return <div className="stars">{stars}</div>;
}