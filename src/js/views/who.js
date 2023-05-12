import React from "react";
import "../../styles/home.css";
import { CardImg } from "react-bootstrap";
//import { useContext, createContext, useState } from "react";
//import { Context } from "../store/appContext";

export const Who = () => (
  <div className="text-center mt-5">
    <div className="row justify-content-center">
      <div className="col-6 container rounded pt-3 pb-3 mb-5">
      
        <h3 className="text-secondary">This project has been created by:</h3>

        <div className="list-group">
        <a
            href="https://github.com/TeamGeekProject"
            className="list-group-item list-group-item-action itemFilter"
            aria-current="true"
          >
          <div className="image-wrapper pt-2">
          <img className="circle-image" src="https://avatars.githubusercontent.com/u/128603767?s=400&u=4889c435b45beda27f7e669e0864d152aa4f5965&v=4" style={{width: '50px', height: '50px'}}/>
          </div>
            TeamGeek
          </a>

          <a
            href="https://github.com/Balim1"
            className="list-group-item list-group-item-action itemFilter"
            aria-current="true"
          >
          <div className="image-wrapper pt-2">
          <img className=" circle-image" src="https://avatars.githubusercontent.com/u/103975556?v=4" style={{width: '50px', height: '50px'}}/>
          </div>
            Balim1
          </a>
          <a
            href="https://github.com/joaarg86"
            className="list-group-item list-group-item-action itemFilter"
          >
          <div className="image-wrapper pt-2">
          <img className="circle-image" src="https://avatars.githubusercontent.com/u/122300795?v=4" style={{width: '50px', height: '50px'}}/>
          </div>
            joaarg86
          </a>
          <a
            href="https://github.com/raulyfs11"
            className="list-group-item list-group-item-action itemFilter"
          >
          <div className="image-wrapper pt-2">
          <img className="circle-image" src="https://avatars.githubusercontent.com/u/91436792?v=4" style={{width: '50px', height: '50px'}}/>
          </div>
            raulyfs11
          </a>
          <a
            href="https://github.com/spacemc2"
            className="list-group-item list-group-item-action itemFilter"
            tabIndex="-1"
            aria-disabled="true"
          >
          <div className="image-wrapper pt-2">
          <img className="circle-image" src="https://avatars.githubusercontent.com/u/81215009?v=4" style={{width: '50px', height: '50px'}}/>
         </div>
            spacemc2
          </a>
        </div>
        <br/>
      </div>
    </div>
  </div>
);
