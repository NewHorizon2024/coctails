import React, { useEffect, useState, useRef } from "react";
import { Grid, Typography, styled } from "@mui/material";
import { Layout, GridHead } from "../../layouts/Grid";
import Info from "./CoctailDetails";
// redux
import { useSelector } from "react-redux";
//types
import { RootState } from "../../store/coctailStore";
import { loadavg } from "os";

//router
import { useHistory } from "react-router-dom";

const CoctailName = styled(Typography)(() => ({
  color: "#2b2b2b",
}));

const Details: React.FC = () => {
  const layout = useRef<HTMLDivElement>(null);
  const gurdPath = useSelector<RootState, boolean>(
    (state) => state.coctaildata.openDetails
  );
  const [data, setData] = useState<any>({});
  const reduxData = useSelector<RootState, any>(
    (state) => state.coctaildata.cocDetail
  );

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

  return (
    <Layout ref={layout}>
      <GridHead sx={{ justifyContent: "center" }}>
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
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}></Grid>
      </Grid>
    </Layout>
  );
};

export default Details;
