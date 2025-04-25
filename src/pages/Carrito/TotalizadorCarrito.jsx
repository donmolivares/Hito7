import {useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"


const TotalizadorCarrito = () => {
    const {carrito, totalcompra,setTotalcompra,token} = useContext(GlobalContext)

    const total = carrito.reduce((acc, el) => acc + el.price * el.quanty, 0 )
    setTotalcompra(total)
  return (
    <div className="cartTotal">
        <h3>Total a pagar: {total}</h3>
        <div>

        </div>
        {token && (
              <>
              <button type="button" disabled = {token === false}  class="btn btn-success" onClick=
              {()=>{ alert('Su Pago fue realizado con exito !!! Gracias por su compra'); }}> - Pagar -</button>
              </>
            )}
        
    </div>
  )
}
 
export default TotalizadorCarrito