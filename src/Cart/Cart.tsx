interface Props {
   cartItems: string[]
   handleClick: () => void
}

const Cart = ({ cartItems, handleClick }: Props) => {
  return (
    <>
        <ul>
           {cartItems.map((item, idx) => {
            return <li key={idx}>{item}</li>
           })} 
        </ul>
        <button onClick={handleClick}>Clear Cart</button>
    </>
  )
}
export default Cart