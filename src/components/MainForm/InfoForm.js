import React, { useState, useRef } from "react";
import {
  Form,
  Row,
  Col,
  Container,
  InputGroup,
  ProgressBar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase";
import { useHistory } from "react-router-dom";

function InfoForm() {
  const [validated, setValidated] = useState(false);
  const [zipFile1, setZipFile1] = useState(null);
  const [progressOfFileOne, setProgressOfFileOne] = useState(0);
  const [progressOfFileTwo, setProgressOfFileTwo] = useState(0);

  const [zipFile2, setZipFile2] = useState(null);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const middleNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const companyNameRef = useRef();
  const companyWebsiteNameRef = useRef();
  const companyAddressRef = useRef();
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    setValidated(true);
    addFireStore();
    if (validated) {
      zipFileAdder1(event);
      zipFileAdder2(event);
      history.push("/price");
    }
  };
  console.log(db);
  async function addFireStore() {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: firstNameRef.current.value,
        middle: middleNameRef.current.value,
        last: lastNameRef.current.value,
        username: usernameRef.current.value,
        email: emailRef.current.value,
        phone: phoneNumberRef.current.value,
        companyName: companyNameRef.current.value,
        companyWebsite: companyWebsiteNameRef.current.value,
        companyAddress: companyAddressRef.current.value,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function zipFileAdder1(e) {
    e.preventDefault();
    const storageRef = ref(storage, `files/${zipFile1 && zipFile1.name}`);
    const uploadTask = uploadBytesResumable(storageRef, zipFile1);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    await uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = Math.floor(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressOfFileOne(progress);
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            console.log("Upload is");
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  }

  function zipFileAdder2(e) {
    e.preventDefault();
    const storageRef = ref(storage, `files/${zipFile2 && zipFile2.name}`);
    const uploadTask = uploadBytesResumable(storageRef, zipFile2);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = Math.floor(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressOfFileTwo(progress);
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            console.log("Upload is");
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  }

  return (
    <>
      <Container>
        <div className="mx-5 p-3">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3 d-flex align-items-center">
              <Form.Group as={Col}>
                <Form.Label>File Adder 1</Form.Label>
                <div className="d-flex align-items-center ">
                  <Form.Control
                    type="file"
                    accept=".zip"
                    onChange={(e) => {
                      setZipFile1(e.target.files[0]);
                      zipFileAdder1(e);
                    }}
                  />
                  <ProgressBar
                    className="col-6 mx-2"
                    as={Col}
                    now={progressOfFileOne}
                  />
                </div>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>File Adder 2</Form.Label>
                <div className="d-flex align-items-center ">
                  <Form.Control
                    type="file"
                    accept=".zip"
                    onChange={(e) => {
                      setZipFile2(e.target.files[0]);
                      zipFileAdder2(e);
                    }}
                  />
                  <ProgressBar
                    className="col-6 mx-2"
                    as={Col}
                    now={progressOfFileTwo}
                  />
                </div>
              </Form.Group>
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  zipFileAdder1(e);
                  zipFileAdder2(e);
                }}
              >
                upload
              </button>
            </Row>

            <h1 className="mt-3">Client Information</h1>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  ref={firstNameRef}
                  required
                  type="text"
                  placeholder="First name"
                />
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                  ref={middleNameRef}
                  type="text"
                  placeholder="Middle Name"
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  ref={lastNameRef}
                  required
                  type="text"
                  placeholder="Last name"
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  ref={usernameRef}
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </InputGroup>
            </Form.Group>

            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  ref={emailRef}
                  required
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group controlId="validationCustomPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    ref={phoneNumberRef}
                    type="text"
                    placeholder="PhoneNumber"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Row>

            <h2>Company Information</h2>
            <Form.Group className="mb-3" controlId="validationCompanyName">
              <Form.Label>Company's Name</Form.Label>
              <Form.Control
                ref={companyNameRef}
                required
                type="text"
                placeholder="Company Name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a company name
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="validationCompanyWebsiteLink"
            >
              <Form.Label>Company's Website Link</Form.Label>
              <Form.Control
                ref={companyWebsiteNameRef}
                required
                type="text"
                placeholder="Website Link"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a company website name
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Company Status</Form.Label>
              <div c>
                <input type="radio" value="private" name="private" /> Private
                <input type="radio" value="public" name="public" /> Public
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCompanyAddress">
              <Form.Label>Company's Address</Form.Label>
              <Form.Control
                ref={companyAddressRef}
                required
                type="text"
                placeholder="Address"
              />
            </Form.Group>

            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip>double click to make sure everything is fine</Tooltip>
              }
            >
              <button className="btn btn-primary" type="submit">
                Proceed To Choose Your Plan
              </button>
            </OverlayTrigger>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default InfoForm;
