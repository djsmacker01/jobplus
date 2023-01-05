import React from 'react'
import "../sass/Form.scss";
import "../sass/Hero.scss";
import "../sass/Body.scss";
import "../sass/resets/_normalize.scss";
import "../sass/resets/_placeholder.scss";
import "../sass/resets/_reset.local.scss";
import "../sass/resets/_responsive.scss";
import "../sass/resets/_typography.scss";



export default function Form() {
  return (
    <>
        <div className="hero hero--bgimg body">
      <div className="hero__wrap">
        <h1>Connecting candidates to their dream jobs</h1>
        <div className="form">
          <div className="form__group">
            <label className="form__label form__label--light">What</label>
            <input className="form__field" type="text" placeholder="Job title, skill or company"/>
          </div>

          <div className="form__group">
            <label className="form__label form__label--light">Where</label>
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
