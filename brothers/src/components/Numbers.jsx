import React, { useState } from 'react'

export default function Numbers(props) {

    const numbersShow = ()=>
    {
        if(props.section == 1)
        {
            return<div style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
            <h1 style={{color:'rgb(214, 194, 173)',border:'3px solid black',backgroundColor:'black',borderRadius:'50%',width:'40px',height:'40px'}}>1</h1>
            <h1 style={{color:'rgb(214, 194, 173)'}}>_____</h1>
            <h1 style={{color:'rgb(214, 194, 173)',border:'3px solid black',backgroundColor:'transparent',borderRadius:'50%',width:'40px',height:'40px'}}>2</h1>
            <h1 style={{color:'rgb(214, 194, 173)'}}>_____</h1>
            <h1 style={{color:'rgb(214, 194, 173)',border:'3px solid black',backgroundColor:'transparent',borderRadius:'50%',width:'40px',height:'40px'}}>3</h1>
        </div>
        }
        else if (props.section == 2)
        {
            return <div style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
            <h1 onClick={()=>{props.setSection(1)}} style={{color:'rgb(214, 194, 173)',border:'3px solid black',backgroundColor:'black',borderRadius:'50%',width:'40px',height:'40px'}}>1</h1>
            <h1 style={{color:'black'}}>_____</h1>
            <h1 style={{color:'rgb(214, 194, 173)',border:'3px solid black',backgroundColor:'black',borderRadius:'50%',width:'40px',height:'40px'}}>2</h1>
            <h1 style={{color:'rgb(214, 194, 173)'}}>_____</h1>
            <h1 style={{color:'rgb(214, 194, 173)',border:'3px solid black',backgroundColor:'transparent',borderRadius:'50%',width:'40px',height:'40px'}}>3</h1>
        </div>
        }
        else
        {
            return <div style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
            <h1 onClick={()=>{props.setSection(1)}} style={{color:'rgb(214, 194, 173)',border:'3px solid black',backgroundColor:'black',borderRadius:'50%',width:'40px',height:'40px'}}>1</h1>
            <h1 style={{color:'black'}}>_____</h1>
            <h1 onClick={()=>{props.setSection(2)}} style={{color:'rgb(214, 194, 173)',border:'3px solid black',backgroundColor:'black',borderRadius:'50%',width:'40px',height:'40px'}}>2</h1>
            <h1 style={{color:'black'}}>_____</h1>
            <h1 style={{color:'rgb(214, 194, 173)',border:'3px solid black',backgroundColor:'black',borderRadius:'50%',width:'40px',height:'40px'}}>3</h1>
        </div>
        }
    }

  return (
    <div style={{width:'100%'}}>
    {numbersShow()}
    </div>
  )
}
