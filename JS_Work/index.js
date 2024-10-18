// console.dir(document)
// const div = document.getElementsByClassName('main')
// div[0].innerHTML = "javascript"

// const p = document.createElement('p')
// p.innerHTML = "abes"
// div[0].appendChild(p)
// p.style.backgroundColor = "blue"
// p.style.color = "white"

// const img = document.createElement('img')
// img.innerHTML = "img.jpg"
// div[0].appendChild(img)


const  getData = () => {
    console.log("kya hua be");
}
const div = document.getElementsByClassName('main')
console.log(div[0]);

div[0].addEventListener('click',getData)
div[0].addEventListener('click',() => {div[0].style.backgroundColor="blue",div[0].style.color="white"})

const promise = new Promise((resolve,reject) => {
    let a = 12
    if(a<10){
        console.log("resolved");
        
    }
    else{
        console.log("not resolved");
        
    }
})
promise.then((msg) => {console.log(msg)}).catch((err) => {console.log(err)})

const pr = new Promise((resolve,reject) => {
    let val = parseInt(Math.random()*100 +1)
    console.log("Random value is: ",val);
    
    if(val<100){
        console.warn("within range")
    }
    else{
        console.log("out of range")
    }
})

pr.then((msg) => {console.log(msg)}).catch((err) => {console.log(err)})

const res = fetch("https://dummyjson.com/products")
res.then((data) => data.json()).then((data) => {
    const p = document.createElement('p')
    p.innerHTML = `${data.products[0].title}`
    div[0].appendChild(p) 
})