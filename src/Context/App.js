import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem("TOKEN");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      axios.get("/users").then((res) => setUserData(res.data.user));
    } else {
    }
  }, [token, navigate]);

  return (
    <AppContext.Provider value={{ userData, setUserData }}>
      {children}
    </AppContext.Provider>
  );
}
