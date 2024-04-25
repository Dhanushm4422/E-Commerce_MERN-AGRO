import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Subscribe to our newsletter</h1>
      <p>Get Exclusive updates</p>
      <div>
        <input type="email" placeholder='Your email id' />
        <button>Subscribe</button>
      </div>
    </div>
   
  )
}

export default NewsLetter
