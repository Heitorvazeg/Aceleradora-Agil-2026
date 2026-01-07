import { useContext, useState } from "react";
import { FilterContext } from "../context/context";
import "./bar.css";

function Bar () {
    const {filter, setFilter} = useContext(FilterContext);

    // Obs: Não faz sentido filtrar em tempo real e ainda assim usar a lupa.
    // Optei por filtrar em tempo real mas ainda assim com o botão
    return (
        <div className="bar">
            <input type="text" className="input" onChange={e => setFilter(e.target.value)}></input>
            <button className="botaoLupa"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    )
}

export default Bar;