import React from "react";
import { Form, Row } from "react-bootstrap";

function CompanyInfo() {
  return (
    <Row>
      <Form.Group controlId="validationCompanyName">
        <Form.Label>Company's Name</Form.Label>
        <Form.Control required type="text" placeholder="Company Name" />
        <Form.Control.Feedback type="invalid">
          Please enter a company name
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="validationCompanyWebsiteLink">
        <Form.Label>Company's Website Link</Form.Label>
        <Form.Control required type="text" placeholder="Website Link" />
        <Form.Control.Feedback type="invalid">
          Please enter a company website name
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Label>Company Status</Form.Label>
      <div>
        <input type="radio" value="private" name="private" /> Private
        <input type="radio" value="public" name="public" /> Public
      </div>
      <Form.Group controlId="validationCompanyWebsiteLink">
        <Form.Label>Company's Address</Form.Label>
        <Form.Control required type="text" placeholder="Address" />
      </Form.Group>
    </Row>
  );
}

export default CompanyInfo;
