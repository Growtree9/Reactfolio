import React from "react";
import RepoStats from "./components/sections/RepoStats";
import Navbar from "./components/sections/Navbar";
import Linkbar from "./components/sections/Linkbar";
import Intro from "./components/sections/Intro";
import About from "./components/sections/About";
import Education from "./components/sections/Education";
import WorkExperience from "./components/sections/WorkExperience";
import SideProjects from "./components/sections/SideProjects";
import Footer from "./components/sections/Footer";
import Error404 from "./components/sections/Error404";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/style.css";
import content from "./content.json";

// Note that the section.enable_section has to equal true in
// order for that specific component to load in the app.js

function App() {
  const { intro_screen, about_me, academics, experience, projects } = content;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <RepoStats />
              <Linkbar />
              {intro_screen.section.enable_section && <Intro />}
              {about_me.section.enable_section && <About />}
              {academics.section.enable_section && <Education />}
              {experience.section.enable_section && <WorkExperience />}
              {projects.section.enable_section && <SideProjects />}
              <Footer />
            </div>
          }
        ></Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
