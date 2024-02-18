import React from 'react'
import "./cart.css";

const Navbar = () => {
    var openMenu = document.getElementsByClassName("openMenu")[0];
var closeMenu = document.getElementsByClassName("closeMenu")[0];
var mblMenu = document.getElementsByClassName("mblMenu")[0];

// mblMenu.style.top = "-100%";

openMenu.addEventListener("click" , function(){
    mblMenu.style.top = "0%";
})

closeMenu.addEventListener("click" , function(){
    mblMenu.style.top = "-100%";
})


var cartMenu = document.getElementsByClassName("cartMenu")[0];
var cart = document.getElementsByClassName("cart")[0];
var CloseCart = document.getElementsByClassName("CloseCart")[0];

// cartMenu.style.display = "none";

cart.addEventListener("click" , function(){
    if(screen.width >= 900 ){
        cartMenu.style.transform = 'translateX(78.7vw)';
    }
    else{
        cartMenu.style.transform = 'translateX(50.7vw)';
    }
})

CloseCart.addEventListener("click" , function(){
    cartMenu.style.transform = 'translateX(100vw)'
})
  return (
    <div>
    {/* navbar */}
    <div class="navbar">
        <div class="openMenu"><h1><i class="fa-brands fa-windows"></i></h1></div>
        <div class="logo"><h1><i class="fa-solid fa-shirt"></i>CodesWear</h1></div>
        <ul class="nav-items">
            <li><a id="active" href="./index.html">Home</a></li>
            <li><a href="./tshirt.html">T Shirts</a></li>
            <li><a href="./mugs.html">Mugs</a></li>
            <li><a href="./stickers.html">Stickers</a></li>
            <li><a href="./hoody.html">Hoodies</a></li>
        </ul>
        <div class="cart"><h1><i class="fa-solid fa-cart-shopping"></i></h1><span class="count">99</span></div>
    </div>

    <div class="mblMenu">
        <ul class="mbl-nav-items">
            <li><a href="./index.html">Home</a></li>
            <li><a href="./tshirt.html">T Shirts</a></li>
            <li><a href="./mugs.html">Mugs</a></li>
            <li><a href="./stickers.html">Stickers</a></li>
            <li><a href="./hoody.html">Hoodies</a></li>
            <h1 class="closeMenu"><i class="fa-solid fa-xmark"></i></h1>
        </ul>
    </div>

    <div class="cartMenu">
        <ol class="cart-items">
            <li>Red Tshirt - (RS 500)</li>
            <li>Red Tshirt - (RS 500)</li>
            <li>Red Tshirt - (RS 500)</li>
            <li class="total">Total : RS 1500 </li>
            <h1 class="CloseCart"><i class="fa-solid fa-xmark"></i></h1>
        </ol>
    </div>
    </div>
  )
}

export default Navbar
