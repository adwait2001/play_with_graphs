
async function graphs() {
    let url = '/graph1?symbol=BTCUSDT&time=1m'
    let response = await fetch(url);

    try {
        await response.text()
        .then(function (html) {
            // Initialize the DOM parser
            var parser = new DOMParser();

            // Parse the text
            var doc = parser.parseFromString(html, "text/html");

            var docArticle = doc.querySelector('span').innerHTML;

            console.log(doc)

        });
    } catch (error) {
        console.log(error)
    }





    // abcd.then(function (response) {
    //     // When the page is loaded convert it to text
    //     return response.text()
    // })
    //     .then(function (html) {
    //         // Initialize the DOM parser
    //         var parser = new DOMParser();

    //         // Parse the text
    //         var doc = parser.parseFromString(html, "text/html");

    //         var docArticle = doc.querySelector('span').innerHTML;

    //         console.log(doc)

    //     })
    //     .catch(function (err) {
    //         console.log('Failed to fetch page: ', err);
    //     });

}


graphs()

