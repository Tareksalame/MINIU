const express = require('express')
const app = express()
const bp = require('body-parser')
const db = require('mongoose')
const uuid = require('uuid');
const path = require('path');
const crypto = require('crypto');
require('dotenv').config();


const dbURI = process.env.MONGODB_URI;
app.use(express.static('brothers/build'))
app.use(bp.urlencoded({extended: false}));
app.use(bp.json());
db.connect(dbURI);
const nodemailer = require('nodemailer');

const userSchema = db.Schema({
    name:String,
    family:String,
    userName:String,
    city:String,
    makdema:String,
    phoneNumber:Number,
    email:String,
    password:String,
    objects:Object
})

const userModel = db.model('user',userSchema)


app.post('/check' , async(req,res)=>
{
    let name = req.body.name;
    let family = req.body.family;
    let userName = req.body.userName;
    let city = req.body.city;
    let makdema = req.body.makdema
    let phoneNumber = req.body.phoneNumber
    let email = req.body.email;
    let password = req.body.password;
    let temp = await userModel.findOne({
        userName:userName
    })
    let emailTemp = await userModel.findOne({
        email:email
    })
    if(temp == null)
    {
        if(emailTemp == null)
        {
            userModel.insertMany({
            name:name,
            family:family,
            userName:userName,
            city:city,
            makdema:makdema,
            phoneNumber:phoneNumber,
            email:email,
            password:password,
            })
            res.json(temp)
        }
        else
        {
            res.json('emailTemp')
        }
    }
    else
    {
        res.json('temp')
    }


})

app.post('/signIn' , async(req,res)=>
{
    let userName = req.body.userName;
    let password = req.body.password;
    let temp = await userModel.findOne({
        userName:userName,
        password:password
    })
    if(temp == null)
    {
        res.json(temp)
    }
    else
    {
        res.json(temp)
    }
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'brothers/build', 'index.html'));
  });



app.listen(process.env.PORT || 2300, () => console.log('Server running on port', process.env.PORT || 2300));

