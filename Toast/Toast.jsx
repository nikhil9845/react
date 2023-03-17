import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
  



const Toast = () => {
    let handleSubmit =()=>{
        toast.success("Submitted",{position:toast.POSITION.TOP_CENTER})
        
    }
    let handleChange =()=>{
        toast.error("this is erasing data",{position:toast.POSITION.BOTTOM_CENTER})
    }
    let handleChange1 =()=>{
        toast.warning("wrong data",{position:toast.POSITION.BOTTOM_LEFT})
    }
    let handleChange2 =()=>{
        toast.warning("wrong data",{position:toast.POSITION.BOTTOM_RIGHT})
    }
  return (
    <>
    <ToastContainer/>
    <button onClick={handleSubmit}>Click for message</button><br/>
    <button onClick={handleChange}>Click for message</button><br/>
    <button onClick={handleChange1}>Click for message</button><br/>
    <button onClick={handleChange2}>Click for message</button>
    </>
    
  )
}

export default Toast;