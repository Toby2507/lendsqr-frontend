import axios from "axios";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import { setLocal } from "./Utils/localStorage";
import Dashboard from "./Pages/Dashboard";
import MainLayout from "./Components/Core/MainLayout";
import UserPage from "./Pages/UserPage";
import { userInterface } from "./Utils/interfaces";

const App = () => {
  const url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";
  const fetchUsers = async () => {
    const res = await axios.get(url);
    let users: userInterface[] = res.data;
    const married = ["single", "married", "divorced", "complicated"];
    const children = ["none", "yes"];
    users = users.map(user => {
      const randTier = Math.ceil(Math.random() * 3);
      const randStatus = Math.floor(Math.random() * 4);
      const randMarry = Math.floor(Math.random() * 4);
      const randKid = Math.floor(Math.random() * 2);
      return { ...user, userTier: randTier, userStatus: randStatus, profile: { ...user.profile, maritalStatus: married[randMarry], children: children[randKid] } };
    });
    setLocal("LendsqrUsers", users);
  };

  useEffect(() => { fetchUsers(); }, []);
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route element={<MainLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user/:userId" element={<UserPage />} />
      </Route>
    </Routes>
  );
};

export default App;
