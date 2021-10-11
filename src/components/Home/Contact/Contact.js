import React, { useState } from "react";
import { LocationOn, MailOutline, Phone } from "@material-ui/icons";
import { Col, Container, Row, Card, Form } from "react-bootstrap";
import "./Contact.css";

import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const [email1, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jook6oh",
        "template_6fjohi9",
        e.target,
        "user_EMGgiPsstLR2lfIfbylrL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    resetForm();
  };

  return (
    <div id="contact" className="contact-section py-2">
      <Container className="mt-5">
        <div className="text-center">
          <h4>Contact Us</h4>
          <p>Feel Free to Reach out to us</p>
        </div>
        <Row className="mt-5">
          <Col lg={6} className="address">
            <Address
              Icons={LocationOn}
              title="Address"
              p="Block C-6,Keshav Puram,New Delhi,India"
            />
            <Address Icons={Phone} title="Phone" p="+91 8799713187" />
            <Address
              Icons={MailOutline}
              title="Email"
              p="bunkercart@gmail.com"
            />
          </Col>
          <Col lg={6}>
            <Card className="py-4 px-4">
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold text-black">
                    Full Name
                  </Form.Label>
                  <Form.Control
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    value={name}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold text-black">Email</Form.Label>
                  <Form.Control
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    value={email1}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold text-black">
                    Message
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                    value={message}
                    name="message"
                  />
                </Form.Group>
                <input type="submit" className="btn btn-primary" value="Send" />
              </Form>
            </Card>
          </Col>
          <Link
            style={{ textAlign: "center" }}
            className="privacy text-decoration-none mt-3"
            to="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </Row>
      </Container>
    </div>
  );
}

function Address({ Icons, title, p }) {
  return (
    <div className="d-flex ">
      <div className="p-2 ">
        <Icons fontSize="large" />
      </div>
      <div>
        <h6 className="display-6 fs-3">{title}</h6>
        <p className="lead">{p}</p>
      </div>
    </div>
  );
}

export default Contact;
