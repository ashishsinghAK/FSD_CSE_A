import React,{useState} from 'react'
import image from "../assests/image.jpg"
import "./IdCard.css"

function ImageManupulation() {
    const [height,setHeight] = useState(300);
    const [width,setWidth] = useState(300);
    const [rotate,setRotate] = useState(0);
    const [red,setRed] = useState(255)
    const [green,setGreen] = useState(228)
    const [blue,setBlue] = useState(196)

    
    function handleHeight(){
        setHeight(height+50)
    }
    function handleWidth(){
        setWidth(width+50)
    }
    function handleRotate(){
        let element = document.getElementById('img')
        element.style.transform = `rotateZ(${setRotate(rotate+20)}deg)`
        
    }
    function handleColor(){
        let r = Math.ceil(Math.random()*250)
        let g = Math.ceil(Math.random()*250)
        let b = Math.ceil(Math.random()*250)
        setBlue(r)
        setRed(b)
        setGreen(g)
    }
  return (
    <div className='image'>
        
        <div>
            <button onClick={handleHeight}>Inhance Height</button>
            <button onClick={handleWidth}>Inhance Width</button>
            <button onClick={handleRotate}>Rotate</button>
            <button onClick={handleColor}>Bg-Change</button>
        </div>
        <div style={{height:'500px',width:'500px',display:'flex',alignItems:'center',justifyContent:'center',
        backgroundColor:`rgb(${red},${green},${blue})`}}><img src={image} id='img' 
        height={height} width={width} style={{transform:`rotateZ(${rotate}deg)`}}/></div>
    </div>
  )
}

export default ImageManupulation