import { createContext, useContext,useState,} from "react";

const AppContext = createContext();

export function AppProvider({children}) {
    const [setting, setSetting] =useState(()=>{
        const saved = localStorage.getItem('pomodoro-settings');
        if (saved) {
            return JSON.parse(saved);
        }
        return {

            focusTime : 30, //default focusTime
            shortBreak: 5,  // default breakTime
            longBreak: 15,  // default longBreakTime
        };
    }
        ); 
    const update_setting = (newSetting) => {
        setSetting((prev) =>{
            const updated = {...prev, ...newSetting};
            localStorage.setItem('pomodoro-settings', JSON.stringify(updated));
            return updated;
        });
    };

    return (
        <AppContext.Provider value={{setting, update_setting}}>
            {children}
        </AppContext.Provider>
    )
}
export const useApp =() => useContext(AppContext);