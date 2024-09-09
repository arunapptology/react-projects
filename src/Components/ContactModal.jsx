import React, { useState, useEffect } from "react";

const ContactModal = () => {
  const min = 100;
  const max = 999;

  const rand = Math.floor(Math.random() * (max - min + 1)) + min;

  const [name, setName] = useState();
  const [position, setPostion] = useState();
  const [mobile_no, setMobile] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();

  const handleSubmitData = (event) => {
    event.preventDefault();

    var showList = [];

    const show = {
      id: rand,
      name: name,
      position: position,
      mobile_no: mobile_no,
      address: address,
      email: email,
      image: image,
    };
    showList.push(show);
    var finalArr =
      localStorage.getItem("lists") != undefined
        ? [...showList, ...JSON.parse(localStorage.getItem("lists"))]
        : showList;

    localStorage.setItem("lists", JSON.stringify(finalArr));


    setName('')
  };




  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Contact
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="contact-form ConactForm">
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Position</label>
                        <input
                          name="position"
                          type="text"
                          className="form-control"
                          onChange={(e) => setPostion(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Mobile Number</label>
                        <input
                          name="mobile_no"
                          type="text"
                          className="form-control"
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input
                          name="address"
                          type="text"
                          className="form-control"
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          aria-describedby="emailHelp"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Image</label>
                        <input
                          name="image"
                          type="file"
                          className="form-control"
                          onChange={(e) => setImage(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      onClick={handleSubmitData}
                      type="submit"
                      className="btn btn-danger"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
