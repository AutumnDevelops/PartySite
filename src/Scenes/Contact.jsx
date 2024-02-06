import React from 'react'
import Nav from "../comps/Nav"
import Form from "../comps/Form"
import book_img from "../img/book_img.jpg"
const Contact = () => {
  return (
  <>
    <Nav />
        <main>
        <div id = "book_img">
                    <img src = {book_img} alt ="book" />
        </div>
        
        <div id ="form">
            <h2>Book your appointment</h2>
            <p>We will get back to you within 48 hours.</p>
          <Form />
        </div>
        </main>
  </>
  )
}

export default Contact