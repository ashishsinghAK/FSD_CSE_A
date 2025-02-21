const http = require('http')
const PORT = 3100

const server = http.createServer(async (req, res) => {
    try {
        res.setHeader('Content-Type', 'text/html')
        const data = await fetch("https://fakestoreapi.com/products")
        const jsonData = await data.json();
        

        const fetchdata = `
        <!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
    <img src=${jsonData[1].image} height=200px width=200px/>
    </div>
</body>
</html>
        `
        res.end(fetchdata)
    }
    catch (err) {
        console.log("Error while fetching the file")
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})