import axios from "axios";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import { setLocal } from "./Utils/localStorage";
import Dashboard from "./Pages/Dashboard";
import MainLayout from "./Components/Core/MainLayout";

const App = () => {
  const url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";
  const fetchUsers = async () => {
    const res = await axios.get(url);
    const users = res.data;
    setLocal("LendsqrUsers", users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route element={<MainLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
