import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    
    <div className='explore-menu' id='explore-menu'>
       <h1>Menu list</h1>
      <p className='explore-menu-text'>In our website you seen different types of foods and they have different rates and different tastes but beleive us we give our best </p>
      
      <div className='explore-menu-list'>
        {menu_list.map((item,Index)=>{
            return(
        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={Index}className='explore-menu-list-item'>
            <img className={category==item.menu_name?"active":" "}src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
            </div>
        )
        })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu
