import React, { useContext }  from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userContext from '../userContext';
import BlackMenu from '../images/MINI-U.svg'
import signin from '../images/2.svg'
import mousedown from '../images/mouse-cursor.png'
import button2 from '../images/button2.svg'
import whatsapp from '../images/whatsapp.png'





export default function SignIn(props) {
  let nav = useNavigate()
  const[name,setName] = useState('');
  const[phoneNumber,setPhoneNumber] = useState(0);
  const[email,setEmail] = useState('');
  const[address,setAddress] = useState('');

 const digitalMenu = ()=>
 {
  fetch('/sendBusinessCard', 
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
                  type:'Business Card'
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
  <div className='signUpMainDiv' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <img style={{width:'70%'}} onClick={()=>{nav('/')}} src={BlackMenu} alt="brothers" />
      <div style={{paddingTop:'0%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <h1 className='h1HomeMainTitle' style={{color:'black'}}>צור כרטיס ביקור דיגיטלי מתקדם</h1>
          <img width={'30%'} className='Arrow'  src={mousedown} alt="" />
          <input  onChange={(e)=>{setName(e.target.value)}} placeholder='שם מלא/שם העסק' style={{textAlign:'end'}} className='signInInput' type="text" />
          <input style={{textAlign:'end'}} onChange={(e)=>{setEmail(e.target.value)}}  placeholder='דואר אלקטרוני'  className='signInInput' type="text" />
          <input style={{textAlign:'end'}} onChange={(e)=>{setPhoneNumber(e.target.value)}}  placeholder='מספר טלפון'  className='signInInput' type="text" />
          <input style={{textAlign:'end'}} onChange={(e)=>{setAddress(e.target.value)}}  placeholder='כתובת/עיר'  className='signInInput' type="text" />
      <img  style={{width:'70%'}} onClick={digitalMenu}  className='logo' src={button2} alt="" />
      </div>
          <a className='footerFont' href="https://wa.me/972525272910">
          <img src={whatsapp} width={'15%'} alt="whatsapp" />
        </a>
        <h1  className='h3HomeMainTitle' style={{color:'black',fontSize:'15px',alignSelf:'center',marginRight:'0px'}}>לשירות הלקוחות</h1>


   
  </div>
)
}
