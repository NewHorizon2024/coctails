import React, { useRef } from "react";
import { styled } from "@mui/material/styles";
import { Paper, Typography } from "@mui/material";

//redux
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/coctailStore";
import { coctailDetailActions } from "../../store/coctailDetails";
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
  fontWeight: "bold",
  color: "#2b2b2b",
}));

const CardCoctail: React.FC<CardProps> = (props) => {
  const coctailName = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const loaded = useSelector<RootState, boolean>(
    (state) => state.cocaState.loaded
  );

  const coctails = useSelector<RootState, []>((state) => state.coca.coctails);

  //test
  const testo = useSelector<RootState, object>(
    (state) => state.coctaildata.cocDetail
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

  const clickHandler = () => {
    if (coctailName.current) {
      const cocName = coctailName.current.textContent;
      const cocObj = coctails.filter((item) => item["strDrink"] === cocName);
      window.sessionStorage.setItem("cocD", JSON.stringify(cocObj));
      dispatch(coctailDetailActions.getDetails(cocObj));
    }
  };

  return loaded ? (
    <CardPaper
      onClick={clickHandler}
      onMouseOver={hoverHanlder}
      onMouseOut={outHandler}
      elevation={3}
    >
      <img
        ref={image}
        alt="coctail drink"
        src={props.src}
        style={{
          borderRadius: "4px 4px 0px 0px",
          transition: "0.5s ease-out",
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

export default CardCoctail;
