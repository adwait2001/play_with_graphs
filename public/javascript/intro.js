
var chart = LightweightCharts.createChart(document.getElementById('charts'), {
	width: 375,
	height: 500,
	timeScale: {
		timevisible: true,
		secondsvisible: false
	},
});

var candleSeries = chart.addCandlestickSeries();

fetch('https://finplexgraph.herokuapp.com/stock').then(res => res.json()).then(data => {
	const cdata = []
	const element = data["body"]
	console.log(element)
	Array.from(element).forEach(element => {
		cdata.push({time: element[0]/1000, open: parseFloat(element[1]), high: parseFloat(element[2]), low: parseFloat(element[3]), close: parseFloat(element[4]) })
	});
	console.log(cdata)
	candleSeries.setData(cdata);
})

const socket = io.connect('/');

socket.on('KLINE', (pl) => {
	console.log(pl)
	candleSeries.update(pl);
});




