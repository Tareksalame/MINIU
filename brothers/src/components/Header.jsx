import React, { useContext, useState } from 'react'
import close from '../images/X.svg'
import MENU from '../images/MENU.svg'
import WhiteMenu from '../images/MINI-U-White.svg'
import userContext from '../userContext'





export default function Header() {
  const[showProductsFlag,setShowProductsFlag] = useState(false)

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
  const showProducts = ()=>
  {
    if(showProductsFlag == true)
    {
    return <div id='smallMenu'>
      <a style={{textDecoration:'none'}} className='menuButtons' href="/OurProductsDigitalMenu">תפריט דיגיטלי</a>
      <a style={{textDecoration:'none'}} className='menuButtons' href="">כרטיס ביקור</a>
    </div>
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
          <a style={{textDecoration:'none',paddingBottom:'40px'}} onClick={()=>{setShowProductsFlag(!showProductsFlag)}} className='menuButtons'>המוצרים שלנו</a>
          {showProducts()}
          {/* <a style={{textDecoration:'none'}} href='#whoWeAre' className='menuButtons'>? מי אנחנו</a> */}
        </div>
        
    </div>
  )
}
