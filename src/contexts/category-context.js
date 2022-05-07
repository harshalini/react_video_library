import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";
const CategoriesContext = createContext([]);
const CategoriesProvider = ({ children }) => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
      (async () => {
        try {
          const {
            data: { categories }
          } = await axios.get("/api/categories");
          setCategory(categories);
        } catch {
          console.error("an error occured");
        }
      })();
    }, []);
  
    return (
      <CategoriesContext.Provider value={{ category }}>
        {children}
      </CategoriesContext.Provider>
    );
  };
  
  const useCategory = () => useContext(CategoriesContext);
  
  export { useCategory, CategoriesProvider };