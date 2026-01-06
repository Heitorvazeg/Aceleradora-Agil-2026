import { useContext, useState } from "react";
import { FilterContext } from "../context/context";

function Bar () {
    const [setFilter] = useContext(FilterContext);
    const [value, setValue] = useState("");

    // Obs: Não faz sentido filtrar em tempo real e ainda assim usar a lupa.
    // Optei por apenas utilizar a lupa, e filtrar ao clicar.
    return (
        <div>
            <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
            <button onClick={() => {
                setFilter(value)
            }}><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    )
}

export default Bar;