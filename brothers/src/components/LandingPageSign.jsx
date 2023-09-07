import React  from 'react'
import BlackMenu from '../images/MINI-U.svg'
import { Link, useNavigate } from 'react-router-dom';
import mousedown from '../images/mouse-cursor.png'
import { useState } from 'react'
import button2 from '../images/button2.svg'
import whatsapp from '../images/whatsapp.png'



export default function LandingPageSign() {
    let nav = useNavigate()
    const[name,setName] = useState('');
    const[phoneNumber,setPhoneNumber] = useState('');
    const[email,setEmail] = useState('');
    const[address,setAddress] = useState('');

    const digitalMenu = ()=>
    {
     fetch('/landingPage', 
             {
                 headers:{
                     "Content-Type": "application/json"
                 },
                 method:'post',
                 body:JSON.stringify({
                     name:name,
                     phoneNumber:phoneNumber,
                     email:email ,
                     address:address,
                     type:'Landing Page/Website '
                 })
             }).then((res)=>{return res.json()})
             .then((data)=>
             {
               if(data == 'done')
               {
                 setName('')
                 setPhoneNumber('')
                 alert('נהדר! ההרשמה הושלמה, נתקשר אליך בקרוב כדי להמשיך בדרך ההצלחה')
                 setTimeout(() =>nav("/"), 1500)
               }
               else
               {
                 alert('לא נקלט תרענן את הדף ותנסה שוב')
               }
             }).catch((err)=>{return err})
    }

  return (
    <div id='LPSignMainDiv'>
        <img className='LogoForSignUpIn' onClick={()=>{nav('/')}} src={BlackMenu} alt="brothers" />
        <h1 className='h1HomeMainTitle' style={{color:'black'}}>טופס ליצירת דף נחיתה/אתר אינטרנט</h1>
        <img  className='LPArrow'  src={mousedown} alt="" />
        <input  onChange={(e)=>{setName(e.target.value)}} placeholder='שם מלא/שם העסק' style={{textAlign:'end'}}         className='LandingPageSignInput' type="text" />
            <input style={{textAlign:'end'}} onChange={(e)=>{setEmail(e.target.value)}}  placeholder='דואר אלקטרוני'     className='LandingPageSignInput' type="text" />
            <input style={{textAlign:'end'}} onChange={(e)=>{setPhoneNumber(e.target.value)}}  placeholder='מספר טלפון'  className='LandingPageSignInput' type="text" />
            <input style={{textAlign:'end'}} onChange={(e)=>{setAddress(e.target.value)}}  placeholder='כתובת/עיר'       className='LandingPageSignInput' type="text" />
        <img  onClick={digitalMenu}  className='LPSign' src={button2} alt="" />
        <a className='footerFont' href="https://wa.me/972525272910">
            <img src={whatsapp} width={'15%'} alt="whatsapp" />
          </a>
          <h1  className='h3HomeMainTitle' style={{color:'black',fontSize:'15px',alignSelf:'center',marginRight:'0px'}}>לשירות הלקוחות</h1>

    </div>
  )
}
