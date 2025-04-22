import React from "react";
import Header from "../../components/Header";
import Separator from "../../components/Separator";
import AboutMe from "../../components/AboutMe";
import Footer from "../../components/Footer";
import Info from "../../components/Info";
import Blogs from "../../components/Blogs";
import Highlights from "../../components/Highlights";
import Projects from "../../components/Projects";

function Index() {
  return (
    <div className="container md:w-1/2 mx-auto py-20 px-4">
      <Header />
      <Separator label="Highlights" />
      <Highlights />
      <Separator label="About Me" />
      <AboutMe />
      <Separator label="Info" />
      <Info />
      <Separator label="Latest Blogs" />
      <Blogs />
      <Separator label="Products" />
      <Projects />
      <Footer />
    </div>
  );
}

export default Index;
