
export function HostInfo({hostName, hostPicture}){

    return (

        <div className="hostInfo" >
            <p className="orangeText hostName">{hostName}</p>
            <img src={hostPicture} alt={`portrait du proprietaire ${hostName}`} />
        </div>

    )



}