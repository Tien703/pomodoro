import { createContext, useContext,useState,} from "react";

const AppContext = createContext();
export function AppProvider({children}) {
    const [setting, setSetting] =useState({
        focusTime : 25, //default focusTime
        shortBreak: 5,  // default breakTime
        longBreak: 15,  // default longBreakTime
    }
        ); 
    const update_setting = (newSetting) => {
        setSetting((prev) =>({...prev, ...newSetting}));
    };

    return (
        <AppContext.Provider value={{setting, update_setting}}>
            {children}
        </AppContext.Provider>
    )
}
export const useApp =() => useContext(AppContext);