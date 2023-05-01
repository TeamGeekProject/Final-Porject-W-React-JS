import React from "react";
import { Link } from "react-router-dom";

import "../../styles/card.css";

export const Card = () => {
  // const { index, item, actions } = props;

  return (
    //     <div className="card" style={{backgroundColor:"lightgray"}}>
    // <div className="container-flex">
    //         <h3>SELENA GOMEZ</h3>

    //         <div className="row justify-content-center" style={{backgroundColor:"ButtonShadow"}} >
    //           <h5 className="Song" >Selena Gomez - Calm Down</h5>
    //           <div className="widget">
    //           <lu>
    //           <a
    //             className="cover"
    //             role="button"
    //             href="https://www.youtube.com/watch?v=eJO5HU_7_1w"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <i className="fa-brands fa-youtube text-danger" />
    //           </a>
    //           <p>YouTube</p>

    //           <a
    //             className="cover"
    //             style={{color:"orange"}}
    //             role="button"
    //             href="https://soundcloud.com/selena-gomez-official/wolves?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <i className="fa-brands fa-soundcloud " />
    //           </a>
    //           <p>SoundCloud</p>
    //           <a
    //             className="cover"
    //             role="button"
    //             href="https://soundcloud.com/selena-gomez-official/wolves?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //           </a>
    //           <a
    //           className="cover"
    //           style={{color:"black"}}
    //             role="button"
    //             href="https://music.apple.com/us/album/calm-down-single/1640501237"
    //             target="_blank"
    //             rel="noreferrer">
    //             <p><i className="fa-brands fa-apple"/> Music </p></a>
    //             </lu>
    //             </div>

    //           <div className="col-3 d-flex  justify-content-center ">
    //             <img
    //               src="https://i1.sndcdn.com/artworks-joTcOLeuIZh1wF96-GTkmzg-t500x500.jpg"
    //               className="  rounded h-75 my-auto "
    //               alt="agenda picture"
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       <div>
    //         <div className="row justify-content-center" style={{backgroundColor:"ButtonShadow"}}>
    //           <h5 className="Song">Selena Gomez - Lose You To Love Me.</h5>
    //           <div className="widget">
    //           <ul>
    //           <a
    //             className="cover "
    //             role="button"
    //             href="https://www.youtube.com/watch?v=zlJDTxahav0"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <i className="fa-brands fa-youtube text-danger" />
    //           </a>
    //           <p>YouTube</p>

    //           <a
    //             className="cover"
    //             style={{color:"orange"}}
    //             role="button"
    //             href="https://soundcloud.com/selena-gomez-official/lose-you-to-love-me-demo?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <i className="fa-brands fa-soundcloud " />
    //           </a>
    //           <p>SoundCloud</p>

    //           <a
    //           className="cover"
    //           style={{color:"black"}}
    //             role="button"
    //             href="https://music.apple.com/us/album/lose-you-to-love-me-single/1484383006 "
    //             target="_blank"
    //             rel="noreferrer">
    //             <p><i className="fa-brands fa-apple"/> Music </p></a>
    //             </ul>
    //             </div>

    //           <div className="col-3 d-flex  justify-content-center ">
    //             <img
    //               src="https://i1.sndcdn.com/artworks-000621941680-nst7y8-t500x500.jpg "
    //               className="  rounded h-75 my-auto "
    //               alt="agenda picture"
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       <div className="container-flex">
    //         <h3>EMINEM</h3>

    //         <div className="row justify-content-center" style={{backgroundColor:"ButtonShadow"}}>
    //           <h5 className="Song">Eminem - The Real Slim Shady</h5>
    //           <div className="widget">
    //           <ul>
    //           <a
    //             className="cover "
    //             role="button"
    //             href="https://www.youtube.com/watch?v=eJO5HU_7_1w"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <i className="fa-brands fa-youtube text-danger" />
    //           </a>
    //           <p>YouTube</p>

    //           <a
    //             className="cover"
    //             style={{color:"orange"}}
    //             role="button"
    //             href="https://soundcloud.com/eminemofficial/not-afraid-2?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <i className="fa-brands fa-soundcloud " />
    //           </a>
    //           <p>SoundCloud</p>

    //           <a
    //           className="cover"
    //           style={{color:"black"}}
    //             role="button"
    //             href=" https://music.apple.com/us/album/the-slim-shady-lp-expanded-edition/1453196979"
    //             target="_blank"
    //             rel="noreferrer">
    //             <p><i className="fa-brands fa-apple"/> Music </p></a>
    //             </ul>
    //             </div>

    //           <div className="col-3 d-flex  justify-content-center ">
    //             <img
    //               src="https://images.squarespace-cdn.com/content/v1/5ee2ad9278ac8244e278c82c/1639713886965-PIGE0M4XSZZFB0TZ0LLK/The_Slim_Shining_LP_Cover.jpg?format=500w"
    //               className="  rounded h-75 my-auto "
    //               alt="agenda picture"
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       <div>
    //         <div className="row justify-content-center" style={{backgroundColor:"ButtonShadow"}}>
    //           <h5 className="Song">Eminem - Not Afraid.</h5>
    //           <div className="widget">
    //           <ul>
    //           <a
    //             className="cover "
    //             role="button"
    //             href="https://www.youtube.com/watch?v=j5-yKhDd64s&list=PLRgSHCeagEV4KTedHndOxXLXqZr4okOCA&index=2"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <i className="fa-brands fa-youtube text-danger" />
    //           </a>
    //           <p>YouTube</p>

    //           <a
    //             className="cover"
    //             style={{color:"orange"}}
    //             role="button"
    //             href="https://soundcloud.com/eminemofficial/not-afraid-2?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <i className="fa-brands fa-soundcloud " />
    //           </a>
    //           <p>SoundCloud</p>

    //           <a
    //           className="cover"
    //           style={{color:"black"}}
    //             role="button"
    //             href="https://music.apple.com/us/album/not-afraid/1446625834?i=1446626443 "
    //             target="_blank"
    //             rel="noreferrer">
    //             <p><i className="fa-brands fa-apple"/> Music </p></a>
    //             </ul>
    //             </div>

    //           <div className="col-3 d-flex  justify-content-center ">
    //             <img
    //               src="https://m.media-amazon.com/images/M/MV5BMmVjNTViYmMtY2MxZS00NzJkLTlkNmUtNDc1ODAzMzExNjI1XkEyXkFqcGdeQXVyNzU3Nzk4MDQ@._V1_.jpg"
    //               className="  rounded h-75 my-auto "
    //               alt="agenda picture"
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       <div>
    //         <h3>THE WEEKND</h3>

    //         <div className="row justify-content-center" style={{backgroundColor:"ButtonShadow"}}>
    //           <h5 className="Song">The Weeknd - Save Your Tears</h5>
    //           <div className="widget">
    //           <ul>
    //           <a
    //             className="cover "
    //             role="button"
    //             href="https://www.youtube.com/watch?v=XXYlFuWEuKI"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <i className="fa-brands fa-youtube text-danger" />
    //           </a>
    //           <p>YouTube</p>

    //           <a
    //             className="cover"
    //             style={{color:"orange"}}
    //             role="button"
    //             href="https://soundcloud.com/theweeknd/the-weeknd-ariana-grande-save"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <i className="fa-brands fa-soundcloud " />
    //           </a>
    //           <p>SoundCloud</p>

    //           <a
    //           className="cover"
    //           style={{color:"black"}}
    //             role="button"
    //             href="https://music.apple.com/us/album/save-your-tears/1499378108?i=1499378613 "
    //             target="_blank"
    //             rel="noreferrer">
    //             <p><i className="fa-brands fa-apple"/> Music </p></a>
    //             </ul>
    //             </div>

    //           <div className="col-3 d-flex  justify-content-center ">
    //             <img
    //               src="https://i0.wp.com/www.alexurbanpop.com/wp-content/uploads/2022/01/The-Weeknd-Save-Your-Tears.jpg?resize=500%2C500&ssl=1"
    //               className="  rounded h-75 my-auto "
    //               alt="agenda picture"
    //             />
    //           </div>
    //         </div>

    //         <div className="row justify-content-center" style={{backgroundColor:"ButtonShadow"}}>
    //           <h5 className="Song">The Weeknd - I Feel It Coming ft. Daft Punk</h5>
    //           <div className="widget">
    //           <ul>
    //           <a
    //             className="cover "
    //             role="button"
    //             href="https://www.youtube.com/watch?v=qFLhGq0060w"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <i className="fa-brands fa-youtube text-danger" />
    //           </a>
    //           <p>YouTube</p>

    //           <a
    //             className="cover"
    //             style={{color:"orange"}}
    //             role="button"
    //             href="https://soundcloud.com/theweeknd/i-feel-it-coming-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <i className="fa-brands fa-soundcloud " />
    //           </a>
    //           <p>SoundCloud</p>

    //           <a
    //           className="cover" style={{color:"black"}}
    //             role="button"
    //             href=" "
    //             target="_blank"
    //             rel="noreferrer">
    //             <p><i className="fa-brands fa-apple" /> Music </p></a>
    //             </ul>
    //             </div>

    //           <div className="col-3 d-flex  justify-content-center ">
    //             <img
    //               src="https://i1.sndcdn.com/artworks-000533992041-dmicel-t500x500.jpg"
    //               className="  rounded h-75 my-auto "
    //               alt="agenda picture"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    <div class="col">
      <div class="card shadow-sm">
        <img
          src="https://i1.sndcdn.com/artworks-joTcOLeuIZh1wF96-GTkmzg-t500x500.jpg"
          class="card-img-top"
          alt="..."
        />

        <div class="card-body">
          <div class="row">
            <div className="col-8 d-flex justify-content-start align-items-center">
              <i class="fa fa-music " aria-hidden="true"></i>
              <p class="card-text mx-2">Selena Gomez - Calm Down</p>
            </div>
            <div className="col-4  d-flex justify-content-end align-items-center">
              <i class="fa fa-pencil mx-2"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
            </div>
          </div>

          <div class="d-flex justify-content-evenly align-items-center mt-2">
            <i className="fa-brands fa-youtube text-danger" />
            <i className="fa-brands fa-soundcloud " />
            <i className="fa-brands fa-apple" />
          </div>
        </div>
      </div>
    </div>
  );
};
