import React from 'react'
import { Child2 } from './Child2'

export const Child1 = () => {
    const data = {
        name:"ashish",
        email:"ashish@gmail.com"
    }
  return (
    <div>
        <Child2 data={data}/>
    </div>
  )
}
