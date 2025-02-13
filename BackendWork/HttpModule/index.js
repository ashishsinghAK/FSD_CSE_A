const http = require('http')
const PORT = 3555

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','text/html')
    res.write('<h1 style="color:red;background-color:cyan;padding:5px">Node Server is Live</h1>')
    res.end()
})

server.listen(PORT,() => {
    console.log(`Server is running on port number ${PORT}`)
})