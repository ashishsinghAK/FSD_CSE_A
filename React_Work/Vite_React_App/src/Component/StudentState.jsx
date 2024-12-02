import React,{useState} from 'react'
import "./IdCard.css"

function StudentState() {
  const [value,setValue] = useState(0)
  return (
    <div className='count'>
        <div><h2 className='value'>{value}</h2></div>
        <div className='btn'>
          <button onClick={()=>{return setValue(value+4)}}>Increment</button>
          <button onClick={() => {return setValue(value-10)}}>Decrement</button>
        </div>
    </div>
  )
}

export default StudentState