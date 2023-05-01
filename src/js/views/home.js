import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/todo.css";

export const Home = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div className="jumbotron">
      <h1>Stars Music Entertainment</h1>
      <br />
      <div>
        <Link to="/collection">
          <span
            className="btn btn-primary btn-lg itemFilter"
            href="#"
            role="button"
          >
            Collection
          </span>
        </Link>
      </div>
      <br />
      <div>
        <Link to="/reach-out">
          <span
            className="btn btn-primary btn-lg itemFilter"
            href="#"
            role="button"
          >
            Contact Us!
          </span>
        </Link>
      </div>
      <br />
      <div>
        <Link to="/who">
          <span
            className="btn btn-primary btn-lg itemFilter"
            href="#"
            role="button "
          >
            See who made this
          </span>
        </Link>
      </div>
    </div>
  );
};

Home.propTypes = {
  match: PropTypes.object,
};
