const http = require('http')
const PORT = 3100

const server = http.createServer(async (req, res) => {
    try {
        res.setHeader('Content-Type', 'text/html')
        const data = await fetch("https://fakestoreapi.com/products")
        const jsonData = await data.json();

        const fetchdata = `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fake Store API</title>
    <style>
        .head {
            display: flex;
            flex-direction:column;
            gap:5em;
        }
        img {
            width: 200px;
            height: 200px;
        }

        .container{
        border:1px solid black;
        padding:2em;
        border-radius:1em;
        display:flex;
        justify-content:space-between;

        }

        .desc{
        display:flex;
        flex-direction:column;
        }
    </style>
</head>
<body>
    <div class="head">
        ${jsonData.map((ele) => {
            return (`
                <div class="container">
                    <div><img src="${ele.image}" alt="Product Image"></div>
                    <div class="desc">
                    <div>Title: ${ele.title}</div>
                    <div>Price: $${ele.price}</div>
                    <div>Description: $${ele.description}</div>
                    </div>
                </div>
            `);
        })} 
    </div>
</body>
</html>
        `
        res.end(fetchdata)
    }
    catch (err) {
        console.log("Error while fetching the file", err);
        res.end("<h1>Error fetching data</h1>");
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
