import React from 'react'
import "./style/footer.css"

function Footer() {
  return (
<>

  {/* find a docter  start */}
  
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
 <footer>
  <div className="container">
    <div className="row f-row">
      <div className="col-md-3">
        <div className="f1">
          <h3> TOUCH</h3>
          <p> 
            No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
            et dolor <br /> sed dolor
          </p>
          <address>
            <i className="fa-solid fa-location-dot me-2" /> 123 Street, New
            York, USA
          </address>
          <address>
            {" "}
            <i className="fa-solid fa-envelope me-2" /> info@example.com
          </address>
          <address>
            {" "}
            <i className="fa-solid fa-phone me-2" /> +012 345 67890
          </address>
        </div>
      </div>
      <div className="col-md-3">
        <div className="f2">
          <h3>LINKS</h3>
          <a href="#">
            {" "}
            <i className="fa-solid fa-angle-right" />
            Home
          </a>
          <a href="#">
            {" "}
            <i className="fa-solid fa-angle-right" />
            About us{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fa-solid fa-angle-right" />
            Our Services
          </a>
          <a href="#">
            {" "}
            <i className="fa-solid fa-angle-right" /> Meet The Team
          </a>
          <a href="#">
            {" "}
            <i className="fa-solid fa-angle-right" />
            Latest Blog{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fa-solid fa-angle-right" />
            Contact Us{" "}
          </a>
        </div>
      </div>
      <div className="col-md-3">
        <div className="f3">
          <h3>Phone</h3>
          <a href="#">
            {" "}
            <i className="fa-solid fa-angle-right me-2" />
            Home{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fa-solid fa-angle-right" />
            About us{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fa-solid fa-angle-right" />
            Our Services
          </a>
          <a href="#">
            {" "}
            <i className="fa-solid fa-angle-right" /> Meet The Team
          </a>
          <a href="#">
            {" "}
            <i className="fa-solid fa-angle-right" />
            Latest Blog{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fa-solid fa-angle-right" />
            Contact Us{" "}
          </a>
        </div>
      </div>
      <div className="col-md-3">
        <div className="f4">
          <h3>contact</h3>
          <div className="f-input">
            <input
              type="text"
              name="emali"
              id="email"
              className="f-email"
              placeholder="Your Email Address"
            />
            <input type="submit" defaultValue="Sign up" className="f-signup" />
          </div>
          <h5>FOLLOW US</h5>
          <div className="s-media">
            <i className="fa-brands fa-twitter " />
            <i className="fa-brands fa-facebook " />
            <i className="fa-brands fa-linkedin-in " />
            <i className="fa-brands fa-instagram text-center" />
          </div>
        </div>
      </div>
    </div>
    <hr style={{ color: "rgb(93, 103, 160)" }} />
    <div className="row f2-row">
      <div className="col-md-6">
        <div className="res">
          {/* © <a href="#">Your Site Name.</a> All Rights Reserved. */}
        </div>
      </div>
      <div className="col-md-6">
        <div className="resd">
          {/* Designed By */}
          {/* <a href="#">HTML Codex</a> */}
        </div>
      </div>
    </div>
  </div>
</footer>


</>
  )
};

export default Footer;