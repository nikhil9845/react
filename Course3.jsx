import React from 'react'

const Course3 = (props) => {
    if(props.courseDetails.courseAvailability==true)
    {
  return (
    <div style={{ alignItems:"center", display:"flex", flexDirection:"column"}}>
<h1>{props.courseDetails.courseName}</h1>
<h2>{props.courseDetails.courseDuration}</h2>
<button style={{color:"green", height:"100px", width:"150px", fontSize:"larger"}}>Available</button>
    </div>
  )
}
else{
    return (
        <div style={{ alignItems:"center", display:"flex", flexDirection:"column"}}>
    <h1>{props.courseDetails.courseName}</h1>
    <h2>{props.courseDetails.courseDuration}</h2>
    <button style={{color:"red", height:"100px", width:"150px", fontSize:"larger", backgroundColor:"aqua", borderRadius:"20%"}}>NotAvailable</button>
        </div>
    )
}
}
export default Course3