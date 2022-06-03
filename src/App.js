import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { userContext } from './context/UserContext'
import './App.css'


import 'react-calendar/dist/Calendar.css';
import Header from "./Components/Header/Header";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Dashboard from "./Page/Dashboard";
import Login from "./Page/Login/Login";
import Staff from "./Page/Staff/Staff";
import Users from "./Page/Users/Users";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))


  return (
    <div className="app">
      <userContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<RequireAuth> <Dashboard /> </RequireAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<RequireAuth> <Users /> </RequireAuth>} />
          <Route path="/patients" element={<RequireAuth> <Staff /> </RequireAuth>} />
        </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;
