import React from "react";
import logo from "../images/Troll Face.png";

function Navbar() {
  return (
    <div id="Navbar">
      <img id="navbar_logo" src={logo} />
      <h3>Meme Generator</h3>
      <p>React Course - Project 3</p>
    </div>
  );
}

export default Navbar;
