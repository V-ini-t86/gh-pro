import React from "react";
import { Card } from "react-bootstrap";
import Rating from "@material-ui/lab/Rating";
import classes from "./CurrentProject.module.css";
import "./CardProject.css";
function CardProject({
  noRating,
  name,
  value,
  isrc,
  production,
  className,
  clientposts,
  dataSetProvided,
  review,
  timePeriod,
  dp,
  forClient,
  plan,
  clientReview,
  plus,
}) {
  return (
    <Card
      className="cardShadow mt-4 mx-2 border border-success"
      style={{ width: "25rem" }}
    >
      {noRating && (
        <span class="w-100 badge bg-primary d-flex justify-content-start ">
          {" "}
          <div className="d-flex align-items-center">
            <div className="mx-2">Ratings: </div>
            <Rating name="read-only" value={value} readOnly />
          </div>
        </span>
      )}
      <div className="d-flex flex-column align-items-center">
        {plus ? (
          <button className="btn-img ">
            <Card.Img className="circle " variant="top" src={isrc} />
          </button>
        ) : (
          isrc && <Card.Img className="circle" variant="top" src={isrc} />
        )}

        <div className="align-self-start mx-3">
          <h6 className="py-0 fw-bold">{name && `Name : ${name}`}</h6>
          {production && (
            <h6 className="py-0 fw-bold">
              Company's <br /> Production : {production}
            </h6>
          )}
          {clientposts && (
            <h6 className="py-0 fw-bold">Client's Post : {clientposts} </h6>
          )}
        </div>
      </div>
      <Card.Body>
        {review && (
          <>
            {" "}
            <Card.Title>{forClient} </Card.Title>
            <Card.Text className={classes.review}>{review}.</Card.Text>{" "}
          </>
        )}

        {dataSetProvided && (
          <Card.Title>
            {dataSetProvided}
            <Card.Text className="fs-6 fw-bold lead">{dp}.</Card.Text>
          </Card.Title>
        )}
        {!dataSetProvided && !plus && clientReview && (
          <Card.Title>
            Client's Review
            <Card.Text className="fw-normal">{clientReview}</Card.Text>
          </Card.Title>
        )}
        {timePeriod && (
          <Card.Title>
            Time Period for this project :
            <Card.Text className="fw-normal">{timePeriod}</Card.Text>
          </Card.Title>
        )}

        {plan && (
          <Card.Title>
            Plan Chosen from BunkerCart :
            <p className="mx-2 badge bg-primary">{plan}</p>
          </Card.Title>
        )}
      </Card.Body>
    </Card>
  );
}

export default CardProject;
