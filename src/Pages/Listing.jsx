import React from 'react'
import Navigation from '../Components/Navigation'
import '../sass/Hero.scss'
import "../sass/Form.scss";


export default function Listing() {
  return (
    <>
    <Navigation/>
    <div className="hero">
      <div className="hero__wrap">
        <div className="form">
          <div className="form__group">
            <label className="form__label">What</label>
            <input className="form__field" type="text" placeholder="Job title, skill or company"/>
          </div>

          <div class="form__group">
            <label className="form__label">Where</label>
            <input className="form__field" type="text" placeholder="Town, city or postcode"/>
          </div>

          <div className="form__group">
            <input className="form__btn" type="submit" value="Search"/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
