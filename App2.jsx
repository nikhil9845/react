import React from 'react'
import JSON from "./userName.json"
import Course from './Course'
import "./global1.css"

const App2 = () => {
  return (
    <div>
        <Course payload={JSON}/>
    </div>
  )
}

export default App2;