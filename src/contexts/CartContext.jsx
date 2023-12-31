import { createContext } from "react";
import { useState } from "react"

 export const CartContext = createContext([])


 export const CartContextProvider = ({children}) => {
   const [cart, setCart] = useState([])

   console.log(cart);

   const addProd = (prod, quantity) => {
      if (!isInCart(prod.id)) {
         setCart(prev => [...prev, {...prod, quantity}])
      } else {
         console.log("el producto ya fue agregado");
      }
   }
   const removeProd = (ProdId) => {
      const cartUpdate = cart.filter(prod => prod.id !== ProdId )
      setCart(cartUpdate)
   }
   const clearCart = () => {
      setCart([])
   }
   const isInCart = (ProdId) => {
      return cart.some(prod => prod.id === ProdId)
   }

   // FUNCION DEL CARTWIDGET
   const cantidadCart = () => {
      return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }


   return(
      <CartContext.Provider value={{cart, addProd, removeProd, clearCart, cantidadCart}}>
         {children}
      </CartContext.Provider>
   )
 }

