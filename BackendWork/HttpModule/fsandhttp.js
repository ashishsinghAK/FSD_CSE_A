const fs = require('fs').promises;
const http = require('http')
const PORT = 3100
const server = http.createServer(async (req, res) => {
    // try {
    //     res.setHeader('Content-Type', 'text/html')
    //     res.write("Welcome to http and fs module");
    //     const data = await fs.readFile('student.json', { encoding: 'utf-8' })
    //     res.end(data)
    // }
    // catch (err) {
    //     console.log("Error while fetching the file")
    // }

    if(req.url=='/home' && req.method=="GET"){
        res.setHeader('Content-Type','text/html');
        const template = await fs.readFile('home.html');
        res.end(template)
    }

    else if(req.url='/textdata' && req.method=="GET"){
        res.setHeader('Content-Type','text/html');
        const template = await fs.readFile('textdata.text');
        res.end(template)
    }
    else{
        res.setHeader('Content-Type','text/html');
        const template = await fs.readFile('error.html');
        res.end(template)
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})