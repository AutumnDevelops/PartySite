import React from 'react'
import About from "./About"
import Cards from "./Cards";
import Header from "./Header";
import Nav from "../comps/Nav";
const Home = () => {
  return (
<>
    <Header />
    <Nav/>
    <About />
    <Cards />
</>

  )
}

export default Home