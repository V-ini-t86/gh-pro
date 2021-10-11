import React from "react";
import { Modal } from "react-bootstrap";

function ModalShow(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Description Of Our Working
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <p>
          In Bunker Cart we have developed a 3 stage coding to work on
          categorizing a product whether it is best fit for launch or not.
          Bunkercart at its initial stage requires the client to send a dataset
          of their finest product of (either one or more than one) with various
          clicks from different angles, then the coding team in Bunkercart
          extracts the product from the dataset using object detection
          technique, such that model on further working provides best accuracy.
          And for that we used the best fit and latest 2021 algorithm known as
          YOLOR (MAP 56.1), and on using that we successfully detected the
          object in the provided images dataset and extracted them into
          different files. After that, we ask the client to provide another
          image dataset from their current production of the products their
          industry is currently manufacturing whether it is best fit for usage
          or not. Now here comes Bunkercart perks and its main part, Bunkercart
          will now follow the pattern and will compare your each coming product
          with your previous dataset of best fit product provided at initial
          stage and will tell the client that which product is defective and at
          which part it is broken. And along with that, after reviewing the
          large datasets and the continuous amount of fault detection, we
          recommend revision or alternation of those product's specific parts
          and throughout revision of the procedure is recommended if the
          products are inoperative.
        </p>
        <p>
          In other terms, we assign numbers to each product from the upcoming
          new dataset and with our coded model we pass these images dataset in
          section A and In section B we pass the best fit product's dataset.
          Then we need some time for our created model to compare each image
          from section A (from every angle) with section B's dataset, and on
          epoch 25 if the accuracy rates by more than 90% we assign pass code
          for that particular product in section A and if it is below 90% we
          then assign fail code and pass those images in section C, their in
          that section, another team figures out at which section faults are
          arising with the help of another coded models by Bunkercart, at last
          after successful working with best consumed accuracy then send the
          reports to the client for their further workings.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button class="btn btn-outline-secondary" onClick={props.onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalShow;
