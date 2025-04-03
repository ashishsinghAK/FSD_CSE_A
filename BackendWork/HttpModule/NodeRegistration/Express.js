const express = require('express')
const fs = require('fs').promises;
const app = express();
const PORT = 3100
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to Server"
    })
})

app.post("/register", async (req, res) => {
    let arr = []
    const { name, email, password } = req.body;
    console.log(name, email, password)
    const fData = await fs.readFile('student.json', { encoding: 'utf-8' });
    arr = JSON.parse(fData);
    if (arr.find(ele => ele.email == email)) {
        res.setHeader('Content-Type', 'application/json')
        return res.status(500).json({
            msg: "Already Registered",
        })
    }
    else {
        arr.push({ name, email, password });
        await fs.writeFile('student.json', JSON.stringify(arr, null, 2))
        return res.status(200).json({
            msg: "Registration Successfull",
        })
    }
})

app.post("/login", async(req, res) => {
    let arr=[]
    const {email, password } = req.body;
    console.log( email, password)
    const fData = await fs.readFile('student.json',{encoding:'utf-8'})
    arr = JSON.parse(fData)
    if(arr.find(ele => ele.email==email && ele.password == password)){
        res.setHeader('Content-Type', 'application/json')
        return res.status(200).json({
            msg: "Login Success",
        })
    }
    else{
        return res.status(500).json({
            msg:"Check your login credentials"
        })
    }
})

app.listen(PORT, () => {
    console.log(`Express Server is listening on ${PORT}`);
})