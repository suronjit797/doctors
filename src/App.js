import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { userContext } from './context/UserContext'
import './App.css'

import Header from "./Components/Header/Header";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Dashboard from "./Page/Dashboard";
import Login from "./Page/Login/Login";
import Doctors from "./Page/Doctors/Doctors";
import Staff from "./Page/Staff";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))


  return (
    <userContext.Provider value={{ user, setUser }}>
      <Header />
      <Routes>
        <Route path="/" element={<RequireAuth> <Dashboard /> </RequireAuth>} />
        <Route path="/login" element={<RequireAuth> <Login /> </RequireAuth>} />
        <Route path="/doctor" element={<RequireAuth> <Doctors /> </RequireAuth>} />
        <Route path="/staff" element={<RequireAuth> <Staff /> </RequireAuth>} />
      </Routes>

    </userContext.Provider>
  );
}

export default App;
