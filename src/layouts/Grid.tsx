import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import SelectAndSearch from "../components/Header/Select/Select";
import CardCoctail from "../components/Card/Card";
//redux
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/coctailStore";
import { coctailStateActions } from "../store/coctailState";

interface GridProps {
  coctails: [];
}

export const Layout = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "fit-content",
  padding: "50px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
}));

export const GridHead = styled(Box)(({ theme }) => ({
  width: "100vw",
  display: "flex",
  boxSizing: "border-box",
  paddingBottom: "50px",
}));

const GridLayout: React.FC<GridProps> = (props) => {
  useEffect(() => {
    !props.coctails
      ? dispatch(coctailStateActions.productsState("0"))
      : dispatch(coctailStateActions.productsState("1"));
  }, [props.coctails]);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Layout>
      <GridHead>
        <SelectAndSearch />
      </GridHead>
      <Grid container spacing={2}>
        {props.coctails
          ? props.coctails.map((coctail: any, index: any) => {
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
            })
          : null}
      </Grid>
    </Layout>
  );
};

export default GridLayout;
