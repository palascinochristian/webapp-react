import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

function useLoadingContext() {
  const context = useContext(LoadingContext);
  return context;
}

export { LoadingProvider, useLoadingContext };
