import { createContext, useContext,useState,} from "react";

const AppContext = createContext();
export function AppProvider({children}) {
    const [pomoDuration, setPomoDuration] =useState(''); 

    return (
        <AppContext.Provider value={{pomoDuration, setPomoDuration}}>
            {children}
        </AppContext.Provider>
    )
}
export const useApp =() => useContext(AppContext);