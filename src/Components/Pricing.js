import React from 'react'
import "./style/pricing.css"


function Pricing() {
    return (
        <>
              <h2>RAGISTER NOW</h2>
            <div class="Appointment">
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-6  Apt">
                            <div className="content3">
                                {/* <h3 className="app">APPOINTMENT</h3> */}
                                <h1 className="app2"> The first 7 day trail completely free with  <span>Trainer</span></h1>
                                <p className="para">
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
                                    ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
                                    rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod
                                    et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea
                                    dolore sanctus sed et. Takimata takimata sanctus sed
                                </p>
                                <button className="btn3">VIEW</button>
                                <button className="btn4">RAGISTER</button>
                            </div>
                        </div>
                        <div className="col-md-6 Apt">
                            <div className=" container">
                                <div className="section-form">
                                    <h4 id="Caption">RAGISTER NOW</h4>
                                    <form action="">
                                        <div className="row g-3 form-row">
                                            <div className="col-12 col-sm-6  center">
                                                <select name="dep" id="dep" className="input-box">
                                                    <option value="Choose department">Choose Batch</option>
                                                    <option value="Choose department">Bat-5pm</option>
                                                    <option value="Choose department">Bat-6:30pm</option>
                                                    <option value="Choose department">Bat-8pm</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-sm-6 center1">
                                                <select name="dep" id="dep" className="input-box">
                                                    <option value="Choose department">Select TRAINER</option>
                                                    <option value="Docter1">TRAINER1</option>
                                                    <option value="Docter2">TRAINER2</option>
                                                    <option value="Docter3">TRAINER3</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-sm-6 center">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    className="input-box"
                                                />
                                            </div>
                                            <div className="col-12 col-sm-6 center1">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Your Email"
                                                    className="input-box"
                                                />
                                            </div>
                                            <div className="col-12 col-sm-6 center">
                                                <input
                                                    type="date"
                                                    name="date"
                                                    id="date"
                                                    placeholder="Date"
                                                    className="input-box"
                                                />
                                            </div>
                                            <div className="col-12 col-sm-6 center1">
                                                <input
                                                    type="time"
                                                    name="time"
                                                    id="time"
                                                    placeholder="Time"
                                                    className="input-box"
                                                />
                                            </div>
                                            <div
                                                className="col-12"
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center"
                                                }}
                                            >
                                                <input
                                                    type="submit"
                                                    defaultValue="Make An Appointment"
                                                    id="submit"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}



<div className="container-fluid search">
    <div className="container content5 text-center ">
      <h4 className="mt-5"></h4>
      <h3 className='helo'>
        SUBSCRIBE TO OUR MAILING LIST 
      </h3>
      <br></br>
      <p className="mt-3">
        SIGN UP TO RECEIVE THE LATEST INFORAMTION
      </p>
      
      <br>
      </br>
      <div className="dep mt-3">
        <select name="de" id="de" className="dep1">
          <option value="Department">KEYBOARD</option>
          <option value="Department">CAPITAL</option>
          <option value="Department">SMALL</option>
          <option value="Department">NUMBER</option>
        </select>
        <input
          type="text"
          name="key"
          id="key"
          placeholder="...."
          className="dep2"
        />
        <input type="submit" defaultValue="Search" className="dep3" />
      </div>
    </div>
  </div>
 


{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}



        </>
    )
}

export default Pricing