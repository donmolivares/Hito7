import {createContext, useContext, useEffect, useState } from "react";


export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const apiUrl = "http://localhost:5000/api/pizzas";
  const [products, setProducts]            = useState([]);
  const [carrito,setCarrito]               = useState([]);
  const [totalcompra,setTotalcompra]       = useState();
  const [token,setToken]                   = useState(true);
  const [user,setUser]                     = useState();

  const consultaApi = async () => {
    console.log("Llamando a la API");
    const respuesta = await fetch(apiUrl);
    let data = await respuesta.json();
    setProducts(data);
    setUser("Marcelo Olivares")
    setToken(true)
  }; 


  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")) || null)
    consultaApi();
  }, []);


  const buyProducts = (product) => {
    const productrepeat = carrito.find((item) => item.id === product.id)
    TotalizadorCarrito2();
  if(productrepeat){
        setCarrito(carrito.map((item) => (item.id === product.id ? {...product, quanty: productrepeat.quanty + 1}     : item     )))
    }else{
        setCarrito([...carrito, product])
    }
    
    
  }

  const TotalizadorCarrito2 = () => {
    
    const total = carrito.reduce((acc, el) => acc + el.price * el.quanty, 0 )
    setTotalcompra(total)
    console.log(totalcompra)
  }  
    
  return (
    <GlobalContext.Provider
        value={{
          user,
          setUser,
          token,
          setToken,
          products, 
          setProducts, 
          carrito, 
          setCarrito, 
          buyProducts, 
          totalcompra, 
          setTotalcompra,
          TotalizadorCarrito2,
          }}>

    { children }    
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;