import React from 'react'
import instagram from '../images/instagram.png'

export default function Footer() {
  return (
    <div className='footer'>
        <div id='socialMediaDiv'>
            <img src={instagram} width={'20%'} alt="" />
        </div>
        <div id='footerNav'>
        </div>
    </div>
  )
}
