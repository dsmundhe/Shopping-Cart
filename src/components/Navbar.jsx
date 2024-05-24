import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file
import { useSelector } from "react-redux";
function Navbar() {
  const cards = useSelector((card) => card.cards);
  return (
    <div className="navbar">
      {" "}
      {/* Apply the navbar class */}
      <div>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/cards">My Favourites <span>{cards.length}</span></Link>
          </li>
        </ul>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/dipak-samadhan-mundhe-b2301425b/"
          target="_blank"
        >
          {" "}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWFrby47gUS_o0inRNSkveJgt422LGK_d0GqMSSi2J5g&s"
            alt=""
            className="logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
