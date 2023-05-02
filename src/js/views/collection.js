import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { faXmark } from "@fortawesome/react-fontawesome";
import "../../styles/todo.css";
// import { faXmarksLines } from "@fortawesome/free-solid-svg-icons";

import { Card } from "../component/card";

export const Collection = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <h1 className="mb-3">
        St
        <i className="fa fa-star text-danger" />
        rs Free Music
      </h1>
      <h6>Get unlimited access to our music videos & more</h6>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {store.collection.map((item, index) => {
              return (
                <Card key={index} index={index} item={item} actions={actions} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
