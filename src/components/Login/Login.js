import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const {
    signInUsingGoogle,
    handleEmailChange,
    handlePassChange,
    handleRegi,
    error,
    handleToggle,
    isLoggedIn,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      console.log(result);
      history.push(redirect_uri);
    });
  };

  return (
    <div className=" p-5 ">
      <div className=" login-container p-5 container">
        {" "}
        <h2 className=" py-5 text-white">
          Please {isLoggedIn ? "Login" : "Register"}
        </h2>
        <form onSubmit={handleRegi}>
          <div className="row mb-3">
            <div className="col-sm-10">
              <input
                onBlur={handleEmailChange}
                type="email"
                className="form-control"
                id="inputEmail3"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-10">
              <input
                onBlur={handlePassChange}
                placeholder="Password"
                type="password"
                className=" form-control"
                id="inputPassword3"
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input
                  onChange={handleToggle}
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                />
                <label
                  className="fs-6s
                text-white  form-check-label"
                  htmlFor="gridCheck1"
                >
                  Already Registered
                </label>
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-danger">{error}</h5>
          </div>
          <button type="submit" className="regi-btn btn btn-primary">
            {isLoggedIn ? "Login" : "Register"}
          </button>
        </form>{" "}
        <br />
        <div>
          <div className="d-flex align-items-center">
            {" "}
            <button
              className="g-btn"
              onClick={handleGoogleLogin}
              classNamebtn
              btn-primary
            >
              Sign in with Google
            </button>
            <span className="text-white ms-2"> ←</span>
            <h5 className="reco-text text-white p-2 mt-2  ms-2">RECOMMENDED</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
