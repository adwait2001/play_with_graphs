
var chart = LightweightCharts.createChart(document.getElementById('charts'), {
    width: 1500,
    height: 600,
    timeScale: {
        timevisible: true,
        secondsvisible: false
    },
});

const lineSeries = chart.addLineSeries();
const form = document.querySelector('form')
const curr = document.querySelector('select')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    value = curr.value
    console.log(value)


    fetch('/api/linear?curr='+value).then(res => res.json()).then(data => {
        const cdata = []
        const element = data["body"]
        Array.from(element).forEach(element => {
            cdata.push({ time: element.time / 1000, value: element.price })
        });
        lineSeries.setData(cdata);
    })


})

