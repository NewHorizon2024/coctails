import React, { useEffect, useState, useRef } from "react";
import { Grid, Typography, styled } from "@mui/material";
import { Layout, GridHead } from "../../layouts/Grid";
import Info from "./CoctailDetails";
import IngredientsApp from "../Ingredients/Ingredients";
// redux
import { useSelector } from "react-redux";
//types
import { RootState } from "../../store/coctailStore";

//router
import { useHistory } from "react-router-dom";

const CoctailName = styled(Typography)(() => ({
  color: "#2b2b2b",
}));

const Details: React.FC = () => {
  const spark = useSelector<RootState, boolean>((state) => state.coca.trigger);
  const layout = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<any>({});
  const history = useHistory();

  useEffect(() => {
    const gurd = window.sessionStorage.getItem("gurd");
    if (gurd) {
      if (gurd === "0") history.push("/");
    }
  }, []);

  useEffect(() => {
    if (layout) {
      layout.current?.scrollIntoView(true);
    }
  }, []);

  useEffect(() => {
    const data = window.sessionStorage.getItem("cocD");
    if (data) {
      const parseData = JSON.parse(data);
      setData(parseData[0]);
    }
  }, []);

  useEffect(() => {}, [spark]);

  return (
    <Layout ref={layout}>
      <GridHead>
        <CoctailName variant="h4" children={data["strDrink"]} />
      </GridHead>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <img
            style={{ width: "100%", borderRadius: "2px" }}
            alt="glass"
            src={data["strDrinkThumb"]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <Info
            id={data["idDrink"]}
            category={data["strCategory"]}
            alco={data["strAlcoholic"]}
            glass={data["strGlass"]}
            instructions={data["strInstructionsDE"]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <IngredientsApp />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Details;
