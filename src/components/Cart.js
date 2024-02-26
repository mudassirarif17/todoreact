import React , {useContext , useEffect} from 'react';
import { CartContext } from '../context/Cart';

const Cart = () => {
         let cart = useContext(CartContext);
         let total = cart.item.reduce((a,b)=> a+b.price , 0);
        
  return (
    <div>
        <h1>Cart</h1>
        {
            cart.item.map((data , index)=>(
                <p>{data.name} - {data.qty} - {data.price}</p>
            ))
        }
        <p>Total : {total}</p>
    </div>
  )
}

export default Cart