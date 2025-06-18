import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css";
export default function Header() {
  return (
    <div className='header'>
      <h1 className='h1'>My Application</h1>
       <Link to="/Home">Home  </Link>
       <Link to="/Login">Login</Link>
    </div>
  )
}
