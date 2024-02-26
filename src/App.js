import React from 'react'
import Items from './components/Items'
import Cart from './components/Cart'

const App = () => {
  return (
    <div style={{display : "flex" , flexDirection : "column" , alignItems : "center"}}>
        <Items name={"Hp Laptop"} price={50000}  qty={1}/>
        <Items name={"Dell Laptop"} price={60000} qty={1}/>
        <Items name={"Lenovo Laptop"} price={40000} qty={1}/>
        <Cart/>
    </div>
  )
}

export default App