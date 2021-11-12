import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import { HashLink } from "react-router-hash-link";
import "./Header.css";
import { Box } from "@mui/system";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <Navbar
        className="border shadow"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Container>
          <Navbar.Brand Link as={HashLink} to="/home#home">
            <h1 className="nav-logo">
              <b>
                Flying
                <span
                  style={{
                    color: "#031433",
                    textShadow: "1px 1px 2px  black",
                  }}
                >
                  X
                </span>
              </b>{" "}
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="nav-menu justify-content-end ">
            <Nav.Link as={HashLink} to="/home#home">
              <h6>Home</h6>
            </Nav.Link>
            <Nav.Link as={HashLink} to="/allproducts">
              <h6>Explore</h6>
            </Nav.Link>
            {/* <Nav.Link as={HashLink} to="/myorders">
              <h6>My Orders</h6>
            </Nav.Link> */}

            {/* <Nav.Link as={HashLink} to="/addproduct">
              <h6>Add Product</h6>
            </Nav.Link> */}
            {/* 
            <Nav.Link as={HashLink} to="/manageproducts">
              <h6>Manage Products</h6>
            </Nav.Link> */}
            {/* <Nav.Link as={HashLink} to="/addreview">
              <h6>Add Review</h6>
            </Nav.Link> */}
            {user?.email ? (
              <Box className="d-flex ">
                <Nav.Link as={HashLink} to="/dashboard">
                  <h6 className=" p-2 mt-2 border rounded px-3 text-dark">
                    Dashboard
                  </h6>
                </Nav.Link>

                <Button className="m-3" onClick={logout} variant="secondary">
                  Log Out
                </Button>
              </Box>
            ) : (
              <Button
                className="login-btn p-0 border shadow bg-primary "
                variant="white"
              >
                <Nav.Link as={HashLink} to="/login">
                  <h5 className="pt-1 px-3 text-white">Login</h5>
                </Nav.Link>
              </Button>
            )}
            <Navbar.Text>
              <a
                style={{ textDecoration: "none", marginLeft: "20px" }}
                href="#login"
              >
                {user?.displayName}
              </a>
              <img
                style={{
                  marginLeft: "10px",
                  borderRadius: "50%",
                  width: "60px",
                }}
                src={user?.photoURL}
                alt=""
              />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
