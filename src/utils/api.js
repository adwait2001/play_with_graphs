const request = require('postman-request')


const stock_api=(callback) => {

    // const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=31adbe4a-d781-4d0c-9814-d3234bb29bb4'

    const url1='https://api.binance.com'

    const query='/api/v3/klines?symbol=BTCUSDT&interval=15m&limit=1000'

    const url=url1+query

    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback("error",undefined)
        } else {
            callback(undefined,{body})
        }
    }
    );
}

module.exports=stock_api;
