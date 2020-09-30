import React from "react";
import { Footer, InfoSection, Pricing } from "../components";
import {
  homeObjFour,
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../constants/infoSection";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} />
      <Footer />
    </>
  );
};

export default Home;
