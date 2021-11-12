import {
  Container,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { Grid } from "@mui/material";

import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container className="login-container">
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={12}>
          <h2 className="text-white mb-5"> Login</h2>

          <div className="">
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  borderBottom: "1px solid white",
                  width: "75%",
                  m: 1,
                  color: "white",
                }}
                id="standard-basic"
                label="Your Email"
                name="email"
                onChange={handleOnChange}
                variant="standard"
              />
              <TextField
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",

                  borderBottom: "1px solid white",
                  width: "75%",
                  m: 1,
                  color: "white",
                }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                variant="standard"
              />

              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Login
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <br />
                <Button variant="text">
                  <h5 style={{ textShadow: "1px 2px 3px black" }}>
                    {" "}
                    New User? Please Register
                  </h5>
                </Button>
              </NavLink>
              {isLoading && <CircularProgress />}
              {user?.email && (
                <Alert severity="success">Login successfully!</Alert>
              )}
              {authError && <Alert severity="error">{authError}</Alert>}
            </form>
          </div>
          <p>------------------------</p>
          <Button onClick={handleGoogleSignIn} variant="contained">
            Google Sign In
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
