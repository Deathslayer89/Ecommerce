import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'
import {useAppContext} from '../context/StateContext'
import Cart from './Cart'
const Navbar = () => {
  const {showCart,setShowCart,totalQuantities}=useAppContext();

  return (
    <div className='navbar-container'>
    <p className="logo">
      <Link href='/'>
          Online Store
      </Link>
    </p>
    <button onClick={()=>setShowCart(true)} type='button' className="cart-icon">
    <AiOutlineShopping/>
    <span className="cart-item-qty">{totalQuantities}</span>
    </button>
    {showCart&&<Cart/>}
    </div>
    
  )
}

export default Navbar