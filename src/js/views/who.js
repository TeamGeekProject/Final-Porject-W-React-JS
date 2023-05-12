import React from "react";
import "../../styles/home.css";
import { CardImg } from "react-bootstrap";
//import { useContext, createContext, useState } from "react";
//import { Context } from "../store/appContext";

export const Who = () => (
  <div className="text-center mt-5">
    <div className="row justify-content-center">
      <div className="col-4 container rounded">
      
        <h3 className="text-secondary">This project has been created by:</h3>

        <div className="list-group ">
        <a
            href="https://github.com/organizations/TeamGeekProject/settings/profile"
            className="list-group-item list-group-item-action itemFilter"
            aria-current="true"
          >
          <img className="musicCover rounded" src="https://avatars.githubusercontent.com/u/128603767?s=400&u=4889c435b45beda27f7e669e0864d152aa4f5965&v=4" style={{width: '50px', height: '50px'}}/>
          <br/>
            TeamGeek
          </a>

          <a
            href="https://github.com/Balim1"
            className="list-group-item list-group-item-action itemFilter"
            aria-current="true"
          >
          <img className="musicCover rounded" src="https://avatars.githubusercontent.com/u/103975556?v=4" style={{width: '50px', height: '50px'}}/>
          <br/>
            Balim1
          </a>
          <a
            href="https://github.com/joaarg86"
            className="list-group-item list-group-item-action itemFilter"
          >
          <img className="musicCover rounded" src="https://avatars.githubusercontent.com/u/122300795?v=4" style={{width: '50px', height: '50px'}}/>
          <br/>
            joaarg86
          </a>
          <a
            href="https://github.com/raulyfs11"
            className="list-group-item list-group-item-action itemFilter"
          >
          <img className="musicCover rounded" src="https://avatars.githubusercontent.com/u/91436792?v=4" style={{width: '50px', height: '50px'}}/>
          <br/>
            raulyfs11
          </a>
          <a
            href="https://github.com/spacemc2"
            className="list-group-item list-group-item-action itemFilter"
            tabIndex="-1"
            aria-disabled="true"
          >
          <img className="rounded" src="https://avatars.githubusercontent.com/u/81215009?v=4" style={{width: '50px', height: '50px'}}/>
          <br/>
            spacemc2
          </a>
        </div>
        <br/>
      </div>
    </div>
  </div>
);
