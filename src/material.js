import React from "react";
import { Grid, Paper } from "@material-ui/core";

const CalculatorWrapper = ({ children }) => {
  return (
    <Grid container spacing={3} className="my-5">
      <Grid item xs={12}>
        <Paper>{children}</Paper>
      </Grid>
    </Grid>
  );
};

export default CalculatorWrapper;
