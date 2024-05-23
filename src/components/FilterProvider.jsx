import { createContext, useContext, useState, useEffect } from "react";

export const FiltersContext = createContext({});

function FilterProvider({children}) {
  const filterMethods = {
    All: (task) => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed
  }

  const filterClicked = {
    All: true,
    Active: false,
    Completed: false
  }
  
  const [filters, setFilters] = useState(filterClicked);

    return (
        <FiltersContext.Provider value={{filterMethods, filters, setFilters}}>
            {children}
        </FiltersContext.Provider>
    )
}

export const useFiltersContext = () => useContext(FiltersContext);

export default FilterProvider;