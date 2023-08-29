import React, { useContext, useState } from 'react'
import menuRestaurant from '../images/menurestaurant.jpg'
import cream from '../images/cream.jpg'
import Header from './Header';
import userContext from '../userContext';
import letsstartButton from '../images/letsstartblack.svg'
import { useNavigate } from 'react-router-dom';
import scanme from '../images/scanme.jpeg'
import button2 from '../images/button2.svg'
import Footer from './Footer';




export default function MainPage() {
  const[menu,setMenu] = useState(false)
  const{showMenu,setShowMenu} = useContext(userContext)
  const[name,setName] = useState('');
    const[phoneNumber,setPhoneNumber] = useState('');
    const[email,setEmail] = useState('');
    const[address,setAddress] = useState('');
  let nav = useNavigate()

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
    <div className='mainPageMainDiv'>
        <Header/>
        <div id='underHeader'>
          <h1 style={{color:'black'}}>תפריט דיגיטלי מקצועי</h1>
        </div>
          <div id='welcome'>
            <h1 id='createMenu' style={{color:'white',marginTop:'15%'}}>תפריט דיגיטלי מותאם <br /> אישית למסעדות ולעסקים</h1>
            <img style={{marginBottom:'5%'}} onClick={()=>{nav('/DigitalMenu')}} src={letsstartButton} alt="" />
          </div>
          <div id='OurProducts'>
            <h1 id='ForWho'>למי מתאים התפריט <br />? הדגיטלי </h1>
            <div className='menuForWho'>
              <img className='menuAndcatalog'  src={menuRestaurant} alt="" />
              <h3 className='h3Menu'>תפריט למסעדות</h3>
              <h4 className='h4Menu'>תפריט דיגיטלי, שמאפשר ללקוחות לסרוק <br /> ברקוד ולקבל את תפריט המסעדה ישירות בנייד שלהם</h4>
            </div>
            <div className='menuForWho'>
            <img className='menuAndcatalog'  src={cream} alt="" />
              <h3 className='h3Menu'>קטלוג לעסקים</h3>
              <h4 className='h4Menu'>,קטלוג לעסק שנפתח בנייד דרך סריקת ברקוד<br /> מתאים לעסקים שמציעים מספר שירותים/מוצרים ללקוחות שלהם</h4>
            </div>
          </div>
          <div id='OurProducts2'>
          <h1>למה אני <br /> צריך את התפריט <br /> ? הדגיטלי לעסק שלי </h1>
          <h3 className='h3HomeMainTitle'>חוסכים זמן - במסעדה אין צורך לחלק תפריטים ללקוחות✅</h3>
          <h3 className='h3HomeMainTitle'>חוסכים כסף - אין צורך בהדפסת הרבה תפריטים✅</h3>
          <h3 className='h3HomeMainTitle'>מתאים לכל סוגי הסמארטפונים✅</h3>
          <h3 className='h3HomeMainTitle'>מקל על הלקוחות שמעדיפים לגלול בסמארטפונים שלהם✅</h3>
          <h3 className='h3HomeMainTitle'>מאפשר למסעדות ולעסקים לשתף את התפריט✅<br /> או קטלוג המוצרים ברשתות החברתיות </h3>
          <h3 className='h3HomeMainTitle'>עדכון מהיר לתפריט ללא צורך בהדפסה חדשה לתפריט חדש✅</h3>
          </div>
          <div id='OurProducts4'>
            <h1>כל זה ותקבל במתנה עם התפריט/הקטלוג שלך <br /> 5 <br /> סטנדים לסריקת <br /> QR ה <br /> של התפריט/קטלוג</h1>
        <img src={scanme} id='QRImage' alt="" />
        <h3 className='h3HomeMainTitle' style={{alignSelf:'center',marginRight:'0px'}}> התמונה להמחשה בלבד</h3>
          </div>
          <div  className="OurProducts3">
            <h1 id='letsStartOurProducts3' style={{marginTop:'10%'}}> תתחיל לקדם <br /> את העסק שלך 
            </h1>
            <input  onChange={(e)=>{setName(e.target.value)}} placeholder='שם מלא/שם העסק' style={{textAlign:'end'}} className='signInInput' type="text" />
            <input style={{textAlign:'end'}} onChange={(e)=>{setEmail(e.target.value)}}  placeholder='דואר אלקטרוני'  className='signInInput' type="text" />
            <input style={{textAlign:'end'}} onChange={(e)=>{setPhoneNumber(e.target.value)}}  placeholder='מספר טלפון'  className='signInInput' type="text" />
            <input style={{textAlign:'end'}} onChange={(e)=>{setAddress(e.target.value)}}  placeholder='כתובת/עיר'  className='signInInput' type="text" />
        <img className='iWantToGrowUp'  onClick={digitalMenu}   src={button2} alt="" />
          </div>
          <Footer/>
          
    </div>
  )
}
