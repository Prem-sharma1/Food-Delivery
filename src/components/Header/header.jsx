import React from 'react'
import './Header.css'
import gsap from 'gsap'
import { useLayoutEffect,useRef } from 'react'
const header = () => {
  const comp= useRef(null)
        useLayoutEffect(()=>{
    let ctx=gsap.context(()=>{
      const t1=gsap.timeline()
      t1.from("container",{
       xPercent:"-100",
       duration:'3s',
       delay:'0.3',
      }).from(["#title1","#title2","#title3" ],{
     opacity:0,
      y:"+=30",
   stagger:0.5,
      })
    },comp)
  return()=>ctx.revert()
  },[])
  return (
      <div className='container'ref={comp}>
     <div className='container-menu'>
        <h2 id='title1'>order your favourite food</h2>
    <p id='title2'>choose for the divorse menu and we give the guarentee for the faster food delivery as soon as possible that must be a pure and good quality of food  and we will happy to server you a deliciusa amd tasty food as well as </p>
    <button id='title3'>view menu</button>
    </div>
    </div>
  )
}

export default header
