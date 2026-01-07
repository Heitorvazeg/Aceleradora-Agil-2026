import "./photo.css";

// Props permite criar imagens que utilizam o mesmo template mas possuem propriedades diferentes
function Photo({src, alt, name}) {
    return (
        <div className="photo">
            <img src={src} alt={alt} className="imagePhoto"/>
            <h2 className="namePhoto">{name}</h2>
        </div>
    )
}

export default Photo;