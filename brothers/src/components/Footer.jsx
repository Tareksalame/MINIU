import React from 'react'
import instagram from '../images/instagram.png'
import whatsapp from '../images/whatsapp.png'


export default function Footer() {
  return (
    <div className='footer'>
        <div id='socialMediaDiv'>
          <h3 className='footerFont'>: תעקבו אחרינו </h3>
          <a target='_blank' href="https://instagram.com/andalus_dev?igshid=OGQ5ZDc2ODk2ZA==">
            <img src={instagram} width={'20%'} alt="whatsapp" />
          </a>
          <a target='_blank' href='https://wa.me/972525272910' className='footerFont'>: Whatsapp דבר איתנו ב </a>
          <a className='footerFont' href="https://wa.me/972525272910">
            <img src={whatsapp} width={'20%'} alt="whatsapp" />
          </a>
        </div>
        <div id='footerNav'>
          <a href='/OurProducts' className='footerFont'>המוצרים שלנו</a>
          <a href='/OurProducts' className='footerFont'>?מי אנחנו</a>


        </div>
    </div>
  )
}
