import React from "react";
import ChooseUs from "../ChooseUs/ChooseUs";
import EasyToUse from "../EasyTouse/EasyToUse";
import Team from "../Team/Team";
import Contact from "./Contact/Contact";
import Heading from "./Heading/Heading";
import Navbar from "./Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Heading />
      <div>
        <marquee
          className="text-white p-2 fw-bolder"
          style={{ backgroundColor: "#264142" }}
        >
          We are currently hiring right now, if you are interested send us your
          resume via email : bunkercart@gmail.com.
        </marquee>
      </div>
      <EasyToUse />
      <ChooseUs />
      <Team />
      <Contact />
    </div>
  );
}

export default Home;
