import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { useState } from "react";

import "../../styles/card.css";

export const Card = (props) => {
  const { index, item, actions } = props;
  const [rating, setRating] = useState(item.rating);

  function changeRating(newRating) {
    setRating(newRating);
  }

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={item.urlImage} className="card-img-top" alt="..." />
        <div className="card-img-overlay ">
          <div className="row justify-content-center">
            <div className="col-12 d-flex justify-content-end align-items-center">
              <button type="button" className="btn btn-sm btn-secondary mx-2">
                <Link to={"/edit-song/" + index + "/" + item.id}>
                  <i className="fa fa-pencil "></i>
                </Link>
              </button>
              <button type="button" className="btn btn-sm btn-danger">
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-8 d-flex justify-content-start align-items-center">
              <i className="fa fa-music " aria-hidden="true"></i>
              <p className="card-text mx-2">
                {item.artist} - {item.title}
              </p>
            </div>
            <div className="col-4  d-flex justify-content-end align-items-center">
              <StarRatings
                rating={rating}
                starRatedColor="#FFD700"
                changeRating={changeRating}
                starDimension="15px"
                starSpacing="1px"
                numberOfStars={5}
                name="rating"
              />
            </div>
          </div>

          <div className="d-flex justify-content-evenly align-items-center mt-2">
            <a
              href={item.urlYoutube}
              className="list-group-item "
              target="_blank"
            >
              <i className="fa-brands fa-youtube  youtube-icon" />
            </a>
            <a
              href={item.urlSpotify}
              className="list-group-item "
              target="_blank"
            >
              <i className="fa-brands fa-spotify spotify-icon" />
            </a>

            <a
              href={item.urlAppleMusic}
              className="list-group-item "
              target="_blank"
            >
              <i className="fa-brands fa-apple " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
