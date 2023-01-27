import React from "react";
import Hero from "../components/Hero";
import ProjectsGallary from "../components/ProjectsGallary";
import ServiceSection from "../components/ServiceSection";
import WhoWeAreSection from "../components/WhoWeAreSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProjectsGallary />
      <ServiceSection/>
      <WhoWeAreSection />
    </>
  );
};

export default HomePage;
