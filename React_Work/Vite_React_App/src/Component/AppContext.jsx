import React, { createContext, useContext } from 'react'
import Child1 from "./ContextComponent/Child1"
import Child2 from "./ContextComponent/Child2"
import Child3 from "./ContextComponent/Child3"

const myContext = createContext();
const AppContext = () => {
    const data = {
        name: "ashish",
        email: "ashish@gmail.com"
    }
    return (
        <div>
            App Context
            <myContext.Provider value={data}>
                <Child3 />
                <Child2 />
                <Child1 />
            </myContext.Provider>

        </div>
    )
}
export {
    myContext
}

export default AppContext