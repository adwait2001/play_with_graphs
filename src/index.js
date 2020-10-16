const express=require('express')
const path=require('path')
const api = require('binance');
const hbs=require('hbs')
const stock_api=require('./utils/api')
const cors=require('cors')
const socket = require('socket.io');
const stock_api2 = require('./utils/api2');

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

app.get('/graph1',(req,res)=>{
  res.render('graph1')
})

app.get('/stock',cors(),(req,res)=>{
  stock_api((error,{body}={})=>{
    if (error) {
      return res.send({error})
    }

    res.send({body})
  })
})

app.get('/api/linear',cors(),(req,res)=>{
  console.log(req.query.curr2)
  stock_api2(req.query.curr,req.query.curr2,(error,{body}={})=>{
    if (error) {
      return res.send({error})
    }

    res.send({body})
  })
})
const server=app.listen(port,()=>{
  console.log('server started'+ port)
})

const io = socket(server);

const bRest = new api.BinanceRest({
  key: "", // Get this from your account on binance.com
  secret: "", // Same for this
  timeout: 15000, // Optional, defaults to 15000, is the request time out in milliseconds
  recvWindow: 20000, // Optional, defaults to 5000, increase if you're getting timestamp errors
  disableBeautification: false,
  handleDrift: true
});
const binanceWS = new api.BinanceWS(true);
const bws = binanceWS.onKline('BTCUSDT', '1m', (data) => {
io.sockets.emit('KLINE',{time:Math.round(data.kline.startTime/1000),open:parseFloat(data.kline.open),high:parseFloat(data.kline.high),low:parseFloat(data.kline.low),close:parseFloat(data.kline.close)});
});