import React from 'react'
import '../sass/Navbar.scss';
import "../sass/Body.scss";
import Eng from "../images/hamburger.svg";
import Magnify from "../images/magnify.svg";
import Saved from "../images/saved.svg";
import Profile from "../images/saved.svg";
import Exit from "../images/exit.svg";
import Notify from "../images/notify-active.svg";
import '../sass/resets/_normalize.scss';
import "../sass/resets/_placeholder.scss";
import "../sass/resets/_reset.local.scss";
import "../sass/resets/_responsive.scss";
import "../sass/resets/_typography.scss";
// import "../sass/utilities/_fonts.scss";




function Navigation() {
  return (
    <>
      <nav className="nav">
      <input type="checkbox" className="nav__toggle" id="hamburger" hidden />
      <ul className="nav__lblock">
        <li className="nav__hamburger">
          <label><img src={Eng} alt=""/></label>
        </li>
        <li className="nav__logo"><a href="index.html">JOBPLUS</a></li>
      </ul>

      <ul className="nav__icons">
        <li><a href="listings.html"><img src={Magnify} alt=""/></a></li>
        <li><a href="notification.html"><img src={Notify} alt=""/></a></li>
        <li><a href="saved_jobs.html">
            <img src={Saved} alt=""/>
            <span className="nav__savedcount">1</span>
          </a>
        </li>
        <li><a href="profile.html"><img src={Profile} alt=""/></a></li>
        <li><a href="login.html"><img src={Exit} alt=""/></a></li>
      </ul>

      <ul className="nav__dropl">
        <a href="index.html">
          <li>Home</li>
        </a>
        <a href="listings.html">
          <li>Job listing</li>
        </a>
        <a href="applications.html">
          <li>Job applications</li>
        </a>
      </ul>

    </nav>
    </>
  );
}

export default Navigation
