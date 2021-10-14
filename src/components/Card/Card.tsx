import React from "react";
import { styled } from "@mui/material/styles";
import { Paper, Typography } from "@mui/material";

interface CardProps {
  src: string;
  name: string;
}

const CardPaper = styled(Paper)(({ theme }) => ({
  width: "inherit",
  display: "flex",
  flexDirection: "column",
}));

const DrinkName = styled(Typography)(() => ({
  boxSizing: "border-box",
  padding: "20px",
}));

const CardCoctail: React.FC<CardProps> = (props) => {
  return (
    <CardPaper elevation={3}>
      <img
        alt="coctail drink"
        src={props.src}
        style={{ borderRadius: "4px 4px 0px 0px" }}
      />
      <DrinkName children={props.name} />
    </CardPaper>
  );
};

export default CardCoctail;
