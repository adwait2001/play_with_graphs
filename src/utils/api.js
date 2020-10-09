const request = require('postman-request')


const stock_api=(callback) => {

    const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=31adbe4a-d781-4d0c-9814-d3234bb29bb4'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("error",undefined)
        } else {
            callback(undefined,
                {price:response.body.data[0].quote.USD.price,change:response.body.data[0].quote.USD.percent_change_24h}

            )
        }
    }
    );
}

module.exports=stock_api;
