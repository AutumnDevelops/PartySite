import React, { useState } from 'react';
import {Link} from "react-router-dom";
const Card = () => {
  const Card_Data = [
    {
      label: "Bachelor & Bachelorette Parties",
      background: "card0.png",
      labelbg: "card0B.png"
    },
    {
      label: "Weddings",
      background: "card1.png",
      labelbg: "card1B.png"
    },
    {
      label: "Birthdays",
      background: "card2.png",
      labelbg: "card2B.png"
    },
    {
      label: "Fundraisers",
      background: "card3.png",
      labelbg: "card3B.png"
    },
    {
      label: "Corporate Events",
      background: "card4.png",
      labelbg: "card4B.png"
    },
    {
      label: "Graduation Parties",
      background: "card5.png",
      labelbg: "card5B.png"
    },
  ]
  return (
  <>  
    {Card_Data.map((card, index) => ( 
    <div className="card" key = {index}>
      <div className="background_card" style={{ backgroundImage: `url(${require(`./card_img/${card.background}`)})`, backgroundPosition: "cover", backgroundRepeat: "no-repeat", backgroundSize: "100%" }} />
      <div className="label_card">
        <div style={{ backgroundImage: `url(${require(`./card_img/${card.labelbg}`)})`, backgroundPosition: "contain", backgroundRepeat: "no-repeat", backgroundSize: "100%", height:"100%", width: "100%"}}>
          <h3 id="b">{card.label}</h3>
          <Link to = "/contact"><button className="card_button">Book Now!</button></Link>
        </div>
      </div>
    </div>
    ))}
  </>
  )
}

export default Card