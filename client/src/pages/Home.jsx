import React from "react";
import Navbar from "../components/Navbar";
import BioCard from "../components/BioCard";
import Profiles from "../components/Profiles";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <main>
        <Navbar />
        <section className="firstthird">
          <BioCard />
          <Profiles /> <Contact />
        </section>
        <section className="secondthird">
          <Skills />
          <Projects />
        </section>
      </main>
    </>
  );
};

export default Home;
