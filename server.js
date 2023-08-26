const express = require('express')
const app = express()
const bp = require('body-parser')
const db = require('mongoose')
const uuid = require('uuid');
const path = require('path');
const crypto = require('crypto');
require('dotenv').config();
const twilio = require('twilio')


const dbURI = process.env.MONGODB_URI;
app.use(express.static('brothers/build'))
app.use(bp.urlencoded({extended: false}));
app.use(bp.json());
db.connect(dbURI);
const nodemailer = require('nodemailer');

const userEmailSchema = db.Schema({
    name:String,
    phoneNumber:String,
    email:String,
    address:String,
    type:String
})
const userSchema = db.Schema({
    name:String,
    phoneNumber:Number,
    type:String
})

const userModel = db.model('user',userSchema)
const userWithEmailModel = db.model('usersWithEmail',userEmailSchema)

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'miniuforu@gmail.com',
      pass: 'ebradgkyfidnmywd',
    },
  });
  
  
// פונקציה לשליחת הודעת ברכה
function sendWelcomeEmail(name,number,type) {
    const mailOptions = {
        from: 'miniuforu@gmail.com',
        to: 'tareq.salame@gmail.com',
        subject: type,
        text: '\n : مرحبًا طارق، من فضلك قم بالتواصل مع' + '\n' + name + '\n' + '\n : على رقم الهاتف' + '\n' + number,
      };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
      
  }

  app.post('/menuSign', async(req,res)=>
{
    let name = req.body.name;
    let phoneNumber = req.body.phoneNumber
    let type = req.body.type
    let temp = await userModel.insertMany({
        name:name,
        phoneNumber:phoneNumber,
        type:type
    })
    if(temp !== null)
    {
        sendWelcomeEmail(name,phoneNumber,type)
        res.json('done')
    }
    else
    {
        res.json('error')
    }
})

  function sendDigitalMenu(arr) {
    const mailOptions = {
        from: 'miniuforu@gmail.com',
        to: 'tareq.salame@gmail.com',
        subject: arr.type,
        text: '\nمرحبًا طارق قم بالتواصل مع\n' + arr.name + '\nرقم هاتف\n' + arr.phoneNumber + '\nايميل\n' + arr.email + '\nعنوان\n' + arr.address ,
      };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
      
  }

  const WhatsappNumber = "https://wa.me/972525272910"

  function sendToTheCostumer(arr) {
    const mailOptions = {
        from: 'miniuforu@gmail.com',
        to: arr.email,
        subject: 'Welcome' + ' ' + arr.name,
        text:'Thank You For Choosing us,\n we will call you back soon.\nif you have any question\nyou can contact us on Whatsapp \n' +WhatsappNumber ,
      };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
      
  }



app.post('/digitalMenu', async(req,res)=>
{
    let name = req.body.name;
    let phoneNumber = req.body.phoneNumber
    let email = req.body.email
    let address = req.body.address
    let type = req.body.type
    let arr = {name:name,phoneNumber:phoneNumber,email:email,address:address,type:type}
    let temp = await userWithEmailModel.insertMany({
        name:name,
        phoneNumber:phoneNumber,
        email:email,
        address:address,
        type:type
    })
    if(temp !== null)
    {
        sendDigitalMenu(arr)
        sendToTheCostumer(arr)
        res.json('done')
    }
    else
    {
        res.json('error')
    }
})

app.post('/sendBusinessCard', async(req,res)=>
{
    let name = req.body.name;
    let phoneNumber = req.body.phoneNumber
    let email = req.body.email
    let address = req.body.address
    let type = req.body.type
    let arr = {name:name,phoneNumber:phoneNumber,email:email,address:address,type:type}
    let temp = await userWithEmailModel.insertMany({
        name:name,
        phoneNumber:phoneNumber,
        email:email,
        address:address,
        type:type
    })
    if(temp !== null)
    {
        sendDigitalMenu(arr)
        sendToTheCostumer(arr)
        res.json('done')
    }
    else
    {
        res.json('error')
    }
})

app.post('/cardSign', async(req,res)=>
{
    let name = req.body.name;
    let phoneNumber = req.body.phoneNumber
    let type = req.body.type
    let temp = await userModel.insertMany({
        name:name,
        phoneNumber:phoneNumber,
        type:type
    })
    if(temp !== null)
    {
        sendWelcomeEmail(name,phoneNumber,type)
        res.json('done')
    }
    else
    {
        res.json('error')
    }
})


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'brothers/build', 'index.html'));
  });



app.listen(process.env.PORT || 2300, () => console.log('Server running on port', process.env.PORT || 2300));

