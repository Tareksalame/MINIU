import React from 'react'
import ReactDOM from "react-dom"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BlackMenu from '../images/MINI-U.svg'
import mousedown from '../images/mouse-cursor.png'
import button2 from '../images/buttons/button2.svg'
import whatsapp from '../images/whatsapp.png'








export default function SignUp() {
    let nav = useNavigate()
    const[name,setName] = useState('');
    const[phoneNumber,setPhoneNumber] = useState('');
    const[email,setEmail] = useState('');
    const[address,setAddress] = useState('');
    const[stand,setStand] = useState('')
    const[catalogMenu,setCatalogMenu] = useState('')

   const digitalMenu = ()=>
   {
    fetch('/digitalMenu', 
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
                    stand:stand,
                    catalogMenu:catalogMenu,
                    type:'Menu/Catalog'
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
        <img className='LogoForSignUpIn' onClick={()=>{nav('/')}} src={BlackMenu} alt="brothers" />
        <div style={{paddingTop:'0%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h1 className='h1HomeMainTitle' style={{color:'black'}}>استمارة لتطوير قائمة منتجات/طعام رقمية خاصة بمشروعك</h1>
            <img width={'30%'} className='Arrow'  src={mousedown} alt="" />
            <input  onChange={(e)=>{setName(e.target.value)}} placeholder='الاسم الكامل/اسم المشروع' style={{textAlign:'end'}}     className='signUpInput' type="text" />
            <input style={{textAlign:'end'}} onChange={(e)=>{setEmail(e.target.value)}}  placeholder='البريد الالكتروني'     className='signUpInput' type="text" />
            <input style={{textAlign:'end'}} onChange={(e)=>{setPhoneNumber(e.target.value)}}  placeholder='رقم الهاتف'  className='signUpInput' type="text" />
            <input style={{textAlign:'end'}} onChange={(e)=>{setAddress(e.target.value)}}  placeholder='العنوان/البلد'       className='signUpInput' type="text" />
            <h1 className='h1HomeMainTitle' style={{color:'black'}}>على كم قاعدة <br /> QR Code <br />5 اضافةً الى ال<br />  قواعد التي سوف تحصلون عليها<span style={{color:'rgb(214, 194, 173)',borderBottom:'3px solid black', borderBottomRightRadius:'20%',borderBottomLeftRadius:'20%'}}> كهدية</span> </h1>
        <select className='selection' onChange={(e)=>{setStand(e.target.value)}} name="stand" id="stand">
          <option value="0">اختيار</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10+">10+</option>
        </select>
        <h1 className='h1HomeMainTitle' style={{color:'black'}}>هل ترغب ايضًا ببطاقة عمل رقمية خاصة بك ؟</h1>
        <select className='selection' onChange={(e)=>{setCatalogMenu(e.target.value)}} name="stand" id="stand">
          <option value="0">اختيار</option>
          <option value="yes">نعم</option>
          <option value="no">لا</option>
        </select>
        <img  style={{width:'70%'}} onClick={digitalMenu}  className='logo' src={button2} alt="" />
        </div>
                 <a className='footerFont' href="https://wa.me/972525272910">
            <img src={whatsapp} width={'15%'} alt="whatsapp" />
          </a>
          <h1  className='h3HomeMainTitle' style={{color:'black',fontSize:'15px',alignSelf:'center',marginRight:'0px'}}>خدمة الزبائن</h1>
    </div>
  )
}
