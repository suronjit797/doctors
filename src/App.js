import { Route, Routes } from "react-router-dom";
import './App.css'

import Header from "./Components/Header/Header";
import Dashboard from "./Page/Dashboard";
import Login from "./Page/Login";

function App() {
  return (
    <div>

      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
