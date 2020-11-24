
var chart = LightweightCharts.createChart(document.getElementById('charts'), {
	width: 430,
	height: 400,
	timeScale: {
		timevisible: true,
		secondsvisible: false
	},
});

var candleSeries = chart.addCandlestickSeries();
const params = new URLSearchParams(window.location.search)
value = params.get('symbol')
value2 = params.get('time')

fetch('/api/linear?symbol='+value+'&time='+value2).then(res => res.json()).then(data => {
	const cdata = []
	const element = data["body"]
	console.log(element)
	Array.from(element).forEach(element => {
		cdata.push({time: element[0]/1000, open: parseFloat(element[1]), high: parseFloat(element[2]), low: parseFloat(element[3]), close: parseFloat(element[4]) })
	});
	console.log(cdata)
	candleSeries.setData(cdata);
})






