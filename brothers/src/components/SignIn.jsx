import React, { useContext }  from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userContext from '../userContext';
import BlackMenu from '../images/MINI-U.svg'
import signin from '../images/2.svg'



export default function SignIn(props) {
    const[userName,setUserName] = useState('')
    const[password,setPassword] = useState('')
    const[displayError,setDisplayError] = useState('none');
    const {user} = useContext(userContext)
    const {setUser} = useContext(userContext)

    let nav = useNavigate()

    const signIn = ()=>
    {
        fetch('/signin' , 
        {
          headers:{
            "Content-Type": "application/json"
        },
        method:'post',
        body:JSON.stringify({
            userName:userName,
            password:password,
        })
    }).then((res)=>{return res.json()}).then((data)=>
    {
          if(data == null)
          {
            setDisplayError('block')
          }
          else
          {
              setUser(data)
              nav('/home')
          }
        })
    }
    // let guest = ()=>
    // {
    //   nav('/home')
    // }
  return (
    <div className='signInDiv'>
        <img  style={{width:'70%'}} onClick={()=>{nav('/')}} src={BlackMenu} alt="brothers" />
         <div style={{paddingTop:'0%',marginTop:'40%'}}>
            <h1 style={{color:'black'}}>SIGN IN</h1>
            <input onChange={(e)=>{setUserName(e.target.value)}} placeholder='User Name' className='signInInput' type="text" />
            <br />
            <input onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' className='signInInput' type="password" />
        </div>
        <h5 style={{display:displayError, color:'red'}}>User Can not Found</h5>

        <img style={{width:'70%'}} onClick={signIn} className='logo' src={signin} alt="" />
        <h4 className='dontHaveAccount'>Don't Have an Account?</h4>
        <Link className='dontHaveAccount' to={'/signup'}><h4 style={{marginBottom:'15%'}} className='dontHaveAccount'>Sign Up Now</h4></Link>
      
    </div>
  )
}
