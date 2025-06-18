import React,{useState,useEffect} from 'react'
import "./Footer.css";
export default function Footer() {
    const[currentTime,setcurrentTime]=useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        const timer=setInterval(()=>{
            setcurrentTime(new Date().toLocaleTimeString());
        },1000);
        return ()=>currentTime(clear);
    },[]);
    
  return (
    <div>
     <h1 className='footer'>Current Time :{currentTime}</h1> 
    </div>
  )
}
