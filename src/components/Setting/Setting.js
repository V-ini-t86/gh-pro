import React from "react";
import { Container } from "react-bootstrap";
import "./Setting.css";
import NavbarFinal from "../Home/Navbar/Navbar";
import { useAuth } from "../contexts/AuthContext";

function Setting() {
  const { currentUser } = useAuth();
  return (
    <div className="setting-page">
      <NavbarFinal />

      <Container>
        <div className="user-info d-flex p-5 align-items-center">
          <img src={currentUser.photoURL} alt="user-img" />
          <h1 className="mx-5 fw-light">{currentUser.displayName}</h1>
        </div>
        <div className="personal-settings"></div>
      </Container>
    </div>
  );
}

export default Setting;
