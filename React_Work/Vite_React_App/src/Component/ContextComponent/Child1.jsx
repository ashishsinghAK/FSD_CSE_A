import React, { useContext } from 'react'
import { myContext } from '../AppContext'

 const Child1 = () => {
  const child1Context = useContext(myContext)
  return (
    <div>Child1
      <div>branch:{child1Context.name}</div>
    </div>
  )
}

export default Child1