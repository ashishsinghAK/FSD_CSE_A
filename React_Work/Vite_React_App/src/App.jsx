import React from 'react'
import Student from './Component/Student';
import "./App.css"
import StudentState from './Component/StudentState';
import ImageManupulation from './Component/ImageManupulation';

const App = () => {
  let a = 12;
  const Mystyle = {
    backgroundColor: 'blue',
    color: 'black',
  }

  const data = {
    name:"Ashish Nehra",
    college:"Ashish Khel Academy",
    branch:"CSE",
    sec:"A"
  }

  return (
    <div className='body'>
      {/* <Student college="ABES ENGINEERING COLLEGE" name="Ashish Kumar Singh" sec="A" branch='CSEA'/>
      <Student name="Ashish Kumar Singh" sec="A" branch='CSEA'/>
      <Student college="ABES ENGINEERING COLLEGE" name="Ashish Kumar Singh" sec="A" branch='CSEA'/>
      <Student college="ABES ENGINEERING COLLEGE" name="Ashish Kumar Singh" sec="A" branch='CSEA'/> */}

      {/* <div className='body1'>
      <Student data={data} />
      <Student data={data} />
      <Student data={data} />
      <Student data={data} />
      </div> */}
      
      {/* <StudentState/> */}
      <ImageManupulation/>
      
    </div>
  )
}

export default App