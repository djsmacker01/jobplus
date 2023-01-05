import React from 'react'
import "../sass/Container.scss";
import Tech from "../images/tech-big.jpg";
import TechI from "../images/tech-small.jpg";
import EngBig from "../images/eng-big.jpg";
import EngSmall from "../images/eng-small.jpg";
import HealthBig from "../images/health-big.jpg";
import HealthSmall from "../images/health-small.jpg";
import "../sass/resets/_normalize.scss";
import "../sass/resets/_placeholder.scss";
import "../sass/resets/_reset.local.scss";
import "../sass/resets/_responsive.scss";
import "../sass/resets/_typography.scss";
import "../sass/Body.scss";




export default function Container() {
  return (
   <>
   <div className="container ">
      <div className="sector">
        <h2>Choose your sector</h2>
        <p>jobs across multiple sectors. See the latest roles now</p>

        <div className="sector__types">
          <div className="sector__wrap">
            <picture className="sector__picture">
              <source srcSet={Tech} media="(min-width: 767px)"/>
              <source srcSet={TechI}/>
              <img src={TechI} alt=""/>
            </picture>
            <div className="sector__name">Technology</div>
            <ul className="sector__list">
              <li><a href="">Accountancy jobs <span>5, 757</span></a></li>
              <li><a href="">Acturial jobs <span>5, 757</span></a></li>
              <li><a href="">Admin, Secretarial jobs <span>5, 757</span></a></li>
            </ul>
          </div>

          <div className="sector__wrap">
            <picture className="sector__picture">
              <source srcSet={EngBig} media="(min-width: 767px)"/>
              <source srcSet={EngSmall}/>
              <img src={TechI} alt=""/>
            </picture>
            <div className="sector__name">Technology</div>
            <ul className="sector__list">
              <li><a href="">Accountancy jobs <span>5, 757</span></a></li>
              <li><a href="">Acturial jobs <span>5, 757</span></a></li>
              <li><a href="">Admin, Secretarial jobs <span>5, 757</span></a></li>
            </ul>
          </div>

          <div className="sector__wrap">
            <picture className="sector__picture">
              <source srcSet={HealthBig} media="(min-width: 767px)"/>
              <source srcSet={HealthSmall}/>
              <img src={TechI} alt=""/>
            </picture>
            <div className="sector__name">Technology</div>
            <ul className="sector__list">
              <li><a href="">Accountancy jobs <span>5, 757</span></a></li>
              <li><a href="">Acturial jobs <span>5, 757</span></a></li>
              <li><a href="">Admin, Secretarial jobs <span>5, 757</span></a></li>
            </ul>
          </div>

          <a href="">
            <div className="sector__browse">Browse all sectors</div>
          </a>

          <ul className="sector__mlist">
            <li><a href="">Accountancy jobs <span>5, 757</span></a></li>
            <li><a href="">Acturial jobs <span>5, 757</span></a></li>
            <li><a href="">Admin, Secretarial jobs <span>5, 757</span></a></li>
          </ul>
        </div>

      </div>
    </div>
   </>
  )
}
