import React from "react";
function Footer() {
  return (
    <>
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#1c2331" }}
      >
        <section
          className="d-flex justify-content-between p-4"
          style={{ backgroundColor: "#6351ce" }}
        >
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="text-white me-4">
              <i className="bi bi-facebook" style={{ fontSize: " 20px" }}></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="bi bi-twitter" style={{ fontSize: " 20px" }}></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="bi bi-google" style={{ fontSize: " 20px" }}></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="bi bi-instagram" style={{ fontSize: " 20px" }}></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="bi bi-linkedin" style={{ fontSize: " 20px" }}></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Dr.Mechanic</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  Trusted by over a million car owners, Dr.Mechanic is India’s
                  most loved car service provider with over 2 million+ cars
                  serviced. We offer a wide variety of car services from basic
                  car servicing to car insurance repairs. Get the best prices on
                  your car service with upto 40% savings. Also, avail free
                  doorstep pickup and drop right from your home, anywhere in
                  Delhi.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="/#" className="text-white">
                    Spare Parts
                  </a>
                </p>
                <p>
                  <a href="/#" className="text-white">
                    Accessories
                  </a>
                </p>
                <p>
                  <a href="/#" className="text-white">
                    Tyres
                  </a>
                </p>
                <p>
                  <a href="/#" className="text-white">
                    Car Wash
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="/#" className="text-white">
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="/#" className="text-white">
                    Service At Doorstep
                  </a>
                </p>
                <p>
                  <a href="/#" className="text-white">
                    Work With Us
                  </a>
                </p>
                <p>
                  <a href="/#" className="text-white">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <i
                    className="bi bi-mailbox2 mr-3"
                    style={{ fontSize: " 20px" }}
                  ></i>{" "}
                  New Delhi, India
                </p>
                <p>
                  <i
                    className="bi bi-envelope mr-3"
                    style={{ fontSize: " 20px" }}
                  ></i>{" "}
                  DrMechanic@customercare.com
                </p>
                <p>
                  <i
                    className="bi bi-telephone mr-3"
                    style={{ fontSize: " 20px" }}
                  ></i>{" "}
                  + 91 234 567 88
                </p>
                <p>
                  <i
                    className="bi bi-printer mr-3"
                    style={{ fontSize: " 20px" }}
                  ></i>{" "}
                  + 91 424 567 50
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            {" "}
            Dr.Mechanic
          </a>
        </div>
      </footer>
    </>
  );
}
export default Footer;
