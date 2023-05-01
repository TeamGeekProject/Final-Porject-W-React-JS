// import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useContext } from "react";
import StarRatings from "react-star-ratings";

import "../../styles/todo.css";

export const AddSong = () => {
  const { store, actions } = useContext(Context);
  const [sent, setSent] = useState(false); // this is the state that will be used to show the success message
  const [input, setInput] = useState({
    urlImage: "",
    title: "",
    artist: "",
    rating: "",
    urlYoutube: "",
    urlAppleMusic: "",
    urlSpotify: "",
  });

  const [rating, setRating] = useState(1);

  function changeRating(newRating) {
    setRating(newRating);
  }

  return (
    <div className="container">
      <h1 className="Title text-center">Add Song</h1>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="row g-3 d-flex justify-content-center">
            <div className="col-6">
              <label className="form-label h5">Title</label>
              <input
                type="text"
                onChange={(e) => setInput({ ...input, email: e.target.value })}
                className="form-control"
                id="inputAddress"
                placeholder="Title"
              />
            </div>
            <div className="col-6">
              <label className="form-label h5">Artist</label>
              <input
                type="text"
                onChange={(e) => setInput({ ...input, phone: e.target.value })}
                className="form-control"
                id="inputAddress"
                placeholder="Artist"
              />
            </div>
            <div className="col-9">
              <label className="form-label h5 ">Image Url</label>
              <input
                onChange={(e) =>
                  setInput({ ...input, full_name: e.target.value })
                }
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Image Url"
              />
            </div>
            <div className="col-9 msg h5">
              <label className="form-label">Youtube Url</label>
              <input
                type="text"
                onChange={(e) =>
                  setInput({ ...input, address: e.target.value })
                }
                className="form-control"
                id="inputAddress"
                placeholder="Youtube Url"
              />
            </div>
            <div className="col-9 msg ">
              <label className="form-label h5">Spotify Url</label>
              <input
                type="text"
                onChange={(e) =>
                  setInput({ ...input, address: e.target.value })
                }
                className="form-control"
                id="inputAddress"
                placeholder="Spotify Url"
              />
            </div>
            <div className="col-9 msg">
              <label className="form-label h5">Apple Music Url</label>
              <input
                type="text"
                onChange={(e) =>
                  setInput({ ...input, address: e.target.value })
                }
                className="form-control"
                id="inputAddress"
                placeholder="Apple Music Url"
              />
            </div>

            <StarRatings
              rating={rating}
              starRatedColor="#FFD700"
              changeRating={changeRating}
              starDimension="40px"
              starSpacing="10px"
              numberOfStars={5}
              name="rating"
            />

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
                  actions.createContact(false);
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
