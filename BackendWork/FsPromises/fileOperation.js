const promise = require('fs').promises

const fsp = promise.writeFile('data.txt', 'hello using fs promise')
fsp.then(()=> {
    console.log('Data written successfully')
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log('finn')
})

const readFileAsync = async() => {
    const data = await promise.readFile('data.txt',{encoding:'utf-8'})
    console.log(data);
}

readFileAsync();