import React, { useRef } from "react";
import { styled } from "@mui/material/styles";
import { Paper, Typography } from "@mui/material";
import { Skeletons } from "../../Skeleton/Skeleton";
//redux
import { useSelector } from "react-redux";
//types[store]
import { RootState } from "../../store/coctailStore";

interface CardProps {
  src: string;
  name: string;
}

const CardPaper = styled(Paper)(() => ({
  width: "inherit",
  minHeight: "430px",
  display: "flex",
  flexDirection: "column",
  userSelect: "none",
  overflow: "hidden",
  marginBottom: "10px",
  zIndex: 1,
}));

const DrinkName = styled(Typography)(() => ({
  boxSizing: "border-box",
  padding: "20px",
  zIndex: 2,
  backgroundColor: "#fff",
  fontWeight: "bold",
  color: "#2b2b2b",
}));

const IngRelated: React.FC<CardProps> = (props) => {
  const coctailName = useRef<HTMLDivElement>(null);
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
          height: "380px",
        }}
      />
      <DrinkName ref={coctailName} children={props.name} />
    </CardPaper>
  ) : (
    <CardPaper>
      <Skeletons />
    </CardPaper>
  );
};

export default IngRelated;
