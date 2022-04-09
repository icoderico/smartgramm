import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Lichka from "./Pages/Lichka/Lichka";
import Chatlist from "./Pages/Chatlist/Chatlist";
import Userinfo from "./Pages/Userinfo/Userinfo";
import axios from "axios";
import { AppProvider } from "./Context/App";
import ProtectedRoute from "./components/ProtectedRoute";
import { QueryClientProvider, QueryClient } from "react-query";

axios.defaults.baseURL = "https://telegram-alisherjon-api.herokuapp.com";
axios.defaults.headers = {
  authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
};
const queryclient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryclient}>
      <AppProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/lichka/:id"
            element={
              <ProtectedRoute>
                <Lichka />
              </ProtectedRoute>
            }
          />
          <Route
            path="/list"
            element={
              <ProtectedRoute>
                <Chatlist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedRoute>
                <Userinfo />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
