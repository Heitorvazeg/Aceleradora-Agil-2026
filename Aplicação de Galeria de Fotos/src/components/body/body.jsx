import Photo from "./photo/photo";
import { photos } from "./bodyPhotos";
import { FilterContext } from "../context/context";
import { useContext } from "react";
import "./body.css";

function Body() {
  const { filter } = useContext(FilterContext);

  // Aplica filtro ás fotos de acordo com o valor digitado na bar
  const filteredPhotos = photos.filter(photo =>
    !filter || photo.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section>
      <div>
        {filteredPhotos.length === 0 ? (
          <p>Nenhuma foto encontrada.</p>
        ) : (
          filteredPhotos.map(photo => (
            <Photo
              src={photo.src}
              alt={photo.alt}
              name={photo.name}
              key={photo.id}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default Body;
