import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Lichka from "./Pages/Lichka/Lichka";
import Chatlist from "./Pages/Chatlist/Chatlist";
import Userinfo from "./Pages/Userinfo/Userinfo";
import axios from "axios";
import { AppProvider } from "./Context/App";
import { QueryClientProvider, QueryClient, Query } from "react-query";

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
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lichka/:id" element={<Lichka />} />
          <Route path="/list" element={<Chatlist />} />
          <Route path="/user" element={<Userinfo />} />
        </Routes>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
