import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <Link className="navbar-brand mx-3" to="/home">
      <i className="fa fa-star text-danger" />
       <span className="navbar-brand mb-0  ">Stars Music</span>
      </Link>
      <div className="ml-auto">
        <Link to="/contact" >
          <button className="btn btn-primary mx-3 itemFilter">
          Soundtracks
          </button>
        </Link>
      </div>
    </nav>
  );
};
