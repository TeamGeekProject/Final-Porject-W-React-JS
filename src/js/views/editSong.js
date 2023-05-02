// import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useContext } from "react";
import StarRatings from "react-star-ratings";
import { useParams } from "react-router-dom";

import "../../styles/todo.css";

export const EditSong = () => {
  const { store, actions } = useContext(Context);
  const [sent, setSent] = useState(false); // this is the state that will be used to show the success message
  const { index, songID } = useParams();
  console.log(store);

  const [input, setInput] = useState({
    urlImage: store.collection[index]?.urlImage,
    title: store.collection[index]?.title,
    artist: store.collection[index]?.artist,
    rating: store.collection[index]?.rating,
    urlYoutube: store.collection[index]?.urlYoutube,
    urlAppleMusic: store.collection[index]?.urlAppleMusic,
    urlSpotify: store.collection[index]?.urlSpotify,
    createdAt: store.collection[index]?.createdAt,
  });

  function changeRating(newRating) {
    setInput({ ...input, rating: newRating });
  }

  return (
    <div className="container">
      <h1 className="Title text-center">Edit Song</h1>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="row g-3 d-flex justify-content-center">
            <div className="col-6">
              <label className="form-label h5">Title</label>
              <input
                type="text"
                onChange={(e) => setInput({ ...input, title: e.target.value })}
                className="form-control"
                id="inputAddress"
                placeholder="Title"
                value={input.title}
              />
            </div>
            <div className="col-6">
              <label className="form-label h5">Artist</label>
              <input
                type="text"
                onChange={(e) => setInput({ ...input, artist: e.target.value })}
                className="form-control"
                id="inputAddress"
                placeholder="Artist"
                value={input.artist}
              />
            </div>
            <div className="col-9">
              <label className="form-label h5 ">Image Url</label>
              <input
                onChange={(e) =>
                  setInput({ ...input, urlImage: e.target.value })
                }
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Image Url"
                value={input.urlImage}
              />
            </div>
            <div className="col-9 msg h5">
              <label className="form-label">Youtube Url</label>
              <input
                type="text"
                onChange={(e) =>
                  setInput({ ...input, urlYoutube: e.target.value })
                }
                className="form-control"
                id="inputAddress"
                placeholder="Youtube Url"
                value={input.urlYoutube}
              />
            </div>
            <div className="col-9 msg ">
              <label className="form-label h5">Spotify Url</label>
              <input
                type="text"
                onChange={(e) =>
                  setInput({ ...input, urlSpotify: e.target.value })
                }
                className="form-control"
                id="inputAddress"
                placeholder="Spotify Url"
                value={input.urlSpotify}
              />
            </div>
            <div className="col-9 msg">
              <label className="form-label h5">Apple Music Url</label>
              <input
                type="text"
                onChange={(e) =>
                  setInput({ ...input, urlAppleMusic: e.target.value })
                }
                className="form-control"
                id="inputAddress"
                placeholder="Apple Music Url"
                value={input.urlAppleMusic}
              />
            </div>

            <StarRatings
              rating={input.rating}
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
                  actions.updateSong(input, songID);
                  console.log(input);
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
