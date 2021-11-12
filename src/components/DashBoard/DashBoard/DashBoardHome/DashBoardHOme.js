import * as React from "react";
import { Grid } from "@mui/material";

const DashBoardHOme = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12}>
        <h1
          style={{
            backgroundColor: "#45454538",
            backdropFilter: "blur(9px)",
            textShadow: "1px 2px 4px black",
            border: "1px solid grey",
          }}
          className="p-4 rounded text-white text-center"
        >
          Welcome To Your Dashboard
        </h1>
      </Grid>
    </Grid>
  );
};

export default DashBoardHOme;
