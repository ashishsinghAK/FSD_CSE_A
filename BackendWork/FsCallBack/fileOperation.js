const fs = require('fs')

const writeData = () => {
    try {
        fs.writeFile('data.txt',"Welcome to FSD session", ()=> {
            console.log("data written successfully")
        })
    } catch(error) {
        console.log(error)
    }
}
const readData = () => {
    try {
        fs.readFile('data.txt', (err, data)=>{
            if(err) {
                console.log(err)
            }
            console.log(data.toString())
        })
    } catch(error) {
        console.log(error)
    }
}
const appendData = () => {
    try {
        fs.appendFile('data.txt', ' I am appended data', ()=>{
            console.log('data appended successfully')
        })
    } catch(error) {
        console.log(error)
    }
}
const unlinkData = () => {
    try {
        fs.unlink('data.txt', ()=>{
            console.log('file deleted successfully')
        })
    } catch(error) {
        console.log(error)
    }
}


const obj = {
    readData,
    writeData,
    appendData,
    unlinkData
}

module.exports = obj