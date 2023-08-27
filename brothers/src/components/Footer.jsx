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
          <h3 style={{color:'white'}} className='footerFont'>Contact Us</h3>
          <div style={{display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
          <a target='_blank' className='footerFont' href="https://wa.me/972525272910">
            <img src={whatsapp} style={{marginTop:'10px',marginBottom:'20px'}} width={'50%'} alt="whatsapp" />
          </a>
          <a target='_blank' href="https://instagram.com/miniuforu?igshid=OGQ5ZDc2ODk2ZA==">
            <img src={instagram} width={'50%'} alt="whatsapp" />
          </a>
          </div>
        </div>
        <div id='footerNav'>
          <a href='/' style={{marginTop:'20px'}}  className='footerFont'>דף הבית</a>
          <a href='/DigitalMenu' className='footerFont'>הזמנת תפריט דיגיטלי</a>
          <a href='/BusinessCard' style={{marginBottom:'20px'}} className='footerFont'>הזמנת כרטיס ביקור דיגיטלי</a>
        <img style={{width:'50%'}}  onClick={()=>{nav('/')}} src={whiteMenu} alt="brothers" />
        </div>
    </div>
  )
}
