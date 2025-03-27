const http = require('http')
const fs = require('fs').promises;

const PORT = 3100



const server = http.createServer((req,res) => {
    if(req.url=='/user/signup' && req.method=='POST'){
        let body = ''
        let arr = []
        req.on('data', (chunk) => {
            body += chunk
        })

        req.on('end', async () => {
            const {id,name,email,password} = JSON.parse(body);
            const fData = await fs.readFile('User.json', { encoding: 'utf-8' });
            arr = JSON.parse(fData);
            
            if (arr.find(ele => ele.id ==id)) {
                res.setHeader('Content-Type', 'application/json')
                return res.end(JSON.stringify({ "message": "This Id is already registered. Id must be Unique." }))
            }
            if (arr.find(ele => ele.email == email)) {
                res.setHeader('Content-Type', 'application/json')
                return res.end(JSON.stringify({ "message": "This Email is already Register. Kuch naya try karo" }))
            }
            else {
                arr.push({id, name, email, password });
                await fs.writeFile('User.json', JSON.stringify(arr, null, 2))
                return res.end(JSON.stringify({ "message": "Registration Successfully" }))
            }
        })
    }

    if(req.url=='/user/login' && req.method=='POST'){
        let body = ''
        let arr = []
        req.on('data',(data) => {
            body+=data
        })

        req.on('end', async () => {
            const {email,password} = JSON.parse(body);
            const fData = await fs.readFile('User.json',{ encoding: 'utf-8' });
            arr = JSON.parse(fData);
            if(arr.find(ele => ele.email==email && ele.password == password)){
                res.setHeader('Content-Type', 'application/json')
                return res.end(JSON.stringify({ "message": "Login Successfully" }))
            }
            else{
                return res.end(JSON.stringify({ "message": "Login Failed. Check your Credentials" }))
            }
        })
    }

    if(req.url==`/user/getById` && req.method=='GET'){
        let body = ''
        let arr = []
        req.on('data',(data) => {
            body+=data
        })

        req.on('end', async () => {
            const {id} = JSON.parse(body);
            const fData = await fs.readFile('User.json',{ encoding: 'utf-8' });
            arr = JSON.parse(fData);
            if(arr.find(ele => ele.id)){
                res.setHeader('Content-Type', 'application/json')
                return res.end(JSON.stringify(arr[id-1]))
            }
            else{
                return res.end(JSON.stringify({ "message": "Data not found" }))
            }
        })
    }

})

server.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`)
})