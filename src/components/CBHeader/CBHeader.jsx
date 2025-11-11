

export function CBHeader({isOpenStatus, title, SetIsOpenStatus}){

    function handleClick(){
        console.log("click detected and function launched")
        if(isOpenStatus){
            SetIsOpenStatus(false)
        } else {
            SetIsOpenStatus(true)
        }
    }

    return (
        <div className="cbHeader">
            <h2>{title}</h2>
            <div 
            onClick={handleClick}
            style={{
                cursor:'pointer',
                display:'inline-block',
                transition: 'transform 0.5s ease',
                transform: isOpenStatus ? 'rotate(-180deg)' : 'rotate(0deg)'
            }}
            >
                <img src="src/assets/arrowUp.png" alt="boutton pour ouvrir ou fermer la modal montrant"/>
            </div>
        </div>
    )
    





}