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
    <div class="col">
      <div class="card shadow-sm">
        <img src={item.urlImage} class="card-img-top" alt="..." />
        <div class="card-img-overlay ">
          <div class="row justify-content-center">
            <div className="col-12 d-flex justify-content-end align-items-center">
              <button type="button" class="btn btn-sm btn-secondary mx-2">
                <i class="fa fa-pencil "></i>
              </button>
              <button type="button" class="btn btn-sm btn-danger">
                <i class="fa fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="card-body">
          <div class="row">
            <div className="col-8 d-flex justify-content-start align-items-center">
              <i class="fa fa-music " aria-hidden="true"></i>
              <p class="card-text mx-2">
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

          <div class="d-flex justify-content-evenly align-items-center mt-2">
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
