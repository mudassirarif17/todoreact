import React , {useContext} from 'react';
import { CartContext } from '../context/Cart';

const Items = (props) => {
    const cart = useContext(CartContext);
    console.log(cart);


    const AddToCart = () => {
        const existingItem = cart.item.find(data => data.name === props.name);
    
        if (existingItem) {
            const updatedCart = cart.item.map(item =>
                item.name === props.name
                    ? { ...item, qty: item.qty + props.qty, price: existingItem.price + props.price }
                    : item
            );
    
            cart.setItem(updatedCart);
        } else {
            cart.setItem([...cart.item, { name: props.name, price: props.price, qty: props.qty }]);
        }
    };
    

  return (
    <div>
        <h3>Name : {props.name} qty : {props.qty}</h3>
        <p>price : {props.price}</p>
        <button onClick={AddToCart}>Add to cart</button>
    </div>
  )
}

export default Items