import React from "react";
import { Grid, Typography, styled } from "@mui/material";
import { Layout, GridHead } from "../../layouts/Grid";

const CoctailName = styled(Typography)(() => ({
  color: "#2b2b2b",
}));

const Details: React.FC = () => {
  return (
    <Layout>
      <GridHead sx={{ justifyContent: "center" }}>
        <CoctailName variant="h4" children="Details" />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3}></Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3}></Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3}></Grid>
        </Grid>
      </GridHead>
    </Layout>
  );
};

export default Details;
