import './App.css';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import LandingPage from './components/LandingPage/LandingPage';

import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  return (
      <Routes >
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
  );
}

export default App;
