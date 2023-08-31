import React, { useContext, useState } from 'react'
import close from '../images/X.svg'
import { useNavigate } from 'react-router-dom'
import MENU from '../images/MENU.svg'
import WhiteMenu from '../images/MINI-U-White.svg'
import userContext from '../userContext'





export default function Header() {
  const[showProductsFlag,setShowProductsFlag] = useState(false)
  let nav = useNavigate()
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>
    {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show')
        }else
        {
            entry.target.classList.remove('show')
        }
    })
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el)=>{observer.observe(el)})

  const[flag,setFlag] = useState(false)
  const{showMenu,setShowMenu} = useContext(userContext)
  const theFlag = ()=>
  {
    if(flag == false)
    {
      return <img className='openClose' onClick={()=>{setFlag(!flag);setShowMenu('flex')}}  src={MENU} alt="menu" />
    }
    else
    {
      return <img className='openClose' onClick={()=>{setFlag(!flag);setShowMenu('none')}}  src={close} alt="menu" />
    }
  }
  const showProducts = ()=>
  {
    if(showProductsFlag == true)
    {
    return <div id='smallMenu'>
      <a style={{textDecoration:'none'}} className='menuButtons' href="/OurProductsDigitalMenu">תפריט דיגיטלי</a>
      <a style={{textDecoration:'none'}} className='menuButtons' href="/OurProductsBusinessCard">כרטיס ביקור</a>
    </div>
    }
  }
  return (
    <div>
        <header className='appBar'>
          <img id='mainLogominiu' src={WhiteMenu} alt="logo" />
          {theFlag()}
          <a style={{textDecoration:'none'}} href='/OurCustomers' className='menuButtonsFull'> הלקוחות שלנו</a>
          <a style={{textDecoration:'none'}} className='menuButtonsFull' href="/OurProductsBusinessCard">כרטיס ביקור</a>
          <a style={{textDecoration:'none'}} className='menuButtonsFull' href="/OurProductsDigitalMenu">תפריט דיגיטלי</a>
          <a style={{textDecoration:'none'}} href='/' className='menuButtonsFull'>דף הבית</a>
        </header>
        <div className='hidden' id='menuShow' style={{display:showMenu}}>
          <a style={{textDecoration:'none'}} href='/' className='menuButtons'>דף הבית</a>
          <a style={{textDecoration:'none'}} onClick={()=>{setShowProductsFlag(!showProductsFlag)}} className='menuButtons'>המוצרים שלנו</a>
          {showProducts()}
          <a style={{textDecoration:'none'}} href='/OurCustomers' className='menuButtons'> הלקוחות שלנו</a>
          {/* <a style={{textDecoration:'none'}} href='#whoWeAre' className='menuButtons'>? מי אנחנו</a> */}
        </div>
        
    </div>
  )
}
