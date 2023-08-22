import React, { useContext, useState } from 'react'
import brothers from '../images/Brothers.png'
import menu from '../images/menus.png'
import close from '../images/X.svg'
import MENU from '../images/MENU.svg'
import WhiteMenu from '../images/MINI-U-White.svg'
import userContext from '../userContext'





export default function Header() {

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
      return <img onClick={()=>{setFlag(!flag);setShowMenu('flex')}} style={{width:'8%'}} src={MENU} alt="menu" />
    }
    else
    {
      return <img onClick={()=>{setFlag(!flag);setShowMenu('none')}} style={{width:'8%'}} src={close} alt="menu" />
    }
  }
  return (
    <div>
        <header className='appBar'>
          <img  style={{width:'25%'}} src={WhiteMenu} alt="logo" />
          {theFlag()}
        </header>
        <div className='hidden' id='menuShow' style={{display:showMenu}}>
          <a style={{textDecoration:'none'}} href='/' className='menuButtons'>דף הבית</a>
          <a style={{textDecoration:'none'}} href='/OurProducts' className='menuButtons'>המוצרים שלנו</a>
          <a style={{textDecoration:'none'}} href='#whoWeAre' className='menuButtons'>? מי אנחנו</a>
        </div>
        
    </div>
  )
}
