import React from 'react'
<<<<<<< HEAD
import Items from './components/Items'
import Cart from './components/Cart'

const App = () => {
  return (
    <div style={{display : "flex" , flexDirection : "column" , alignItems : "center"}}>
        <Items name={"Hp Laptop"} price={50000}  qty={1}/>
        <Items name={"Dell Laptop"} price={60000} qty={1}/>
        <Items name={"Lenovo Laptop"} price={40000} qty={1}/>
        <Cart/>
=======
import Navbar from './Cart/Navbar'
import Footer from './Cart/Footer'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Footer/>
>>>>>>> 75e5c421be484a71d8cee9bd398975088ce09ab0
    </div>
  )
}

export default App