import { Children, createContext, useState } from "react";

export const FilterContext = createContext();

// Context provider permite o acesso à variável filter por toda a aplicação
// É útil para aplicar o filtro dentro do componente Body, que contém as fotos
export const FilterProvider = ({ children }) => {
    const [filter, setFilter] = useState();

    return (
        <FilterContext.Provider value={{filter, setFilter}}>
            {children}
        </FilterContext.Provider>
    )
}