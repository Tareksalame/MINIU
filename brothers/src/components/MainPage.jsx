import React, { useContext, useState } from 'react'
import menuRestaurant from '../images/menurestaurant.jpg'
import cream from '../images/cream.jpg'
import Header from './Header';
import userContext from '../userContext';
import letsstartButton from '../images/letsstartblack.svg'
import { useNavigate } from 'react-router-dom';


export default function MainPage() {
  const[menu,setMenu] = useState(false)
  const{showMenu,setShowMenu} = useContext(userContext)
  let nav = useNavigate()

  return (
    <div className='mainPageMainDiv'>
        <Header/>
        <div id='underHeader'>
          <h1 style={{color:'black'}}>תפריט דיגיטלי מקצועי</h1>
        </div>
          <div id='welcome'>
            <h1  style={{color:'white',fontSize:'19px',marginTop:'15%'}}>תפריט דיגיטלי מותאם <br /> אישית למסעדות ועסקים</h1>
            <img style={{marginBottom:'5%'}} onClick={()=>{nav('/DigitalMenu')}} src={letsstartButton} alt="" />
          </div>

          <div id='OurProducts'>
            <h1>למי מתאים התפריט <br />? הדגיטלי </h1>
            <div className='menuForWho'>
              <img className='menuAndcatalog' width={'80%'} src={menuRestaurant} alt="" />
              <h3 className='h3Menu'>תפריט למסעדות</h3>
              <h4 className='h4Menu'>תפריט דיגיטלי, שמאפשר ללקוחות לסרוק <br /> ברקוד ולקבל את תפריט המסעדה ישירות בנייד שלהם</h4>
            </div>
            <div className='menuForWho'>
            <img className='menuAndcatalog' width={'80%'} src={cream} alt="" />
              <h3 className='h3Menu'>קטלוג לעסקים</h3>
              <h4 className='h4Menu'>,קטלוג לעסק שנפתח בנייד דרך סריקת ברקוד<br /> מתאים לעסקים שמציעים מספר שירותים/מוצרים ללקוחות שלהם</h4>
            </div>
          </div>
          
    </div>
  )
}
