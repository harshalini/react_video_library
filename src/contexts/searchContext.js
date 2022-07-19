import { createContext, useContext } from "react";
import { FilterReducer } from "../reducers/filter-reducer";
const SearchContext = createContext();
import { useReducer } from "react";
const SearchProvider = ({ children }) => {
    const [state, dispatch] = useReducer(FilterReducer, {
        searchVal: ""
    })
    
    return (
        <SearchContext.Provider value={{ state, dispatch }}>
            {children}
        </SearchContext.Provider>
    )
}

const useSearch = () => useContext(SearchContext)

export { SearchProvider, useSearch }