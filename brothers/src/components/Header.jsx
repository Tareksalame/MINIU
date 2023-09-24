import React, { useContext, useState } from 'react'
import close from '../images/X.svg'
import { useNavigate } from 'react-router-dom'
import MENU from '../images/MENU.svg'
import WhiteMenu from '../images/MINI-U-White.svg'
import userContext from '../userContext'
import whatsapp from '../images/whatsapp.png'






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
      return <img id='openClose' onClick={()=>{setFlag(!flag);setShowMenu('flex')}}  src={MENU} alt="menu" />
    }
    else
    {
      return <img id='openClose' onClick={()=>{setFlag(!flag);setShowMenu('none')}}   src={close} alt="menu" />
    }
  }
  const showProducts = ()=>
  {
    if(showProductsFlag == true)
    {
    return <div id='smallMenu'>
      <a style={{textDecoration:'none'}} className='menuButtons' onClick={()=>{nav('/OurProductsDigitalMenu');setShowMenu('none');setFlag(!flag)}} >قائمة رقمية</a>
      <a style={{textDecoration:'none'}} className='menuButtons' onClick={()=>{nav('/OurProductsBusinessCard');setShowMenu('none');setFlag(!flag)}} >بطاقة عمل</a>
      <a style={{textDecoration:'none'}} className='menuButtons' onClick={()=>{nav('/LandingPages');setShowMenu('none');setFlag(!flag)}} > صفحات هبوط/مواقع انترنت</a>
    </div>
    }
  }
  return (
    <div>
        <header className='appBar'>
          <img id='mainLogominiu' src={WhiteMenu} alt="logo" />
          {theFlag()}
          {/* <a style={{textDecoration:'none'}} href='/OurCustomers' className='menuButtonsFull'>زبائننا</a> */}
          <a style={{textDecoration:'none'}} className='menuButtonsFull' href="/LandingPages">صفحات هبوط/مواقع انترنت</a>
          <a style={{textDecoration:'none'}} className='menuButtonsFull' href="/OurProductsBusinessCard">بطاقة عمل</a>
          <a style={{textDecoration:'none'}} className='menuButtonsFull' href="/OurProductsDigitalMenu">قائمة رقمية</a>
          <a style={{textDecoration:'none'}} href='/' className='menuButtonsFull'>الصفحة الرئيسية</a>
        </header>
        <div className='hidden' id='menuShow' style={{display:showMenu}}>
          <div style={{display:'flex',flexDirection:'column-reverse',justifyContent:'space-around',alignItems:'center',height:'150px'}}>
          <img id='mainLogominiu' style={{width:'90%'}} src={WhiteMenu} alt="logo" />
          <img id='openClose' style={{width:'15%'}} onClick={()=>{setFlag(!flag);setShowMenu('none')}}  src={close} alt="menu" />
          </div>
          <a style={{textDecoration:'none'}} onClick={()=>{nav('/');setShowMenu('none');setFlag(!flag)}} className='menuButtons'>الصفحة الرئيسية</a>
          <a style={{textDecoration:'none'}} onClick={()=>{setShowProductsFlag(!showProductsFlag)}} className='menuButtons'> خدماتنا</a>
          {showProducts()}
          {/* <a style={{textDecoration:'none'}} onClick={()=>{nav('/OurCustomers');setShowMenu('none');setFlag(!flag)}} className='menuButtons'>زبائننا</a> */}
          <a className='footerFont' target='_blank' href="https://wa.me/972525272910">
            <img src={whatsapp} width={'15%'} alt="whatsapp" />
          </a>
          <h1  className='h3HomeMainTitle' style={{color:'white',fontSize:'15px',alignSelf:'center',marginRight:'0px'}}>خدمة الزبائن</h1>

          {/* <a style={{textDecoration:'none'}} href='#whoWeAre' className='menuButtons'>? מי אנחנו</a> */}
        </div>
        
    </div>
  )
}
