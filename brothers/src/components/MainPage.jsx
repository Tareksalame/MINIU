import React, { useContext, useState } from 'react'
import menuRestaurant from '../images/menurestaurant.jpg'
import cream from '../images/cream.jpg'
import Header from './Header';
import userContext from '../userContext';
import letsstartButton from '../images/buttons/button4.svg'
import { useNavigate } from 'react-router-dom';
import scanme from '../images/scanme.jpeg'
import button2 from '../images/buttons/button2.svg'
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
          <h1 style={{color:'black'}}>قائمة رقمية احترافية</h1>
        </div>
          <div id='welcome'>
            <h1 id='createMenu' style={{color:'white',marginTop:'15%'}}>اطلب قائمة رقمية<br /> خاصة بمشروعك </h1>
            <img style={{marginBottom:'5%'}} onClick={()=>{nav('/DigitalMenu')}} src={letsstartButton} alt="" />
          </div>
          <div id='OurProducts'>
            <h1 id='ForWho'>القائمة الرقمية مخصصة<br /> لاية مشاريع ؟  </h1>
            <div className='menuForWho'>
              <img className='menuAndcatalog'  src={menuRestaurant} alt="" />
              <h3 className='h3Menu'>قائمة طعام</h3>
              <h4 className='h4Menu'>قائمة طعام رقمية، تمكن زبائنك<br /> بعد مسح الكود من تصفح القائمة على هواتفهم</h4>
            </div>
            <div className='menuForWho'>
            <img className='menuAndcatalog'  src={cream} alt="" />
              <h3 className='h3Menu'>قائمة للمنتجات</h3>
              <h4 className='h4Menu'>قائمة رقمية لمنتجات محلك او مشروعك <br /> تلائم المشاريع التي تعرض عددا من المنتجات والخدمات</h4>
            </div>
          </div>
          <div id='OurProducts2'>
          <h1>لماذا<br /> احتاج القائمة<br />  الرقمية لمشروعي ؟</h1>
          <h3 className='h3HomeMainTitle'>توفير الوقت - لا حاجة لتوزيع القوائم للناس✅</h3>
          <h3 className='h3HomeMainTitle'>توفير النقود - لا حاجة لطباعة الكثير من القوائم✅</h3>
          <h3 className='h3HomeMainTitle'>   ملائم لكل انواع الهواتف والاجهزة ✅</h3>
          <h3 className='h3HomeMainTitle'>يمكنك من الانتشار اكثر في وسائل التواصل الاجتماعي✅</h3>
          <h3 className='h3HomeMainTitle'>تغيير واضافة تفاصيل للقائمة بدون الحاجة الى طبعة جديدة✅</h3>
          </div>
          <div id='OurProducts4'>
            <h1>اضافة الى كل ذلك سوف تحصل على <br /> 5 <br /> قواعد لمسح<br /> QR ال<br /> الخاص بقائمة منتجاتك</h1>
        <img src={scanme} id='QRImage' alt="" />
        <h3 className='h3HomeMainTitle' style={{alignSelf:'center',marginRight:'0px'}}> الصورة للمثال فقط </h3>
          </div>
          <div  className="OurProducts3">
            <h1 id='letsStartOurProducts3' style={{marginTop:'10%'}}> ابدأ الان<br /> بتطوير مشروعك
            </h1>
            <input  onChange={(e)=>{setName(e.target.value)}} placeholder='الاسم الكامل/اسم المشروع' style={{textAlign:'end'}} className='signInInput' type="text" />
            <input style={{textAlign:'end'}} onChange={(e)=>{setEmail(e.target.value)}}  placeholder='البريد الالكتروني'  className='signInInput' type="text" />
            <input style={{textAlign:'end'}} onChange={(e)=>{setPhoneNumber(e.target.value)}}  placeholder='رقم الهاتف'  className='signInInput' type="text" />
            <input style={{textAlign:'end'}} onChange={(e)=>{setAddress(e.target.value)}}  placeholder='عنوان/البلد'  className='signInInput' type="text" />
        <img className='iWantToGrowUp'  onClick={digitalMenu}   src={button2} alt="" />
          </div>
          <Footer/>
          
    </div>
  )
}
