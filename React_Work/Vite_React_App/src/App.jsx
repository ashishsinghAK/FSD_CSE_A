import React from 'react'
import Student from './Component/Student';
import "./App.css"

const App = () => {
  let a = 12;
  const Mystyle = {
    backgroundColor: 'blue',
    color: 'black',
  }

  return (
    <div className='body'>
      <div style={Mystyle}>
        hello world

      </div>
      <Student college="ABES ENGINEERING COLLEGE"/>
    </div>
  )
}

export default App