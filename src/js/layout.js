import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Who } from "./views/who";
import { Home } from "./views/home";
import { Collection } from "./views/collection";
import { AddSong } from "./views/addSong";
import { EditSong } from "./views/editSong";
import { ReachOut } from "./views/reachOut";
// import { Ipod } from "./views/ipod";

import injectContext from "./store/appContext";
import { Header } from "./component/header";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/reach-out" element={<ReachOut />} />
            <Route path="/who" element={<Who />} />
            <Route path="/add-song" element={<AddSong />} />
            <Route path="/edit-song/:index/:songID" element={<EditSong />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Who />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/ipod" element={<Ipod />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
