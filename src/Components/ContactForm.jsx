import React from "react";
import "../styles/ConactForm.css";

const ContactForm = () => {
  return (
    <>
      <div className="container ConactForm">
        <div className="contact-form ConactForm">
          <form>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
               
              </div>

              <div className="col-12 col-md-6 col-lg-6">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
               
              </div>
            </div>
            <button type="submit" className="btn btn-danger">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
