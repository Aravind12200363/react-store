import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='header'>
        <h1 style={{color:'white',backgroundColor:'pink'}}>My Application</h1>
      <ul>
        <li>
            <Link to="/Home">Home</Link>
        </li>
        <li>
            <Link to="/Login">Login</Link>
        </li>
      </ul>
    </div>
  )
}
