import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
    console.log("Menu toggled. isActive:", !isActive);
  };

  return (
    <nav>
      <section id="hamburger_div">
        <button id="hamburger" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
      </section>
      <div id="list">
        <ul className={isActive ? "active" : ""}>
          <li><Link to="/PartySite">Our Services</Link></li>
          <li><Link to="/PartySite/Contact">Connect</Link></li>
          <li><a href="https://autumnfrontend.io/">View Portfolio</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
