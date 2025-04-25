import { useContext, useState } from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import Header from './componentes/Header' 
import Navbar from './componentes/Navbar'
import Notfound from './componentes/Notfound'
import Profile from './componentes/Profile'
import Home from './pages/Home'
import Footer from './componentes/Footer'
import Pizza from './pages/Pizza'
import MuestraCarrito from './pages/Carrito/MuestraCarrito'
import Register from './pages/Register'
import Login from './pages/Login'
import { GlobalContext } from "./context/GlobalContext"

import Cardpizzas from './componentes/Cardpizzas';




function App() {
  const [count, setCount] = useState(0)
  const {setUser, user, token, setToken} = useContext(GlobalContext);
  console.log(user)
  const userIsLogged = false;
  return (
    <>
      <div className="d-flex flex-column min-vh-100 justify-content-between">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={token ? <Navigate to={"/"} /> : <Login />} />
          <Route path="/register" element={token ? <Navigate to={"/"} /> :<Register />} />
          
          <Route path="/carrito" element={<MuestraCarrito/>} />
          <Route path="/pizza/:cualpizza" element={<Pizza/>} />
      
       
          <Route path="/profile" element={!token ? <Navigate to={"/login"} /> : <Profile />} />
          
          <Route path="*" element={<Notfound/>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
 

export default App
