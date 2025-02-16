import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/Footer";
import Mission from "@/components/Mission";
import Information from "@/components/Information";
import History from "@/components/History";
import Slide from "@/components/Slide";

const Home = () => {
  return (
    <>
      <Slide />
      <History />
      <Information />
      <Mission />
      <Footer />
    </>
  );
};

export default Home;
