import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className="Footer">
      <div className="footbanner">
        <h5>Personally Newsletter</h5>
        <p>A bi-weekly newsletter of design inspiration, resources <br /> and anything related to career development.</p>
      </div>

      <div className="footinput">
        <input type="email" placeholder="Email address" id="email" />
        <input type="button" value="Subscribe" id="btn" />

      </div>

    </div>
  )
}

export default Footer