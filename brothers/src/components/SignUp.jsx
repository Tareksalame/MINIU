import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import brothers from '../images/Brothers.png'
import Logo from '../images/1.svg'
import BlackMenu from '../images/MINI-U.svg'
import signup from '../images/3.svg'
import mousedown from '../images/mouse-cursor.png'
import button2 from '../images/button2.svg'






export default function SignUp() {
    let nav = useNavigate()
    const[name,setName] = useState('');
    const[phoneNumber,setPhoneNumber] = useState(0);
    const[email,setEmail] = useState('');
    const[errorEmail,setErrorEmail] = useState('3px solid black')
    const[errorPhone,setErrorPhone] = useState('3px solid black')
   

  return (
    <div className='signUpMainDiv'>
        <img style={{width:'70%'}} onClick={()=>{nav('/')}} src={BlackMenu} alt="brothers" />
        <div style={{paddingTop:'0%'}}>
            <h1 style={{color:'black'}}>הירשמו עכשיו</h1>
            <img width={'30%'} className='Arrow'  src={mousedown} alt="" />

            <input  onChange={(e)=>{setName(e.target.value)}} placeholder='שם מלא/שם העסק' style={{textAlign:'end'}} className='signInInput' type="text" />
            <input style={{border:errorEmail,textAlign:'end'}} onChange={(e)=>{setEmail(e.target.value)}}  placeholder='דואר אלקטרוני'  className='signInInput' type="text" />
            <input style={{border:errorEmail,textAlign:'end'}} onChange={(e)=>{setPhoneNumber(e.target.value)}}  placeholder='מספר טלפון'  className='signInInput' type="text" />

        </div>
        <img  style={{width:'70%'}}  className='logo' src={button2} alt="" />

     
    </div>
  )
}
