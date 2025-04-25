import React from "react";
import Cardpizzas from "../componentes/Cardpizzas";

import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

const Home = () => {
    const {products, setProducts,TotalizadorCarrito2} = useContext(GlobalContext)
    
    return(
        <>
        <div className="muestra-pizzas">
        {products.map((item,index)=>(
            <Cardpizzas 
            product = {{...item, quanty:1}}                                 />
        ))}
        </div>   
        </>
        )
 }

 export default Home