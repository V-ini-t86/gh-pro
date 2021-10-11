import React from "react";
// import { div } from "react-bootstrap";
import NavbarFinal from "../Home/Navbar/Navbar";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import CardProject from "./CardProject";
import "./CardProject.css";
function CurrentProject() {
  return (
    <div>
      <NavbarFinal />
      <div className="p-5">
        <div className="card-pro d-flex flex-lg-nowrap flex-md-wrap justify-content-sm-center flex-sm-wrap">
          <CardProject
            noRating={false}
            name="Gurkirat Singh"
            isrc="proj-img/03.png"
            production="Steel bottle"
            clientposts="General Manager"
            review="We have to find deffects in caps of the bottles and to check bottle's uniformity"
            dataSetProvided="Dataset provided : "
            dp="We recieved data of 4000 images"
            forClient="What are we doing for this client?"
            timePeriod="8 Weeks"
            plan="Pro"
          />

          <CardProject
            noRating={false}
            name="Ritik Monga"
            isrc="proj-img/05.png"
            production="Switches"
            clientposts="Head Of Production"
            review="We have to check its shape, size and uniformity along with its wire connections"
            dataSetProvided="Dataset provided : "
            dp="We recieved data of 3000 images"
            forClient="What are we doing for this client?"
            timePeriod="6 Weeks"
            plan="Enterprise"
          />

          <CardProject
            noRating={false}
            name="Nikita Sharma"
            isrc="proj-img/08.jpg"
            production="Surgical equipments"
            clientposts="Head Of Production"
            review="We have to final check all the tools  for clinical purposes"
            dataSetProvided="Dataset provided : "
            dp="We recieved data of 3500 images"
            forClient="What are we doing for this client?"
            timePeriod="9 Weeks"
            plan="Enterprise"
          />

          {/* <CardProject
            noRating={false}
            name=""
            isrc="proj-img/plus.png"
            plus={true}
          /> */}

          <Card
            className="cardShadow card-hover mt-4 mx-2 border border-success d-flex justify-content-center align-items-center"
            style={{ width: "25rem" }}
          >
            <Link to="/start" className="text-dark text-decoration-none">
              <div className="d-flex flex-column justify-content-center align-items-center ">
                <Card.Img
                  className="circle "
                  variant="top"
                  src="proj-img/plus.png"
                />
                <Card.Body>
                  <Card.Title className="fw-bolder fs-3">
                    You Can Be Next!
                  </Card.Title>
                </Card.Body>
              </div>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CurrentProject;
