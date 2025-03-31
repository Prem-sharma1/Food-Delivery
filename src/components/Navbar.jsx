import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';
import { StoredContext } from '../context/Storedcontext';
const Navbar = ({setShowLogin}) => { 
  const [menu,setMenu]=useState("Menu");
 const{getTotalCartAmout}=useContext(StoredContext)
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>
     <ul className="navbar-menu">
<Link  to='/'onClick={()=>setMenu("Home")} className={menu==="Home" ? "active":" "}>Home</Link>
<a  href='#explore-menu'onClick={()=>setMenu("Menu")}  className={menu==="Menu" ? "active":" "} >Menu</a>
<a  href='#Appdownload' onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app" ? "active":" "} >Mobile-app</a>
<a  href='#footer' onClick={()=>setMenu("Contact-us")} className={menu==="Contact us" ? "active":" "} >Contact us</a>
     </ul>
<div className='Navbar-right'>
  <img src={assets.search_icon} alt=''/>
  <div className='navbar-search-icon'>
  <Link to='./cart' ><img src={assets.basket_icon} alt=''/></Link>
  <div className={getTotalCartAmout()===0?" ":"dot"}>
  </div>
  </div>
  <button onClick={()=>setShowLogin(true)}>Sign in</button>

</div>
    </div>
    
  )
}

export default Navbar
