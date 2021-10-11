import React from "react";
import CardProject from "../CurrentProject/CardProject";
import NavbarFinal from "../Home/Navbar/Navbar";

function PreviousProject() {
  return (
    <div>
      <NavbarFinal />
      <div className="p-5">
        <div className="d-flex justify-content-start flex-wrap justify-content-md-start justify-content-sm-center ">
          <CardProject
            noRating={true}
            name="Simran Ahuja"
            value={4}
            isrc="proj-img/09.jpg"
            clientposts="Production Head"
            production="Spectacle"
            forClient="What we did for this client?"
            review="We predicted our model accuracy in  700 distinct products dataset for checking and finding faults in 100 of them like broken sticks and defective lenses."
            clientReview="Impressed by the easy going work. We gave 700 products for checking and got 99% accurate results. They have detected faults in broken sticks, at the edges and even minute details also. Will recommend to further and take the help in future also."
            timePeriod="8-10 Weeks"
            plan="Pro"
          />
          <CardProject
            noRating={true}
            name="Dipesh Arora"
            value={3}
            isrc="proj-img/01.webp"
            clientposts="CEO"
            production="Bicycles"
            forClient="What we did for this client?"
            review="Around 500 product's images dataset were given and we have verified 450 of them. We have checked it's seat, handles or proper inflated tyres."
            clientReview="Awesome working skills. Excellent techniques used. It has made work easier for many employees. It can easily detect defects whether it is in handles, tyres or seats. Surely going to use this again"
            timePeriod="9 Weeks"
            plan="Enterprise"
          />
          <CardProject
            noRating={true}
            name="Priyanshu Singh"
            value={4}
            isrc="proj-img/07.jfif"
            clientposts="Production Head"
            production="Wrist Watches"
            forClient="What we did for this client?"
            review="We have to check the defaults in 340 wrist watches. In which we have successfully checked 300. We have gone through its straps, numbers written inside, their hands and colour of dial."
            clientReview="Happy with the result I got when used this technology. Less time and less costly. Focussed more on straps, shape of watch, its number and even more. Will not hesitate to recommend to anyone else or to use again in future"
            timePeriod="5 Weeks"
            plan="Pro"
          />
          <CardProject
            noRating={true}
            name="Naveen Bharadwaj"
            value={5}
            isrc="proj-img/06.png"
            clientposts="General Manager"
            production="Security Mettalic Door"
            forClient="What we did for this client?"
            review="We were given 250 products datasets to check wheather the product is defective or not and were asked to show faults in particular section of that product"
            clientReview="These guys 100% reliable, definetely looking forward to work with them again."
            timePeriod="6 Weeks"
            plan="Enterprise"
          />
          <CardProject
            noRating={true}
            name="Jatin Kapoor"
            value={5}
            isrc="proj-img/04.webp"
            clientposts="HR"
            production="Air Condition"
            forClient="What we did for this client?"
            clientReview="Easy going work from their side, delivered what was asked on time, also good team to deal with."
            review="We were given 200 images dataset and were asked to find defaults in their designs."
            timePeriod="8 Weeks"
            plan="Enterprise"
          />
        </div>
      </div>
    </div>
  );
}

export default PreviousProject;
