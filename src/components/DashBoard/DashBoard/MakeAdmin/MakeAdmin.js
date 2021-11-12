import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    // e.preventDefault();
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://peaceful-everglades-42205.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setEmail("");
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div className="add-service-container">
      <div>
        <h2 className="my-5">Make an Admin</h2>

        <form onSubmit={handleAdminSubmit}>
          <input
            className="m-admin"
            type="email"
            placeholder="Email"
            onBlur={handleOnBlur}
            label="Email"
            variant="standard"
          />
          <Button
            style={{
              backgroundColor: "rgba(24, 24, 24, 0.294)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgb(182, 182, 182)",
            }}
            className="mt-3"
            variant="contained"
            type="submit"
          >
            Make Admin
          </Button>
        </form>
        {success && <Alert severity="success">Made Admin successfully!</Alert>}
      </div>
    </div>
  );
};

export default MakeAdmin;
