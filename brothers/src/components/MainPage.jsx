import React, { useContext, useState } from 'react'
import menuRestaurant from '../images/menurestaurant.jpg'
import cream from '../images/cream.jpg'
import Header from './Header';
import userContext from '../userContext';


export default function MainPage() {
  const[menu,setMenu] = useState(false)
  const{showMenu,setShowMenu} = useContext(userContext)

  return (
    <div className='mainPageMainDiv'>
        <Header/>
        
          <div id='welcome'>
            <h1 style={{color:'white',fontSize:'25px'}}>תפריט דיגיטלי מותאם <br /> אישית למסעדות ועסקים</h1>
            <button id='letStartButton'>בוא נתחיל </button>
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
