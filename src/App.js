import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Achievement from "./Pages/Achievement";
import Publication from "./Pages/Publication";
import Gallery from "./Pages/Gallery";
import News from "./Pages/News";
import NewsDetails from "./Pages/NewsDetails";
import Contact from "./Pages/Contact";
import Donation from "./Pages/Donation";

export default function App() {
  const [activeNav, setActiveNav] = useState(0);
  const [newsIndex, setNewsIndex] = useState();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              activeNav={activeNav}
              setActiveNav={setActiveNav}
              setNewsIndex={setNewsIndex}
            />
          }
        />
        <Route
          path="/about"
          element={<About activeNav={activeNav} setActiveNav={setActiveNav} />}
        />
        <Route
          path="/achievement"
          element={
            <Achievement activeNav={activeNav} setActiveNav={setActiveNav} />
          }
        />
        <Route
          path="/publication"
          element={
            <Publication activeNav={activeNav} setActiveNav={setActiveNav} />
          }
        />
        <Route
          path="/gallery"
          element={
            <Gallery activeNav={activeNav} setActiveNav={setActiveNav} />
          }
        />
        <Route
          path="/news"
          element={
            <News
              activeNav={activeNav}
              setActiveNav={setActiveNav}
              newsIndex={newsIndex}
              setNewsIndex={setNewsIndex}
            />
          }
        />
        <Route
          path="/news-details"
          element={
            <NewsDetails
              activeNav={activeNav}
              setActiveNav={setActiveNav}
              newsIndex={newsIndex}
              setNewsIndex={setNewsIndex}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              activeNav={activeNav}
              setActiveNav={setActiveNav}
              newsIndex={newsIndex}
              setNewsIndex={setNewsIndex}
            />
          }
        />
        <Route
          path="/donation"
          element={
            <Donation
              activeNav={activeNav}
              setActiveNav={setActiveNav}
              newsIndex={newsIndex}
              setNewsIndex={setNewsIndex}
            />
          }
        />
      </Routes>
    </>
  );
}
