import { FaCartShopping } from "react-icons/fa6";


interface Props {
    cartItemsLength: number
}

const Nav = (props: Props) => {
  return (
    <>
        <h1><FaCartShopping /> {props.cartItemsLength}</h1>
    </>
  )
}
export default Nav