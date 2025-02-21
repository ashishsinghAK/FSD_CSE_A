const http = require('http')
const PORT = 3555

const server = http.createServer((req,res) => {
    if(req.url=='/' && req.method=="GET"){
        res.setHeader('Content-Type','text/html')
    console.log(req.method + " "+ req.url)
    res.write('<h1 style="color:red;background-color:cyan;padding:5px">Node Server is Live</h1>')
    res.end()
    }

    if(req.url==='/show' && req.method==='GET'){
        // equal.setHeader()
        res.end(JSON.stringify({
            message:"Successfully hit the API"
        }))
    }

    if(req.url==='/show' && req.method==='POST'){
        // equal.setHeader()
        res.end(JSON.stringify({
            message:"Successfully hit the POST API route"
        }))
    }
})

server.listen(PORT,() => {
    console.log(`Server is running on port number ${PORT}`)
})