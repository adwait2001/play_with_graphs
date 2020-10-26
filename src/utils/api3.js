const { json } = require('body-parser');
const puppeteer=require('puppeteer')


async function stock_api3 (symbol,time) {
  const browser = await puppeteer.launch({
    'args' : [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });  
  const page = await browser.newPage();
  await page.goto('https://finplexgraph.herokuapp.com/graph1?symbol='+symbol+'&time='+time);
  await page.waitFor(3000)
  await page.waitForSelector('span')
  const textContent = await page.evaluate(() => {
    return document.querySelector('span').textContent
  });
  browser.close();
  return textContent

};

module.exports=stock_api3;
