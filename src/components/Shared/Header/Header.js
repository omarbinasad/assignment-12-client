import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Container>
          <Navbar.Brand Link as={HashLink} to="/home#home">
            <h2>Adventure Pro</h2>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">
              <h5>Home</h5>
            </Nav.Link>
            {/* <Nav.Link as={HashLink} to="/about">
              <h5>About Us</h5>
            </Nav.Link> */}
            <Nav.Link as={HashLink} to="/home#services">
              <h5>Services</h5>
            </Nav.Link>
            <Nav.Link as={HashLink} to="/addservice">
              <h5>Add Services</h5>
            </Nav.Link>
            <Nav.Link as={HashLink} to="/myorders">
              <h5>My Orders</h5>
            </Nav.Link>
            <Nav.Link as={HashLink} to="/manageservices">
              <h5>Manage all Services</h5>
            </Nav.Link>
            <Nav.Link as={HashLink} to="/contact">
              <h5>Contact</h5>
            </Nav.Link>
            {user?.email ? (
              <Button onClick={logOut} variant="secondary">
                Log Out
              </Button>
            ) : (
              <Button
                className="login-btn p-0 border shadow bg-primary "
                variant="white"
              >
                <Nav.Link as={HashLink} to="/login">
                  <h6 className="pt-2 px-3 text-white">Login</h6>
                </Nav.Link>
              </Button>
            )}
            <Navbar.Text>
              <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
