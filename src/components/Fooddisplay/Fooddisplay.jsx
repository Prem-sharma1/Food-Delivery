import React, { useContext } from 'react'
import './Fooddisplay.css'
import { StoredContext } from '../../context/Storedcontext'
import FoodItem from '../FoodItem/FoodItem'

const Fooddisplay = ({category}) => {

    const{food_list}=useContext(StoredContext)
  return (
    <div className='Food-display'id='Food-display'>
      <h2>Top Dishes are Waiting For You</h2>
      <div className="Food-display-list">
        {food_list.map((item,index)=>{
          if (category==="All" || category===item.category) {
            return<FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
        })}
      </div>
    </div>
  )
}

export default Fooddisplay
