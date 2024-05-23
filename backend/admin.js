const express =require('express')
const Adminmodel=require('./admin-schema')
const bodyParser = require('body-parser')
const router =express.Router()
router.use(bodyParser.json())



router.post('/',(req,res)=>{
    res.send('admin page ')
})


router.post('/post',(req,res)=>{
    console.log(req.body)
    const newAdmin= new Adminmodel(req.body) 
    newAdmin.save()
    .then(response=>(console.log(response)))
    .catch(err=>(console.log(err)))
    res.send('admin posting page')

})

router.get('/get',(req,res)=>{
    Adminmodel.find()
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
    res.send('email  ')
})


router.get('/get/:email',(req,res)=>{
    console.log(req.params.email)
    res.setHeader('Content-Type','text/plain')

    Adminmodel.find({email:req.params.email})
    .then(response=>res.send(response))
    .catch(err=>console.log(err))

})

module.exports=router