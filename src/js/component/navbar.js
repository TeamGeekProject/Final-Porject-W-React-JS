import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <Link className="navbar-brand mx-2" to="/home">
        <i className="fa fa-star text-danger" />
        <span className="navbar-brand mb-0  ">Stars Music</span>
      </Link>
      <div className="ml-auto">
        <Link to="/add-song">
          <button className="btn btn-primary mx-3 itemFilter">
            Add Soundtracks
          </button>
        </Link>
      </div>
    </nav>
  );
};
