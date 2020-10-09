

let socket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_5m");

var message=document.getElementById("message")

var obj=[];

socket.onmessage=function(event) {
    var obj1=JSON.parse(event.data)
    var e=obj1.E
    var date=new Date(e*1000)
    var year=date.getFullYear()
    var month=date.getMonth()
    var o=obj1.k.o
    var h=obj1.k.h
    var c=obj1.k.c
    var l=obj1.k.l
    obj.push({time:e,open:o,high:h,low:l,close:c})
    console.log(obj)
    candleSeries.setData(obj);
} 

var chart = LightweightCharts.createChart(document.getElementById('charts'), {
	width: 600,
  height: 300,
	layout: {
		backgroundColor: '#000000',
		textColor: 'rgba(255, 255, 255, 0.9)',
	},
	grid: {
		vertLines: {
			color: 'rgba(197, 203, 206, 0.5)',
		},
		horzLines: {
			color: 'rgba(197, 203, 206, 0.5)',
		},
	},
	crosshair: {
		mode: LightweightCharts.CrosshairMode.Normal,
	},
	rightPriceScale: {
		borderColor: 'rgba(197, 203, 206, 0.8)',
	},
	timeScale: {
		borderColor: 'rgba(197, 203, 206, 0.8)',
	},
});

var candleSeries = chart.addCandlestickSeries({
  upColor: 'rgba(255, 144, 0, 1)',
  downColor: '#000',
  borderDownColor: 'rgba(255, 144, 0, 1)',
  borderUpColor: 'rgba(255, 144, 0, 1)',
  wickDownColor: 'rgba(255, 144, 0, 1)',
  wickUpColor: 'rgba(255, 144, 0, 1)',
});

