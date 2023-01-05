import React from 'react'
import '../sass/Cookie.scss'
import "../sass/resets/_normalize.scss";
import "../sass/resets/_placeholder.scss";
import "../sass/resets/_reset.local.scss";
import "../sass/resets/_responsive.scss";
import "../sass/resets/_typography.scss";
import "../sass/Body.scss";


export default function Cookie() {
  return (
    <div  className='cookie'>
        <p>
        Jobplus uses cookies. By continuing you are agreeing to
        our use of cookies. <a href="">Learn more</a>.
         </p>
      <img src="images/cookie-close.svg" alt=""></img>
    </div>
  )
}
