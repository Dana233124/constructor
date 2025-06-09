import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrameScreen from "./components/FrameScreen";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";  // импорт компонента Dashboard

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrameScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* маршрут Dashboard */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
