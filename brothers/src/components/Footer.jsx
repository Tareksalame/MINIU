import React from 'react'
import instagram from '../images/instagram.png'
import whatsapp from '../images/whatsapp.png'
import whiteMenu from '../images/MINI-U-White.svg'
import { useNavigate } from 'react-router-dom'



export default function Footer() {
  let nav = useNavigate()
  return (
    <div className='footer'>
        <div id='socialMediaDiv'>
          <a target='_blank' href='https://wa.me/972525272910' className='footerFont'> זמינים בשבילכם גם בווטסאפ </a>
          <a className='footerFont' href="https://wa.me/972525272910">
            <img src={whatsapp} width={'20%'} alt="whatsapp" />
          </a>
          <h3 className='footerFont'>תמצאו אותנו גם באניסטגרם </h3>
          <a target='_blank' href="https://instagram.com/andalus_dev?igshid=OGQ5ZDc2ODk2ZA==">
            <img src={instagram} width={'20%'} alt="whatsapp" />
          </a>
        </div>
        <div id='footerNav'>
          <a href='/' style={{marginTop:'20px'}}  className='footerFont'>דף הבית</a>
          {/* <a href='/OurProducts' className='footerFont'>?מי אנחנו</a> */}
          <a href='/DigitalMenu' className='footerFont'>הזמנת תפריט דיגיטלי</a>
          <a href='/BusinessCard' style={{marginBottom:'20px'}} className='footerFont'>הזמנת כרטיס ביקור דיגיטלי</a>
          {/* <a href='/OurProducts' className='footerFont'></a> */}
        <img style={{width:'100%'}}  onClick={()=>{nav('/')}} src={whiteMenu} alt="brothers" />





        </div>
    </div>
  )
}
