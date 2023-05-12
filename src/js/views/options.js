import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/todo.css";
import { Who } from "./who";
// import { Auth } from "../component/auth";

export const Options = (props) => {
  const { store, actions } = useContext(Context);

  console.log(store);

  const params = useParams();
  return (
    <div className="jumbotron container rounded border mb-4" style={{width:"800px"}}>
    <br/>
      <h1>Stars Music Entertainment</h1>
      <br />
      <h1>Bio/ Our Story</h1>
      <br/>
      <p>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?"
      </p>
      <br/>
      {/* <Auth /> */}
      <div>
        <Link to="/collection">
          <span
            className="btn btn-secondary btn-md itemFilter"
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
            className="btn btn-secondary btn-md itemFilter"
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
            className="btn btn-secondary btn-md itemFilter"
            href="#"
            role="button "
          >
            See who made this
          </span>
        </Link>
      </div>
      <br/>
    </div>
  );
};

Who.propTypes = {
  match: PropTypes.object,
};
