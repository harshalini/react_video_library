import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducers/filter-reducer";
const FilterContext = createContext()

const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(FilterReducer, {
        videoGenre: ""
    })
    return (
        <FilterContext.Provider value={{ state, dispatch }}>{children}</FilterContext.Provider>
    )
}

const useFilteredData = () => useContext(FilterContext)

export { useFilteredData, FilterProvider }