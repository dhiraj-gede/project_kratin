import './App.css';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import LandingPage from './components/LandingPage/LandingPage';
import { SnackbarProvider, enqueueSnackbar } from 'notistack'

import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <SnackbarProvider>
      <Routes >
        <Route path="/*" element={<LandingPage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/register2" element={<Sidebar/>}></Route>

      </Routes>
    </SnackbarProvider>
  );
}

export default App;
