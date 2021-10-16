import React, { useRef } from "react";
import { styled } from "@mui/material/styles";
import { Paper, Typography } from "@mui/material";

//redux
import { useSelector } from "react-redux";
import { RootState } from "../../store/coctailStore";
// Skeletons
import { Skeletons } from "../../Skeleton/Skeleton";

interface CardProps {
  src: string;
  name: string;
}

const CardPaper = styled(Paper)(({ theme }) => ({
  width: "inherit",
  display: "flex",
  flexDirection: "column",
  userSelect: "none",
  cursor: "pointer",
  overflow: "hidden",
  zIndex: 1,
}));

const DrinkName = styled(Typography)(() => ({
  boxSizing: "border-box",
  padding: "20px",
  zIndex: 2,
  backgroundColor: "#fff",
}));

const CardCoctail: React.FC<CardProps> = (props) => {
  const loaded = useSelector<RootState, boolean>(
    (state) => state.cocaState.loaded
  );

  const image = useRef<HTMLImageElement>(null);

  const hoverHanlder = () => {
    return image.current
      ? (image.current.style.transform = "scale(1.1)")
      : null;
  };

  const outHandler = () => {
    return image.current ? (image.current.style.transform = "scale(1)") : null;
  };

  return loaded ? (
    <CardPaper onMouseOver={hoverHanlder} onMouseOut={outHandler} elevation={3}>
      <img
        ref={image}
        alt="coctail drink"
        src={props.src}
        style={{
          borderRadius: "4px 4px 0px 0px",
          transition: "0.5s ease-out",
        }}
      />
      <DrinkName children={props.name} />
    </CardPaper>
  ) : (
    <CardPaper>
      <Skeletons />
    </CardPaper>
  );
};

export default CardCoctail;
