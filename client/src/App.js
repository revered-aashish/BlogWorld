import Header from "./components/header/Header";
import Topbar from "./components/topbar/Topbar";
import Home from './pages/home/Home'
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import React, { useContext } from "react";
import { Context } from "./components/context/Context";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/register" element={user ? <Home /> : <Register />} >
        </Route>
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        
      </Routes>
    </Router>
  );
}

export default App;
