import { createContext, useContext, useState } from 'react';

type LayoutType = "table" | "grid";

type FilterContextType = {
  page: number;
  setPage: (page: number) => void;

  pageSize: number;
  setPageSize: (pageSize: number) => void;
  
  layoutType: LayoutType;
  setLayoutType: (layout: LayoutType) => void
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilterContext must be used within a FilterProvider');
  }
  return context;
};

type FilterProviderProps = {
  children: React.ReactNode;
};

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [layoutType, setLayoutType] = useState("table");

  const contextValue: FilterContextType = {
    page,
    setPage,
    pageSize,
    setPageSize,
    layoutType,
    setLayoutType,
  };

  return <FilterContext.Provider value={contextValue}>{children}</FilterContext.Provider>;
};
