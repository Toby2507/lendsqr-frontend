import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";

const App = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
    </Routes>
  );
};

export default App;
