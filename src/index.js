const express=require('express')
const path=require('path')
const hbs=require('hbs')
const stock_api=require('./utils/api')
const cors=require('cors')

homepage=path.join(__dirname,'../public')
viewpage=path.join(__dirname,'../templates/views')
partialspath=path.join(__dirname,'../templates/partials')


const app =express()
const port=process.env.PORT||3000

app.use(express.static(homepage))
app.set('view engine','hbs')
app.set('views',viewpage)
hbs.registerPartials(partialspath)

app.get('',(req,res)=>{
  res.render('home')
})

app.get('/stock',cors(),(req,res)=>{
  stock_api((error,{body}={})=>{
    if (error) {
      return res.send({error})
    }

    res.send({body})
  })
})


app.listen(port,()=>{
  console.log('server started'+ port)
})