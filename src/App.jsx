import React, { useState } from 'react'
import Navbar from './components/Navbar'
import{Routes,Route}from 'react-router-dom'
import Home from './components/pages/home/Home'
import Cart from './components/pages/cart/Cart'
import Footer from './components/Footer/Footer'
import LoginPop from './components/LoginPop/LoginPop'
import PlaceOrder from './components/pages/placeorder/PlaceOrder'

const App = () => {
 const[showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPop setShowLogin={setShowLogin} />:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
      <Routes>
<Route path='/' element={<Home/>}/> 
<Route path='/cart' element={<Cart/>}/>
<Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
        </div>
        <Footer/>
        </>
  )
}

export default App

