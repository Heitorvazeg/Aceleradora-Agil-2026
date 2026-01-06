import Photo from "./photo/photo";
import { photos } from "./bodyPhotos";
import { FilterContext } from "../context/context";
import { useContext } from "react";

function Body() {
    const [filter] = useContext(FilterContext);

    // Aplica filtro de fotos de acordo com o valor do "filter" do context

    return (
        <section>
            <div>
                {photos.forEach((element) => {
                    if (element.name.includes(filter)) {
                        <Photo src={element.src} alt={element.alt} name={element.name}></Photo>
                    }
                })}
            </div>
        </section>
    )
}

export default Body;