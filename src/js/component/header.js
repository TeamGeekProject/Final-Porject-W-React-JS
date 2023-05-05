import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header" style={{backgroundColor:"lightgray"}}>
    <Link to="/options" style={{color:"black"}}>
        <p>St<i className="fa fa-star text-danger"/>rs Music Entertainment</p>
        </Link>
    </div>
  )
};

