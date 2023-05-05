import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export const Home = () => {
  return (
    <div className="container col-9">
    <br/>
    <div className="d-block gap-2">
    <Link to={"/ipod"}><Button variant="dark" size="md">
    <p>St<i className="fa fa-star text-danger"/>rs Free Music IPOD </p>
      </Button></Link>
      {/* <Link to={"/collection"}><Button variant="secondary" size="lg">
        Library
      </Button></Link> */}
    </div>
    <br/>
      <Carousel>
        <Carousel.Item interval={1000}>
          <Image
            className="d-block w-100" 
            style={{height:"600px" , weith:"300px"}}
            src="https://i.ytimg.com/vi/6ZPzqZoRrtk/maxresdefault.jpg"
            alt="First slide"
            rounded
          />
          <Carousel.Caption>
            <h1>Bruno Mars</h1>
            <Link to={"/collection"} style={{color:"white"}}>
            <h3>When I was Your Man</h3>
            </Link>
            <p>
              "When I Was Your Man" was released on iTunes as a promotional
              single, leading the song to debut at number 69 on the Billboard
              Hot 100 chart."
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Image
            className="d-block w-100"
            style={{height:"600px", weith:"300px"}}
            src="https://media1.popsugar-assets.com/files/thumbor/dnq1ey9NFN4HkZ-SdTMUczRXCuY/126x0:2880x1446/fit-in/1200x630/filters:format_auto-!!-:strip_icc-!!-/2022/09/07/793/n/1922283/06d8ca866318dce88a41a7.87742136_.png"
            alt="Second slide"
            rounded
          />
          <Carousel.Caption>
            <h1>Selena Gomez</h1>
            <Link to={"/collection"} style={{color:"white"}}>
            <h3>Calm Down</h3>
            </Link>
            <p>
              "The song charted across Europe, reaching number one on the
              Belgian Ultratop 50, Dutch Top 40 and Dutch Single Top 100."
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            style={{height:"600px" , weith:"300px"}}
            src="https://www.instyle.com/thmb/QpjZRwXCoZc5_agQOIhjU7-yQBg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2023-01-13at12.30.54PM_result-db4c577f726745c992251507bafbb825.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1>Miley Cyrus</h1>
            <Link to={"/collection"} style={{color:"white"}}>
            <h3>Flowers</h3>
            </Link>
            <p>
              "Flowers broke the record as the most streamed song in a week on
              Spotify during both its first and second week. It debuted atop the
              Billboard Global 200 chart and reached number one in 40 countries,
              including the United States and the United Kingdom."
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
