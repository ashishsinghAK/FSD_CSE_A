const fs = require('fs')
const dataWrite = () => {
    try {
        fs.writeFileSync('data.txt', "Hello data from fs module")
        console.log("data written successfully")
    } catch(error) {
        console.log(error)
    }
}
const dataRead = () => {
    try {
        const data = fs.readFileSync('data.txt', 'utf-8')
        console.log(data)
    } catch(error) {
        console.log(error)
    }
}
const dataAppend = () => {
    try {
        fs.appendFileSync('data.txt', ' appending using fs module')
        console.log('append data successfully')
    } catch(error) {
        console.log(error)
    }
}
const dataUnlink = () => {
    try {
        fs.unlinkSync('data.txt')
        console.log('file deleted successfully')
    } catch(error) {
        console.log(error)
    }
}



const obj = {
    dataRead,
    dataWrite,
    dataAppend,
    dataUnlink
}

module.exports = obj