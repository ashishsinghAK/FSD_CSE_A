import React from 'react'
import { Child3 } from './Child3'

export const Child2 = ({data}) => {
  return (
    <div>
         <p>I am in child2 </p>
           {/* <p> {data.name}</p>
            <p>{data.email}</p> */}
            <Child3 value={data}/>
        
    </div>
  )
}
