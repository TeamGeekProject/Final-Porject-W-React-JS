// import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useContext } from "react";

import "../../styles/todo.css";

export const ReachOut = () => {
  const { store, actions } = useContext(Context);
  const [sent, setSent] = useState(false); // this is the state that will be used to show the success message
  const [input, setInput] = useState({
    full_name: "",
    email: "",
    message: "",
    phone: "",
  });

  console.log(store);

  return (
    <div className="container">
      <h1 className="Title text-center">Reach out</h1>

      <div className="row justify-content-center my-2">
        <div className="col-md-6 ">
          <h5 className="text-center">
            Send us a message. We have received {store.numberOfMessages} until
            now.
          </h5>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 ">
          <form className="row g-3 ">
            <div className="col-6">
              <label className="form-label">Full Name</label>
              <input
                onChange={(e) =>
                  setInput({ ...input, full_name: e.target.value })
                }
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Full Name"
              />
            </div>
            <div className="col-6">
              <label className="form-label">Phone</label>
              <input
                type="text"
                onChange={(e) => setInput({ ...input, phone: e.target.value })}
                className="form-control"
                id="inputAddress"
                placeholder="(999) 999-9999"
              />
            </div>
            <div className="col-12">
              <label className="form-label">Email</label>
              <input
                type="text"
                onChange={(e) => setInput({ ...input, email: e.target.value })}
                className="form-control"
                id="inputAddress"
                placeholder="Email"
              />
            </div>

            <div className="col-12 msg text-center justify-content-center">
              <label className="form-label">message</label>

              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={(e) =>
                  setInput({ ...input, message: e.target.value })
                }
              ></textarea>
            </div>

            {sent &&
              (store.formMessageSuccess != "" ? (
                <div className="alert alert-success" role="alert">
                  {store.formMessageSuccess}
                </div>
              ) : null)}
            {sent &&
              (store.formMessageError != "" ? (
                <div className="alert alert-danger" role="alert">
                  {store.formMessageError}
                </div>
              ) : null)}

            <div className="col-12">
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  actions.sendMessage(input);
                  setSent(true);
                }}
                className="btn btn-primary itemFilter"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <br />
      <div>
        <Link to="/home">
          <button className="btn btn-primary itemFilter">Back home</button>
        </Link>
      </div>
      <br />
    </div>
  );
};
