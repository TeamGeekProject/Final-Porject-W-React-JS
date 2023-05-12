import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "react-bootstrap";

export const Navbar = () => {
  return (
    // <nav className="navbar navbar-dark bg-dark mb-3">
    //   <Link className="navbar-brand mx-2" to="/home">
    //     <i className="fa fa-star text-danger" />
    //     <span className="navbar-brand mb-0  ">Stars Music</span>
    //   </Link>
    //   <div className="ml-auto">
    //     <Dropdown>
    //       <Dropdown.Toggle
    //         id="dropdown-basic"
    //         className=" btn btn-secondary mx-3 itemFilter"
    //       >
    //         Store
    //       </Dropdown.Toggle>

    //       <Dropdown.Menu>
    //         <Dropdown.Item href="#/action-1">
    //           <Link to="/add-song">
    //             <button className="btn btn-secondary mx-3 itemFilter">
    //               Add Soundtracks
    //             </button>
    //           </Link>
    //         </Dropdown.Item>
    //         <Dropdown.Item href="#/action-2">
    //           <Link to="/collection">
    //             <button className="btn btn-secondary mx-3 itemFilter">
    //               Collections
    //             </button>
    //           </Link>
    //         </Dropdown.Item>
    //         <Dropdown.Item href="#/action-3">
    //           <Link to="/reach-out">
    //             <button className="btn btn-secondary mx-3 itemFilter">
    //               Reach Out
    //             </button>
    //           </Link>
    //         </Dropdown.Item>
    //         <Dropdown.Item href="#/action-3">
    //           <Link to="/who">
    //             <button className="btn btn-secondary mx-3 itemFilter">
    //               Creators
    //             </button>
    //           </Link>
    //         </Dropdown.Item>
    //         <Dropdown.Item href="#/action-3">
    //           <Link to="/ipod">
    //             <button className="btn btn-secondary mx-3 itemFilter">
    //               Music
    //             </button>
    //           </Link>
    //         </Dropdown.Item>
    //       </Dropdown.Menu>
    //     </Dropdown>
    //   </div>
    // </nav>
    <nav
      className="navbar navbar-expand-lg  navbar navbar-dark bg-dark "
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand mx-2" to="/home">
          {/* <i className="fa fa-star text-danger" /> */}
          <span
            className="navbar-brand mb-0 text-light"
            styles={{ color: "white" }}
          >
            St
            <i className="fa fa-star text-danger" />
            rs Music
          </span>{" "}
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          // className={isHovered ? "hoveredButton" : ""}
        >
          <span
            className="navbar-toggler-icon "
            //make this elememt white
          ></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a
              className="nav-link active text-secondary navbar-link-style"
              aria-current="page"
              href="/add-song"
            >
              Add Soundtracks
            </a>
            <a
              className="nav-link text-secondary navbar-link-style"
              href="/collection"
            >
              Collection
            </a>{" "}
            <a
              className="nav-link text-secondary navbar-link-style"
              href="/ipod"
            >
              Ipod
            </a>
            <a
              className="nav-link text-secondary navbar-link-style"
              href="/reach-out"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
