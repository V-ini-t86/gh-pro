import React from "react";
import { Link } from "react-router-dom";
import "./Heading.css";
import ModalShow from "./ModalShow";
function Heading() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="position-relative row d-flex align-items-center overflow-hidden p-3 p-md-5 m-md-3 bg-light">
      <div className="col-lg-6 p-lg-5 my-2">
        <h2 className="display-5 fw-normal">About Us</h2>
        <p className="lead fw-normal">
          Bunkercart is an online platform beneficial for industrialists or
          company holders to verify their final product's outlet. We in
          BunkerCart use several Machine Learning techniques and implement the
          Artificial Intelligence models in prediction of the error free product
          and if the product is not precise, we recommend modification for the
          specific part of the product or the alterations of the procedure of
          making that product.
        </p>
        <button
          type="button"
          onClick={() => setModalShow(true)}
          className="btn btn-primary m-2"
        >
          What and How we do?
        </button>
        <ModalShow show={modalShow} onHide={() => setModalShow(false)} />
        <Link to="/start">
          <a className="btn btn-outline-primary" href="#">
            Start Your Project!
          </a>
        </Link>
      </div>
      <div className="col-lg-6 p-lg-5 my-5 d-flex justify-content-md-center justify-content-sm-center justify-content-xs-center">
        <img className="video" src="bunkercart.png" alt="bnk" />
      </div>
      <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
  );
}

export default Heading;
