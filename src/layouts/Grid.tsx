import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import SelectAndSearch from "../components/Header/Select/Select";
import CardCoctail from "../components/Card/Card";

interface GridProps {
  coctails: [];
}

const Layout = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "fit-content",
  padding: "50px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const GridHead = styled(Box)(({ theme }) => ({
  width: "100vw",
  display: "flex",
  boxSizing: "border-box",
  paddingBottom: "50px",
}));

const GridLayout: React.FC<GridProps> = (props) => {
  return (
    <Layout>
      <GridHead>
        <SelectAndSearch />
      </GridHead>
      <Grid container spacing={2}>
        {props.coctails.map((coctail: any, index: any) => {
          return (
            <Grid
              item
              key={index.toString()}
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={3}
            >
              <CardCoctail
                name={coctail.strDrink}
                src={coctail.strDrinkThumb}
              />
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
};

export default GridLayout;
