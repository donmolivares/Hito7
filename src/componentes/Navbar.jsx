import '../assets/Style.css'
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

 

const Navbar = () => {
    const {totalcompra, token,setUser,setToken} = useContext(GlobalContext)
    const totales = totalcompra;
    const navegar = useNavigate();

    const handleLogout = () => {
      console.log('cerrando session')
      setUser(null);
      setToken(false);
      localStorage.removeItem("user");
      navegar("/home");
  };
    return (
        <div className="container-barra">
            <div className="barra-izquierda">
              <h5>Pizzería Mamma Mía !</h5>
              {!token && (
              <>
              <NavLink className={({ isActive }) => (isActive ? "text-primary" : "text-danger")} 
                 aria-current="page" to="/">
                <button type="button" className="btn btn-secondary">🍕 Home</button>
              </NavLink>

              <Link className="nav-link" aria-current="page" to="/Login">
              <button type="button" className="btn btn-secondary">🔐 Login</button>
              </Link>

              <Link className="nav-link" aria-current="page" to="/Register">
              <button type="button" className="btn btn-secondary pl-5">📝 Register</button>
              </Link>
              </>
            )}

            {token && (
              <>
              <NavLink className={({ isActive }) => (isActive ? "text-primary" : "text-danger")} 
                 aria-current="page" to="/">
                <button type="button" className="btn btn-secondary">🍕 Home</button>
                
              </NavLink>

             
              <Link className="nav-link" aria-current="page" to="/Profile">
              <button type="button" className="btn btn-secondary pl-5">🧔 Profile</button>
              </Link>

              <Link className="nav-link" aria-current="page" to="/">
                  <button type="button" className="btn btn-secondary pl-5" onClick={() => {
                    handleLogout();}}>🚪 Logout
                  </button>
              </Link>
              </>
            )}

                
              
                

                
                
                
            </div>
            <div className="barra-derecho  text-info">
                
                <Link className="nav-link" aria-current="page" to="/Carrito">
                  
                   <button type="button" className="btn btn-secondary">🛒 Total Carrito</button>
              </Link>
              <h5> Total $</h5>
                <input className="total" type="text" name="" id="total-1" value={totalcompra}/>
            </div>

        </div>
        
    
    );
    };

 export default Navbar