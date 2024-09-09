import React from "react";

import { Link } from "react-router-dom";

import ContactModal from "./ContactModal";

import GlobalModal from "./GlobalModal";

import "../styles/UsersList.css";

const UsersList = () => {


 const listsData =  localStorage.getItem("lists")


 const ddd = {
  "input": [{
    listsData
  }]
}


console.log(ddd)




  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="mb-3">
              <h5 className="card-title">
                Contact List
                <span className="text-muted fw-normal ms-2">(834)</span>
              </h5>

          
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
              <div>
                <ul className="nav nav-pills">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="List"
                    >
                      <i className="bx bx-list-ul" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      aria-current="page"
                      className="router-link-active router-link-exact-active nav-link active"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Grid"
                    >
                      <i className="bx bx-grid-alt" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="bx bx-plus me-1" /> Add New
                </button>
              </div>
              <div className="dropdown">
                <Link
                  className="btn btn-link text-muted py-1 font-size-16 shadow-none dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bx bx-dots-horizontal-rounded" />
                </Link>

                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item">Action</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">Another action</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">Something else here</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="dropdown float-end">
                  <Link
                    className="text-muted dropdown-toggle font-size-16"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                  >
                    <i className="bx bx-dots-horizontal-rounded" />
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <Link className="dropdown-item">Edit</Link>

                    <Link className="dropdown-item">Action</Link>

                    <Link className="dropdown-item">Remove</Link>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt=""
                      className="avatar-md rounded-circle img-thumbnail"
                    />
                  </div>
                  <div className="flex-1 ms-3">
                    <h5 className="font-size-16 mb-1">
                      <Link to="/" className="text-dark" />
                      Phyllis Gatlin
                    </h5>
                    <span className="badge badge-soft-success mb-0">
                      Full Stack Developer
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-1">
                  <p className="text-muted mb-0">
                    <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-warning" />{" "}
                    070 2860 5375
                  </p>
                  <p className="text-muted mb-0 mt-2">
                    <i className="mdi mdi-email font-size-15 align-middle pe-2 text-warning" />{" "}
                    PhyllisGatlin@spy.com
                  </p>
                  <p className="text-muted mb-0 mt-2">
                    <i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-warning" />{" "}
                    52 Ilchester MYBSTER 9WX
                  </p>
                </div>
                <div className="d-flex gap-2 pt-4">
                  <button
                    type="button"
                    className="btn btn-soft-primary btn-sm w-50"
                  >
                    <i className="bx bx-user me-1" /> Profile
                  </button>
                  <button type="button" className="btn btn-danger btn-sm w-50">
                    <i className="bx bx-message-square-dots me-1" /> Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="dropdown float-end">
                  <Link
                    className="text-muted dropdown-toggle font-size-16"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                  />
                  <i className="bx bx-dots-horizontal-rounded" />

                  <div className="dropdown-menu dropdown-menu-end">
                    <Link className="dropdown-item">Edit</Link>

                    <Link className="dropdown-item">Action</Link>

                    <Link className="dropdown-item">Remove</Link>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      alt=""
                      className="avatar-md rounded-circle img-thumbnail"
                    />
                  </div>
                  <div className="flex-1 ms-3">
                    <h5 className="font-size-16 mb-1">
                      <Link to="/" className="text-dark" />
                      James Nix
                    </h5>
                    <span className="badge badge-soft-success mb-0">
                      Full Stack Developer
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-1">
                  <p className="text-muted mb-0">
                    <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-warning" />{" "}
                    046 5685 6969
                  </p>
                  <p className="text-muted mb-0 mt-2">
                    <i className="mdi mdi-email font-size-15 align-middle pe-2 text-warning" />{" "}
                    JamesNix@spy.com
                  </p>
                  <p className="text-muted mb-0 mt-2">
                    <i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-warning" />{" "}
                    5 Boar Lane SELLING 2LG
                  </p>
                </div>
                <div className="d-flex gap-2 pt-4">
                  <button
                    type="button"
                    className="btn btn-soft-primary btn-sm w-50"
                  >
                    <i className="bx bx-user me-1" /> Profile
                  </button>
                  <button type="button" className="btn btn-danger btn-sm w-50">
                    <i className="bx bx-message-square-dots me-1" /> Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="dropdown float-end">
                  <Link
                    className="text-muted dropdown-toggle font-size-16"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                  />
                  <i className="bx bx-dots-horizontal-rounded" />

                  <div className="dropdown-menu dropdown-menu-end">
                    <Link className="dropdown-item">Edit</Link>

                    <Link className="dropdown-item">Action</Link>

                    <Link className="dropdown-item">Remove</Link>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      alt=""
                      className="avatar-md rounded-circle img-thumbnail"
                    />
                  </div>
                  <div className="flex-1 ms-3">
                    <h5 className="font-size-16 mb-1">
                      <Link to="/" className="text-dark" />
                      Darlene Smith
                    </h5>
                    <span className="badge badge-soft-danger mb-0">
                      UI/UX Designer
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-1">
                  <p className="text-muted mb-0">
                    <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-warning" />{" "}
                    012 6587 1236
                  </p>
                  <p className="text-muted mb-0 mt-2">
                    <i className="mdi mdi-email font-size-15 align-middle pe-2 text-warning" />{" "}
                    DarleneSmith@spy.com
                  </p>
                  <p className="text-muted mb-0 mt-2">
                    <i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-warning" />{" "}
                    57 Guildry Street GAMRIE
                  </p>
                </div>
                <div className="d-flex gap-2 pt-4">
                  <button
                    type="button"
                    className="btn btn-soft-primary btn-sm w-50"
                  >
                    <i className="bx bx-user me-1" /> Profile
                  </button>
                  <button type="button" className="btn btn-danger btn-sm w-50">
                    <i className="bx bx-message-square-dots me-1" /> Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="dropdown float-end">
                  <Link
                    className="text-muted dropdown-toggle font-size-16"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                  />
                  <i className="bx bx-dots-horizontal-rounded" />

                  <div className="dropdown-menu dropdown-menu-end">
                    <Link className="dropdown-item">Edit</Link>

                    <Link className="dropdown-item">Action</Link>

                    <Link className="dropdown-item">Remove</Link>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="avatar-md">
                    <div className="avatar-title bg-soft-primary text-warning display-6 m-0 rounded-circle">
                      <i className="bx bxs-user-circle" />
                    </div>
                  </div>
                  <div className="flex-1 ms-3">
                    <h5 className="font-size-16 mb-1">
                      <Link to="/" className="text-dark" />
                      William Swift
                    </h5>
                    <span className="badge badge-soft-warning mb-0">
                      Backend Developer
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-1">
                  <p className="text-muted mb-0">
                    <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-warning" />{" "}
                    012 6587 1236
                  </p>
                  <p className="text-muted mb-0 mt-2">
                    <i className="mdi mdi-email font-size-15 align-middle pe-2 text-warning" />{" "}
                    WilliamSwift@spy.com
                  </p>
                  <p className="text-muted mb-0 mt-2">
                    <i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-warning" />{" "}
                    80 South Street MONKW 7BR
                  </p>
                </div>
                <div className="d-flex gap-2 pt-4">
                  <button
                    type="button"
                    className="btn btn-soft-primary btn-sm w-50"
                  >
                    <i className="bx bx-user me-1" /> Profile
                  </button>
                  <button type="button" className="btn btn-danger btn-sm w-50">
                    <i className="bx bx-message-square-dots me-1" /> Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="dropdown float-end">
                  <Link
                    className="text-muted dropdown-toggle font-size-16"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                  />
                  <i className="bx bx-dots-horizontal-rounded" />

                  <div className="dropdown-menu dropdown-menu-end">
                    <Link className="dropdown-item">Edit</Link>

                    <Link className="dropdown-item">Action</Link>

                    <Link className="dropdown-item">Remove</Link>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="avatar-md">
                    <div className="avatar-title bg-soft-primary text-warning display-6 m-0 rounded-circle">
                      <i className="bx bxs-user-circle" />
                    </div>
                  </div>
                  <div className="flex-1 ms-3">
                    <h5 className="font-size-16 mb-1">
                      <Link to="/" className="text-dark" />
                      Kevin West
                    </h5>
                    <span className="badge badge-soft-success mb-0">
                      Full Stack Developer
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-1">
                  <p className="text-muted mb-0">
                    <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-warning" />{" "}
                    052 6524 9896
                  </p>
                  <p className="text-muted mb-0 mt-2">
                    <i className="mdi mdi-email font-size-15 align-middle pe-2 text-warning" />{" "}
                    KevinWest@spy.com
                  </p>
                  <p className="text-muted mb-0 mt-2">
                    <i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-warning" />{" "}
                    88 Tadcaster PINCHBECK 6UB
                  </p>
                </div>
                <div className="d-flex gap-2 pt-4">
                  <button
                    type="button"
                    className="btn btn-soft-primary btn-sm w-50"
                  >
                    <i className="bx bx-user me-1" /> Profile
                  </button>
                  <button type="button" className="btn btn-danger btn-sm w-50">
                    <i className="bx bx-message-square-dots me-1" /> Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="dropdown float-end">
                  <Link
                    className="text-muted dropdown-toggle font-size-16"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                  />
                  <i className="bx bx-dots-horizontal-rounded" />

                  <div className="dropdown-menu dropdown-menu-end">
                    <Link className="dropdown-item">Edit</Link>

                    <Link className="dropdown-item">Action</Link>

                    <Link className="dropdown-item">Remove</Link>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar4.png"
                      alt=""
                      className="avatar-md rounded-circle img-thumbnail"
                    />
                  </div>
                  <div className="flex-1 ms-3">
                    <h5 className="font-size-16 mb-1">
                      <Link to="/" className="text-dark" />
                      Tommy Hayes
                    </h5>
                    <span className="badge badge-soft-warning mb-0">
                      Backend Developer
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-1">
                  <p className="text-muted mb-0">
                    <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-warning" />{" "}
                    065 2563 6587
                  </p>
                  <p className="text-muted mb-0 mt-2">
                    <i className="mdi mdi-email font-size-15 align-middle pe-2 text-warning" />{" "}
                    TommyHayes@spy.com
                  </p>
                  <p className="text-muted mb-0 mt-2">
                    <i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-warning" />{" "}
                    5 Boar Lane SELLING 2LG
                  </p>
                </div>
                <div className="d-flex gap-2 pt-4">
                  <button
                    type="button"
                    className="btn btn-soft-primary btn-sm w-50"
                  >
                    <i className="bx bx-user me-1" /> Profile
                  </button>
                  <button type="button" className="btn btn-danger btn-sm w-50">
                    <i className="bx bx-message-square-dots me-1" /> Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="dropdown float-end">
                  <Link
                    className="text-muted dropdown-toggle font-size-16"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                  />
                  <i className="bx bx-dots-horizontal-rounded" />

                  <div className="dropdown-menu dropdown-menu-end">
                    <Link className="dropdown-item">Edit</Link>

                    <Link className="dropdown-item">Action</Link>

                    <Link className="dropdown-item">Remove</Link>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar5.png"
                      alt=""
                      className="avatar-md rounded-circle img-thumbnail"
                    />
                  </div>
                  <div className="flex-1 ms-3">
                    <h5 className="font-size-16 mb-1">
                      <Link to="/" className="text-dark" />
                      Diana Owens
                    </h5>
                    <span className="badge badge-soft-danger mb-0">
                      UI/UX Designer
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-1">
                  <p className="text-muted mb-0">
                    <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-warning" />{" "}
                    087 6321 3235
                  </p>
                  <p className="text-muted mb-0 mt-2">
                    <i className="mdi mdi-email font-size-15 align-middle pe-2 text-warning" />{" "}
                    DianaOwens@spy.com
                  </p>
                  <p className="text-muted mb-0 mt-2">
                    <i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-warning" />{" "}
                    52 Ilchester MYBSTER 9WX
                  </p>
                </div>
                <div className="d-flex gap-2 pt-4">
                  <button
                    type="button"
                    className="btn btn-soft-primary btn-sm w-50"
                  >
                    <i className="bx bx-user me-1" /> Profile
                  </button>
                  <button type="button" className="btn btn-danger btn-sm w-50">
                    <i className="bx bx-message-square-dots me-1" /> Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="dropdown float-end">
                  <Link
                    className="text-muted dropdown-toggle font-size-16"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                  />
                  <i className="bx bx-dots-horizontal-rounded" />

                  <div className="dropdown-menu dropdown-menu-end">
                    <Link className="dropdown-item">Edit</Link>

                    <Link className="dropdown-item">Action</Link>

                    <Link className="dropdown-item">Remove</Link>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                      alt=""
                      className="avatar-md rounded-circle img-thumbnail"
                    />
                  </div>
                  <div className="flex-1 ms-3">
                    <h5 className="font-size-16 mb-1">
                      <Link to="/" className="text-dark" />
                      Paul Sanchez
                    </h5>
                    <span className="badge badge-soft-success mb-0">
                      Full Stack Developer
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-1">
                  <p className="text-muted mb-0">
                    <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-warning" />{" "}
                    021 0125 5689
                  </p>
                  <p className="text-muted mb-0 mt-2">
                    <i className="mdi mdi-email font-size-15 align-middle pe-2 text-warning" />{" "}
                    DianaOwens@spy.com
                  </p>
                  <p className="text-muted mb-0 mt-2">
                    <i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-warning" />{" "}
                    80 South Street MONKW 7BR
                  </p>
                </div>
                <div className="d-flex gap-2 pt-4">
                  <button
                    type="button"
                    className="btn btn-soft-primary btn-sm w-50"
                  >
                    <i className="bx bx-user me-1" /> Profile
                  </button>
                  <button type="button" className="btn btn-danger btn-sm w-50">
                    <i className="bx bx-message-square-dots me-1" /> Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0 align-items-center pb-4">
          <div className="col-sm-6">
            <div>
              <p className="mb-sm-0">Showing 1 to 10 of 57 entries</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="float-sm-end">
              <ul className="pagination mb-sm-0">
                <li className="page-item disabled">
                  <Link to="/" className="page-link">
                    <i className="mdi mdi-chevron-left" />
                  </Link>
                </li>
                <li className="page-item active">
                  <Link to="/" className="page-link">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link to="/" className="page-link">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link to="/" className="page-link">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link to="/" className="page-link">
                    4
                  </Link>
                </li>
                <li className="page-item">
                  <Link to="/" className="page-link">
                    5
                  </Link>
                </li>
                <li className="page-item">
                  <Link to="/" className="page-link">
                    <i className="mdi mdi-chevron-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

<ContactModal/>

   
    </>
  );
};

export default UsersList;
