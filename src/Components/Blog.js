import React from 'react'
import "./style/Blog.css"

function Blog() {
  return (
    <>

      <div className="container">
        <div className="content6 text-center mb-5">




          <h1> LATEST BLOG </h1>
        </div>
        <div className="row">
          <div className="col-md-4 blog1">
            <div className="card5">
              <div className="img5">
                <img src={"./assets/imges/blog-1.webp"} alt="" />
              </div>
              <div className="content-para2">
                <h3>Lorem ipsum dolor sit amet consectetur card.</h3>
                <p className="text-muted">
                  Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita
                  rebum dolor stet amet justo
                </p>
              </div>
              <hr
                className="mt-4"
                style={{ backgroundColor: "rgb(167, 167, 167)" }}
              />
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="img6">
                      <img src={"./assets/imges/gym-2.jpg"} alt="" />
                      <h6>Alex Zender</h6>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="no">
                      <p className="text-muted">
                        {" "}
                        <i className="fa-solid fa-eye" /> 12345
                      </p>
                      <p className="ms-4 text-muted">
                        {" "}
                        <i className="fa-regular fa-comment" /> 123
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 blog2">
            <div className="col-md-4 blog1">
              <div className="card5">
                <div className="img5">
                  <img src={"./assets/imges/gym-1.jpg"} alt="" />
                </div>
                <div className="content-para2">
                  <h3>Lorem ipsum dolor sit amet consectetur card.</h3>
                  <p className="text-muted">
                    Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum
                    clita rebum dolor stet amet justo
                  </p>
                </div>
                <hr
                  className="mt-4"
                  style={{ backgroundColor: "rgb(167, 167, 167)" }}
                />
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="img6">
                        <img src={"./assets/imges/gym-3.jpg"} alt="" />
                        <h6>Alex Zender</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="no">
                        <p className="text-muted">
                          {" "}
                          <i className="fa-solid fa-eye" /> 12345
                        </p>
                        <p className="ms-4 text-muted">
                          {" "}
                          <i className="fa-regular fa-comment" /> 123
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 blog3">
            <div className="col-md-4 blog1">
              <div className="card5">
                <div className="img5">
                  <img src={"./assets/imges/gym-2.jpg"} z alt="" />
                </div>
                <div className="content-para2">
                  <h3>Lorem ipsum dolor sit amet consectetur card.</h3>
                  <p className="text-muted">
                    Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum
                    clita rebum dolor stet amet justo
                  </p>
                </div>
                <hr
                  className="mt-4"
                  style={{ backgroundColor: "rgb(167, 167, 167)" }}
                />
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="img6">
                        <img
                          src={"./assets/imges/gym-2.jpg"}
                          alt=""
                        />
                        <h6>Alex Zender</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="no">
                        <p className="text-muted">
                          <i className="fa-solid fa-eye" /> 12345
                        </p>
                        <p className="ms-4 text-muted">
                          {" "}
                          <i className="fa-regular fa-comment" /> 123
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
      </br>
      <br>
      </br>.
      {/* //////////////////////////////////////////////////////////////////// */}


      <div className="container  o-docter ">
        <div className="content6 text-center mb-4">
          {/* <h4>OUR TRAINERS</h4> */}
          <h1> OUR TRAINERS</h1>
         
        </div>



        {/* carousel */}

        <div
          id="carouselExampleControls"
          className="carousel slide slide3 "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-6">
                  <div className="d-card">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="card-img">
                          <img src={"./assets/imges/tra-4.jpg"} alt="" />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="card-content1">
                          <h5>THOMAS SHELBY</h5>
                          <h6>GOLD MEDALIST-2001
                      
                          </h6>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Temporibus, repellendus
                          </p>
                        </div>
                        <div className="media-card">
                          <hr />
                          <i className="fa-brands fa-twitter " />
                          <i className="fa-brands fa-facebook " />
                          <i className="fa-brands fa-linkedin-in " />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-card">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="card-img">
                          <img src={"./assets/imges/tra-1.jpg"} alt="" />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="card-content1">
                          <h5>ATHOR BELLA</h5>
                          <h6>BODY BUILDER</h6>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Temporibus, repellendus
                          </p>
                        </div>
                        <div className="media-card">
                          <hr />
                          <i className="fa-brands fa-twitter " />
                          <i className="fa-brands fa-facebook " />
                          <i className="fa-brands fa-linkedin-in " />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-6">
                  <div className="d-card">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="card-img">
                          <img src={"./assets/imges/tra-2.jpg"} alt="" />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="card-content1">
                          <h5>SHIMY SHOLE</h5>
                          <h6>Cardiology Specialist</h6>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Temporibus, repellendus
                          </p>
                        </div>
                        <div className="media-card">
                          <hr />
                          <i className="fa-brands fa-twitter " />
                          <i className="fa-brands fa-facebook " />
                          <i className="fa-brands fa-linkedin-in " />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-card">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="card-img">
                          <img src={"./assets/imges/tra-3.jpg"} alt="" />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="card-content1">
                          <h5>TOGER MOOL</h5>
                          <h6>Cardiology Specialist</h6>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Temporibus, repellendus
                          </p>
                        </div>
                        <div className="media-card">
                          <hr />
                          <i className="fa-brands fa-twitter " />
                          <i className="fa-brands fa-facebook " />
                          <i className="fa-brands fa-linkedin-in " />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-6">
                  <div className="d-card">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="card-img">
                          <img src={"./assets/imges/tra-3.jpg"} alt="" />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="card-content1">
                          <h5>JIMMY THOMR</h5>
                          <h6> Specialist</h6>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Temporibus, repellendus
                          </p>
                        </div>
                        <div className="media-card">
                          <hr />
                          <i className="fa-brands fa-twitter " />
                          <i className="fa-brands fa-facebook " />
                          <i className="fa-brands fa-linkedin-in " />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-card">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="card-img">
                          <img src={"./assets/imges/tra-4.jpg"} alt="" />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="card-content1">
                          <h5>HARRY MOLO</h5>
                          <h6>Cardiology </h6>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Temporibus, repellendus
                          </p>
                        </div>
                        <div className="media-card">
                          <hr />
                          <i className="fa-brands fa-twitter " />
                          <i className="fa-brands fa-facebook " />
                          <i className="fa-brands fa-linkedin-in " />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev p2"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <i className="fa-solid fa-arrow-left" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next n2"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <i className="fa-solid fa-arrow-right" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <br>
      </br>
      <br>
      </br>
    






{/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */ }

  {/* 
  <div className="container">
    <div className="content6 text-center mb-4">
      
      <h1>
         Our Services
      </h1>
    </div>
  </div>
  <div className="carousel">
  
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active car1">
          <div className="card3">
            <div className="image">
              <img src={"./assets/imges/blog-1.webp"}alt="" />
              <i className="fa-solid fa-quote-left i fa-3x text-center" />
            </div>
            <div className="para2">
              <p className="text-center text-muted">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente sit laborum repudiandae doloremqu error earum rerum. At
                veritatis similique cumque. Lorem ipsum dolor sit amet
              </p>
              <hr />
              <h4 className="text-center">Patient Name</h4>
              <h5 className="text-center">Profession</h5>
            </div>
          </div>
        </div>
        <div className="carousel-item car2">
          <div className="card3">
            <div className="image">
              <img src="./images1/Drugs-2.jpg" alt="" />
              <i className="fa-solid fa-quote-left i fa-3x text-center" />
            </div>
            <div className="para2">
              <p className="text-center text-muted">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente sit laborum repudiandae doloremqu error earum rerum. At
                veritatis similique cumque. Lorem ipsum dolor sit amet
              </p>
              <hr />
              <h4 className="text-center">Patient Name</h4>
              <h5 className="text-center">Profession</h5>
            </div>
          </div>
        </div>
        <div className="carousel-item car3">
          <div className="card3">
            <div className="image">
              <img src={"./assets/imges/services-3.jpg"} alt="" />
              <i className="fa-solid fa-quote-left i fa-3x text-center" />
            </div>
            <div className="para2">
              <p className="text-center text-muted">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente sit laborum repudiandae doloremqu error earum rerum. At
                veritatis similique cumque. Lorem ipsum dolor sit amet
              </p>
              <hr />
              <h4 className="text-center">Patient Name</h4>
              <h5 className="text-center">Profession</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  


    </>
  )
}

export default Blog