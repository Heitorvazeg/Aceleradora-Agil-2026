// Props permite criar imagens que utilizam o mesmo template mas possuem propriedades diferentes
function Photo({src, alt, name}) {
    return (
        <div>
            <img src={src} alt={alt} />
            <h2>{name}</h2>
        </div>
    )
}

export default Photo;