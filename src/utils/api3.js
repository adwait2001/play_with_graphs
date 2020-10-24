// const request = require('postman-request')
// const cheerio=require('cheerio')

// async function stock_api3() {

//     const url='https://finplexgraph.herokuapp.com/graph1?symbol=BTCUSDT&time=5m'
//     const photos=[]
//     const response=await request({
//         uri:url,
//         headers:{
//             accept:" */*",
//             "accept-encoding":" gzip, deflate, br",
//             "accept-language": "en-US,en;q=0.9,hi;q=0.8",
//         }
//     });


//     let $=cheerio.load(response)
//     let img=$('span').text();

//     console.log(img)

//     photos.push({img})
//     return photos;
    
// }

// module.exports=stock_api3;


const { json } = require('body-parser');
const puppeteer=require('puppeteer')


async function stock_api3 (symbol,time) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const photos=[]
  url='https://finplexgraph.herokuapp.com/graph1?symbol=BTCUSDT&time=5m'
  console.log(url)
  await page.goto(url);

  const textContent = await page.evaluate(() => {
    return document.querySelector('span').textContent
  });

  browser.close();

  

  return textContent
};

module.exports=stock_api3;
