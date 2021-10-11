import React from "react";
import CardProject from "../CurrentProject/CardProject";
import NavbarFinal from "../Home/Navbar/Navbar";

function FutureProject() {
  return (
    <div>
      <NavbarFinal />
      <div className="p-5">
        <div className="d-flex justify-content-start flex-wrap justify-content-md-start justify-content-sm-center">
          <CardProject
            noRating={false}
            name="Arvind Oberoi"
            value={5}
            clientposts="Head of Production"
            isrc="proj-img/avatar.jfif"
            production="Joystick/Gaming Controller"
            forClient="What we will do for this client?"
            review="After having dataset from this client, we will predict faults in their final production."
            timePeriod="8 Weeks"
            plan="Enterprise"
          />
          <CardProject
            noRating={false}
            name="Shivalika Rawat"
            isrc="proj-img/avatar.jfif"
            value={5}
            clientposts="Head of Production"
            production="Circuit Adapters"
            forClient="What we will do for this client?"
            review="After having dataset from this client, we have to final check the production and recommend changes for defective portions."
            timePeriod="5-6 Weeks"
            plan="Enterprise"
          />
        </div>
      </div>
    </div>
  );
}

export default FutureProject;
