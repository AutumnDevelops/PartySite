import React from 'react'
import {Link} from "react-router-dom"
const Header = () => {
  return (
  <>
    <header id = "header">
        <div id ="header_img">
        </div>

        <div className = "content">
            <h1>The Balloon Gallery</h1>
                    <h2>Party Planning & Coordinating</h2>
                    <Link to = "/contact"><button id = "book_button">Book now</button></Link>

        </div>
    </header>
  </>
  )
}

export default Header