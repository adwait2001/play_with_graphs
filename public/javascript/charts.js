
var chart = LightweightCharts.createChart(document.getElementById('charts'), {
    width: 1500,
    height: 600,
    timeScale: {
        timevisible: true,
        secondsvisible: false
    },
});

const lineSeries = chart.addLineSeries();
// const form = document.querySelector('form')
// const curr = document.getElementById('cars')
// const curr2 = document.getElementById('bikes')

const params=new URLSearchParams(window.location.search)
value=params.get('symbol')
value2=params.get('time')

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     value = curr.value
//     console.log(value)
//     value2=curr2.value
//     console.log(value2)

    fetch('/api/linear?curr='+value+'&curr2='+value2).then(res => res.json()).then(data => {
        const cdata = []
        const element = data["body"]
        Array.from(element).forEach(element => {
            cdata.push({ time: element[0]/1000, value: parseFloat(element[2]) })
        });
        lineSeries.setData(cdata);
    })


    var ss=chart.takeScreenshot();
    var img=ss.toDataURL("image/png").replace("image/png", "image/octet-stream");

document.querySelector('span').innerHTML=img;
    
//     fetch('/saveImage', {
//         method: 'POST',
//         body: JSON.stringify({photo:img}),
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//           } })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data)
//       })
//       .catch(error => {
//         console.error(error)
//       })
    
// })

