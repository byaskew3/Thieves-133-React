import Cart from "./Cart/Cart"
import Games from "./Games/Games"
import { useState } from 'react'
import Nav from "./Nav/Nav"

const App = () => {

  const [cartItems, setCartItems] = useState(['coffee mug', 'jersey', 'camera'])

  const handleClick = () => {
    setCartItems([])
  }

  return (
    <>
      <Nav cartItemsLength={cartItems.length}/>
      <Cart cartItems={cartItems} handleClick={handleClick}/>
    </>
  )
}
export default App
