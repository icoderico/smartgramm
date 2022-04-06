import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({children}) {
    const [userData, setUserData] = useState(null);

    return (
        <AppContext.Provider value={{userData, setUserData}}>
            {children}
        </AppContext.Provider>
    )
}