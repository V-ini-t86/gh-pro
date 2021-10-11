import { GoogleAuthProvider } from "@firebase/auth";
import React, { useRef } from "react";
import { Navbar, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Navbar.css";

function NavbarFinal() {
  const history = useHistory();
  // const nameRef = useRef();
  let { login, logout, currentUser } = useAuth();
  const loginHandler = () => {
    login();
    // nameRef.current.firstChild.classList.push("text-white");
  };

  return (
    <Navbar className="px-4 nav-class" collapseOnSelect expand="lg">
      <Navbar.Brand>
        <Link className="text-white text-decoration-none fw-bolder" to="/">
          BUNKERCART
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav>
          <Nav.Link className="text-white fw-bolder">
            <Link className="text-white text-decoration-none" to="/current">
              Current Project
            </Link>
          </Nav.Link>
          <Nav.Link className="text-white fw-bolder">
            <Link className="text-white text-decoration-none" to="/previous">
              Previous Project
            </Link>
          </Nav.Link>
          <Nav.Link className="text-white fw-bolder">
            <Link className="text-white text-decoration-none" to="/future">
              Future Project
            </Link>
          </Nav.Link>
          <Nav.Link href="#contact" className="text-white fw-bolder">
            Contact
          </Nav.Link>
          {!currentUser && (
            <Nav.Link className="text-white fw-bolder" onClick={loginHandler}>
              Login
            </Nav.Link>
          )}

          {currentUser && (
            <DropdownButton
              id={`dropdown-variants-secondary`}
              variant="secondary"
              title={currentUser.displayName}
            >
              <Dropdown.Item
                eventKey="1"
                onClick={() => {
                  logout();
                  history.push("/");
                }}
              >
                Logout
              </Dropdown.Item>
              {/* <Dropdown.Item eventKey="2">
                <Link
                  className="text-black text-decoration-none"
                  to="/settings"
                >
                  Settings
                </Link>
              </Dropdown.Item> */}
            </DropdownButton>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarFinal;
