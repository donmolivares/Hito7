import { useContext } from 'react'
import { GlobalContext } from "../../context/GlobalContext";
import ElementoCarrito from './ElementoCarrito'
import TotalizadorCarrito from './TotalizadorCarrito'
import './Carrito.css'




const MuestraCarrito = () => {
  const {carrito, TotalizadorCarrito2} = useContext(GlobalContext)
  TotalizadorCarrito2()
 
 
  return (
    <>
        {carrito.length > 0 ? (
        <>
         
          <ElementoCarrito/>
          <TotalizadorCarrito/>
        </>
      ) : (
        <h2 className='cart-message-center'>Tu Carro esta vacio </h2>
        
      )}
  </>
    )
}

export default MuestraCarrito



